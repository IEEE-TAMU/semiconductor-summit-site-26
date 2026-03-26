import { NextRequest, NextResponse } from 'next/server';
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import { randomUUID } from 'crypto';

const s3 = new S3Client({
  region: 'auto',
  endpoint: process.env.R2_ENDPOINT,
  credentials: {
    accessKeyId: process.env.R2_ACCESS_KEY_ID!,
    secretAccessKey: process.env.R2_SECRET_ACCESS_KEY!,
  },
});

export async function POST(request: NextRequest) {
  try {
    const { filename, name, email, school, major, gradDate } = await request.json();

    if (!filename || typeof filename !== 'string') {
      return NextResponse.json(
        { error: 'A filename is required.' },
        { status: 400 }
      );
    }

    if (!filename.toLowerCase().endsWith('.pdf')) {
      return NextResponse.json(
        { error: 'Only PDF files are accepted.' },
        { status: 400 }
      );
    }

    const sanitized = filename
      .replace(/\.pdf$/i, '')
      .replace(/[^a-zA-Z0-9._-]/g, '_')
      .slice(0, 100);

    const key = `resumes/${sanitized}-${randomUUID()}.pdf`;

    const metadata: Record<string, string> = {};
    if (name) metadata['submitter-name'] = name.slice(0, 200);
    if (email) metadata['submitter-email'] = email.slice(0, 200);
    if (school) metadata['submitter-school'] = school.slice(0, 200);
    if (major) metadata['submitter-major'] = major.slice(0, 200);
    if (gradDate) metadata['submitter-grad-date'] = gradDate.slice(0, 50);

    const command = new PutObjectCommand({
      Bucket: process.env.R2_BUCKET_NAME,
      Key: key,
      ContentType: 'application/pdf',
      Metadata: Object.keys(metadata).length > 0 ? metadata : undefined,
    });

    const uploadUrl = await getSignedUrl(s3, command, { expiresIn: 300 });

    return NextResponse.json({ uploadUrl, key, metadata });
  } catch (error) {
    console.error('Failed to generate upload URL:', error);
    return NextResponse.json(
      { error: 'Failed to generate upload URL. Please try again later.' },
      { status: 500 }
    );
  }
}
