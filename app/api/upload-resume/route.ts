import { NextRequest, NextResponse } from 'next/server';
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';
import { randomUUID } from 'crypto';
import { GoogleSpreadsheet } from 'google-spreadsheet';
import { JWT } from 'google-auth-library';

const s3 = new S3Client({
  region: 'auto',
  endpoint: process.env.R2_ENDPOINT,
  credentials: {
    accessKeyId: process.env.R2_ACCESS_KEY_ID!,
    secretAccessKey: process.env.R2_SECRET_ACCESS_KEY!,
  },
});

const MAX_FILE_SIZE = 2 * 1024 * 1024;

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get('file') as File | null;

    if (!file) {
      return NextResponse.json({ error: 'A file is required.' }, { status: 400 });
    }

    if (file.type !== 'application/pdf') {
      return NextResponse.json({ error: 'Only PDF files are accepted.' }, { status: 400 });
    }

    if (file.size > MAX_FILE_SIZE) {
      return NextResponse.json({ error: 'File size must be under 2MB.' }, { status: 400 });
    }

    const sanitized = file.name
      .replace(/\.pdf$/i, '')
      .replace(/[^a-zA-Z0-9._-]/g, '_')
      .slice(0, 100);

    const key = `resumes/${sanitized}-${randomUUID()}.pdf`;

    const metadata: Record<string, string> = {};
    const name = formData.get('name') as string | null;
    const email = formData.get('email') as string | null;
    const school = formData.get('school') as string | null;
    const major = formData.get('major') as string | null;
    const gradDate = formData.get('gradDate') as string | null;

    if (name) metadata['submitter-name'] = name.slice(0, 200);
    if (email) metadata['submitter-email'] = email.slice(0, 200);
    if (school) metadata['submitter-school'] = school.slice(0, 200);
    if (major) metadata['submitter-major'] = major.slice(0, 200);
    if (gradDate) metadata['submitter-grad-date'] = gradDate.slice(0, 50);

    const buffer = Buffer.from(await file.arrayBuffer());

    await s3.send(new PutObjectCommand({
      Bucket: process.env.R2_BUCKET_NAME,
      Key: key,
      Body: buffer,
      ContentType: 'application/pdf',
      Metadata: Object.keys(metadata).length > 0 ? metadata : undefined,
    }));

    try {
      const auth = new JWT({
        email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
        key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
        scopes: ['https://www.googleapis.com/auth/spreadsheets'],
      });
      const doc = new GoogleSpreadsheet(process.env.GOOGLE_SHEET_ID!, auth);
      await doc.loadInfo();
      const sheet = doc.sheetsByIndex[0];
      await sheet.addRow({
        'Timestamp': new Date().toISOString(),
        'Name': name ?? '',
        'Email': email ?? '',
        'School': school ?? '',
        'Major': major ?? '',
        'Expected Graduation': gradDate ?? '',
        'File': key,
      });
    } catch (sheetsError) {
      console.error('Google Sheets write failed:', sheetsError);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Resume upload failed:', error);
    return NextResponse.json(
      { error: 'Upload failed. Please try again later.' },
      { status: 500 }
    );
  }
}
