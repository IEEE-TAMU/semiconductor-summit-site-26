# Resume Upload — R2 Setup Guide

## 1. Create an R2 Bucket

1. Go to the [Cloudflare dashboard](https://dash.cloudflare.com) → **R2 Object Storage** → **Create bucket**.
2. Name it (e.g., `semiconductor-summit-resumes`).
3. Choose a location hint closest to your users (or leave automatic).

## 2. Configure CORS

In the bucket settings → **CORS Policy**, add:

```json
[
  {
    "AllowedOrigins": [
      "https://YOUR-NETLIFY-DOMAIN.netlify.app",
      "http://localhost:3000"
    ],
    "AllowedMethods": ["PUT"],
    "AllowedHeaders": ["Content-Type"],
    "MaxAgeSeconds": 3600
  }
]
```

Replace `YOUR-NETLIFY-DOMAIN` with your actual Netlify domain.

## 3. Create an R2 API Token

1. Go to **R2 Object Storage** → **Manage R2 API Tokens** → **Create API Token**.
2. Permissions: **Object Read & Write**.
3. Scope: Restrict to your bucket.
4. Copy the **Access Key ID** and **Secret Access Key**.
5. Note your **Account ID** (visible in the Cloudflare dashboard URL or sidebar).

Your R2 endpoint is: `https://<ACCOUNT_ID>.r2.cloudflarestorage.com`

## 4. Set Netlify Environment Variables

In the Netlify dashboard → **Site settings** → **Environment variables**, add:

| Variable               | Value                                           |
| ---------------------- | ----------------------------------------------- |
| `R2_ENDPOINT`          | `https://<ACCOUNT_ID>.r2.cloudflarestorage.com` |
| `R2_ACCESS_KEY_ID`     | Your R2 Access Key ID                           |
| `R2_SECRET_ACCESS_KEY` | Your R2 Secret Access Key                       |
| `R2_BUCKET_NAME`       | Your bucket name                                |

## 5. Netlify Build Config

The `netlify.toml` at the project root is already configured. Next.js API routes are automatically deployed as Netlify Functions — no extra config needed.

## 6. Local Development

Copy `.env.example` to `.env.local` and fill in the R2 values, then run:

```bash
npm run dev
```

Navigate to `http://localhost:3000/resume` to test the upload flow.
