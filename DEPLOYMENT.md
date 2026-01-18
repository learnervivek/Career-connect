# Vercel Deployment Guide

## Important: Environment Variables Setup

After deployment, you **MUST** configure these environment variables in your Vercel dashboard:

### Steps:
1. Go to your Vercel project dashboard
2. Navigate to **Settings** → **Environment Variables**
3. Add the following variable:

#### Frontend Environment Variable:
- `VITE_API_URL` - Leave empty (will use same domain) or set to your custom API URL

#### Backend Environment Variables (if using separate backend):
- `MONGODB_URI` - Your MongoDB connection string
- `JWT_SECRET_KEY` - Your JWT secret
- `JWT_EXPIRE` - JWT expiration time (e.g., "7d")
- `COOKIE_EXPIRE` - Cookie expiration in days (e.g., 7)
- `CLOUDINARY_CLOUD_NAME` - Your Cloudinary cloud name
- `CLOUDINARY_API_KEY` - Your Cloudinary API key
- `CLOUDINARY_API_SECRET` - Your Cloudinary API secret
- `FRONTEND_URL` - Your Vercel frontend URL (e.g., https://your-app.vercel.app)
- `NODE_ENV` - Set to "production"

### After Adding Environment Variables:
1. Redeploy your application from the Vercel dashboard
2. Test all functionality

## Local Development

For local development, the app uses `http://localhost:4000` by default from `.env.local`.

To run locally:
```bash
# Backend
cd backend
npm install
npm start

# Frontend (in another terminal)
cd frontend
npm install
npm run dev
```

## Troubleshooting

If you still see "localhost" errors after deployment:
1. Verify all environment variables are set in Vercel
2. Make sure `VITE_API_URL` is empty or set to your production API URL
3. Redeploy the application
4. Clear browser cache and try again
