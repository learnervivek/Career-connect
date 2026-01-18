# Vercel Deployment Guide

## Important: Environment Variables Setup

After deployment, you **MUST** configure these environment variables in your Vercel dashboard:

### Steps:
1. Go to your Vercel project dashboard
2. Navigate to **Settings** → **Environment Variables**
3. Add ALL the following variables:

#### Required Environment Variables:

**Database:**
- `DB_URL` - Your MongoDB connection string (e.g., mongodb+srv://user:pass@cluster.mongodb.net/)

**JWT Configuration:**
- `JWT_SECRET_KEY` - Strong secret key for JWT (generate a random string)
- `JWT_EXPIRE` - JWT expiration time (e.g., "7d")
- `COOKIE_EXPIRE` - Cookie expiration in days (e.g., 7)

**Cloudinary Configuration:**
- `CLOUDINARY_CLOUD_NAME` - Your Cloudinary cloud name
- `CLOUDINARY_API_KEY` - Your Cloudinary API key
- `CLOUDINARY_API_SECRET` - Your Cloudinary API secret

**Application Settings:**
- `FRONTEND_URL` - Your Vercel app URL (e.g., https://career-connect-ebon-beta.vercel.app)
- `NODE_ENV` - Set to "production"
- `PORT` - Set to 4000 (optional for Vercel)

**Frontend (Optional):**
- `VITE_API_URL` - Leave empty/unset for same-domain API calls

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
