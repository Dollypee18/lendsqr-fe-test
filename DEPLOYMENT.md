# Deployment Guide

## Prerequisites

1. GitHub account
2. Code pushed to a GitHub repository
3. Vercel or Netlify account

## Option 1: Deploy to Vercel (Recommended)

### Step 1: Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit - Lendsqr assessment"
git branch -M main
git remote add origin
git push -u origin main
```

### Step 2: Deploy to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Click "New Project"
3. Import your GitHub repository
4. Configure project:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`
5. Click "Deploy"

Your app will be live at: `https://your-project-name.vercel.app`

### Automatic Deployments

Every push to the main branch will trigger a new deployment automatically.

## Option 2: Deploy to Netlify

### Step 1: Push to GitHub (same as above)

### Step 2: Deploy to Netlify

1. Go to [netlify.com](https://netlify.com)
2. Click "Add new site" → "Import an existing project"
3. Connect to GitHub and select your repository
4. Configure build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
5. Click "Deploy site"

Your app will be live at: `https://random-name.netlify.app`

## Custom Domain (Optional)

### On Vercel:

1. Go to Project Settings → Domains
2. Add your custom domain
3. Follow DNS configuration instructions

### On Netlify:

1. Go to Site Settings → Domain Management
2. Add custom domain
3. Follow DNS configuration instructions

## Environment Variables

This project doesn't require environment variables as it uses a mock API.

## Build Optimization

The production build is automatically optimized with:

- Code splitting
- Tree shaking
- Minification
- CSS optimization

## Troubleshooting

### Build fails on deployment

- Ensure all dependencies are in `package.json`
- Check Node version (should be 18+)
- Verify build works locally: `npm run build`

### Assets not loading

- Ensure assets are in `public/` directory
- Check file paths are correct
- Verify assets were committed to git

### Routing issues (404 on refresh)

Both Vercel and Netlify handle SPA routing automatically. If issues persist:

**For Netlify**, create `public/_redirects`:

```
/*    /index.html   200
```

**For Vercel**, create `vercel.json`:

```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/" }]
}
```

## Testing Deployment

After deployment, test:

1. Login page loads
2. Login functionality works
3. Dashboard displays correctly
4. User details page accessible
5. Filtering works
6. Pagination works
7. Mobile responsiveness

## Monitoring

Both platforms provide:

- Build logs
- Runtime logs
- Analytics
- Performance metrics

Access these in your project dashboard.

## Rollback

If deployment fails or has issues:

**Vercel**: Go to Deployments → Click on previous successful deployment → Click "Promote to Production"

**Netlify**: Go to Deploys → Click on previous deploy → Click "Publish deploy"
