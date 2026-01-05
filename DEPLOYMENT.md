# Deployment Guide

This guide explains how to deploy your portfolio website to GitHub Pages.

## Quick Start

Your portfolio is now configured for GitHub Pages deployment. Follow these steps:

### 1. Push Your Code to GitHub

```bash
# Make sure you're in the project directory
cd portfolio_website

# Stage all changes
git add .

# Commit the changes
git commit -m "Configure for GitHub Pages deployment"

# Push to GitHub
git push origin main
```

### 2. Enable GitHub Pages

1. Go to your repository on GitHub: `https://github.com/Nabs2000/portfolio_website`
2. Click on **Settings**
3. In the left sidebar, click **Pages**
4. Under "Build and deployment":
   - **Source**: Select **GitHub Actions**
5. The settings will save automatically

### 3. Wait for Deployment

- The GitHub Actions workflow will automatically start
- You can monitor the progress in the **Actions** tab of your repository
- The first deployment takes about 2-3 minutes
- Once complete, your site will be live at: `https://nabs2000.github.io/portfolio_website/`

## Understanding the Deployment

### Automatic Deployment

Every time you push to the `main` branch:
1. GitHub Actions automatically triggers
2. The workflow installs dependencies
3. Builds the production version
4. Deploys to GitHub Pages

### Manual Deployment

You can also trigger deployment manually:
1. Go to the **Actions** tab in your repository
2. Click on "Deploy to GitHub Pages" workflow
3. Click **Run workflow**
4. Select the `main` branch
5. Click **Run workflow**

## Making Updates

To update your portfolio:

1. Edit the relevant files locally
2. Test locally with `npm run dev`
3. Commit and push your changes
4. GitHub Actions will automatically redeploy

## Troubleshooting

### Build Fails

If the GitHub Actions build fails:
1. Check the Actions tab for error details
2. Ensure the build works locally: `npm run build`
3. Fix any errors and push again

### Site Not Loading

If your site doesn't load:
1. Verify GitHub Pages is enabled in Settings → Pages
2. Check that the source is set to "GitHub Actions"
3. Ensure the workflow completed successfully in the Actions tab
4. Wait a few minutes - DNS propagation can take time

### 404 Errors

If you get 404 errors:
1. The base URL in `vite.config.ts` must match your repository name
2. Current setting: `base: "/portfolio_website/"`
3. If you rename the repository, update this setting

### Assets Not Loading

If images or files don't load:
1. Ensure files are in the `public` directory
2. Reference them with absolute paths: `/filename.ext`
3. Rebuild and redeploy

## Custom Domain (Optional)

To use a custom domain:

1. Add a `CNAME` file to the `public` directory with your domain
2. Configure DNS records at your domain provider
3. Enable "Enforce HTTPS" in GitHub Pages settings

Example CNAME file content:
```
yourdomain.com
```

## Local Development

### Development Server
```bash
npm run dev
```
Access at `http://localhost:5173`

### Production Preview
```bash
npm run build
npm run preview
```

## Files Modified for GitHub Pages

The following files were updated from the Replit version:

1. **package.json** - Removed backend dependencies, added gh-pages script
2. **vite.config.ts** - Configured for GitHub Pages with base path
3. **tsconfig.json** - Excluded server and shared directories
4. **.github/workflows/deploy.yml** - Created GitHub Actions workflow
5. **client/src/components/hero-section.tsx** - Updated image path
6. **.gitignore** - Added exclusions for old Replit files

## What's Different from Replit

- **No backend server** - This is now a static site
- **No database** - All content is in the components
- **GitHub Pages hosting** - Instead of Replit hosting
- **GitHub Actions** - Automated deployment pipeline
- **Public directory** - Assets served from `/public`

## Support

If you encounter issues:
1. Check the [GitHub Pages documentation](https://docs.github.com/en/pages)
2. Review the [Vite deployment guide](https://vitejs.dev/guide/static-deploy.html)
3. Check the Actions tab for build logs
