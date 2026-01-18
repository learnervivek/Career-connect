# Vercel Deployment Checklist

## Critical: Project Settings in Vercel Dashboard

### Root Directory Setup:
1. Go to **Settings** → **General**
2. Ensure **Root Directory** is set to: `.` (root)
3. **Framework Preset**: Select "Other"
4. **Build Command**: Leave empty (Vercel will use vercel.json)
5. **Output Directory**: Leave empty (Vercel will use vercel.json)

### Environment Variables:
**Settings** → **Environment Variables** - Add ALL these:

```
DB_URL = [your mongodb connection string]
JWT_SECRET_KEY = [your jwt secret]
JWT_EXPIRE = 7d
COOKIE_EXPIRE = 7
CLOUDINARY_CLOUD_NAME = [your cloudinary cloud name]
CLOUDINARY_API_KEY = [your cloudinary api key]
CLOUDINARY_API_SECRET = [your cloudinary api secret]
FRONTEND_URL = [your vercel app url]
NODE_ENV = production
```

### Build & Deployment:
- Framework: **Other**
- Build Command: (empty - uses vercel.json)
- Install Command: (empty - uses vercel.json)
- Output Directory: (empty - uses vercel.json)
- Root Directory: `.` (the root)

## After Making Changes:

1. Push to GitHub
2. Vercel auto-deploys on push
3. Check **Deployments** tab for build logs
4. If build fails, scroll down in logs to find the error

## Common Issues:

### 404 Error:
- Check that distDir in vercel.json points to `frontend/dist`
- Verify environment variables are set
- Check build logs for errors

### 500 Error on API Calls:
- Verify all backend environment variables are set
- Check MongoDB connection string is correct
- Ensure CORS is configured for your Vercel domain

### Build Fails:
- Check for Node version issues
- Verify package.json files have correct scripts
- Check build logs in Vercel dashboard
