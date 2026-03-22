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
    const { filename } = await request.json();

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

    const command = new PutObjectCommand({
      Bucket: process.env.R2_BUCKET_NAME,
      Key: key,
      ContentType: 'application/pdf',
    });

    const uploadUrl = await getSignedUrl(s3, command, { expiresIn: 300 });

    return NextResponse.json({ uploadUrl, key });
  } catch (error) {
    console.error('Failed to generate upload URL:', error);
    return NextResponse.json(
      { error: 'Failed to generate upload URL. Please try again later.' },
      { status: 500 }
    );
  }
}
