# Cloudflare Pages Deployment Configuration

## Overview

This project has been rewritten from a static HTML site to a Vue 3 SPA with Vite. The deployment configuration for Cloudflare Pages needs to be updated accordingly.

## Required Changes

### 1. Build Settings

Update your Cloudflare Pages project settings:

**Build Command:**
```
npm install && npm run build
```

**Build Output Directory:**
```
dist
```

**Root Directory (if applicable):**
```
/ (root of repository)
```

**Node Version:**
```
18.x or higher
```

### 2. Environment Variables

No environment variables are required for basic deployment. However, if you want to use environment variables for the Formspree form ID in the future, you can add:

- `VITE_FORMSPREE_ID` (optional, for future use)

### 3. SPA Routing Configuration

A `_redirects` file has been created in the `public/` directory. This file will be automatically copied to the `dist/` folder during build and will handle client-side routing.

The redirect rule:
```
/*    /index.html   200
```

This ensures that all routes (like `/about`, `/resume`, etc.) serve the `index.html` file with a 200 status code, allowing Vue Router to handle the routing on the client side.

**Important:** Cloudflare Pages automatically recognizes `_redirects` files in the build output directory.

## Step-by-Step Update Instructions

### Option 1: Update via Cloudflare Dashboard

1. Go to your Cloudflare Dashboard
2. Navigate to **Pages** → Your Project
3. Go to **Settings** → **Builds & deployments**
4. Update the following fields:
   - **Build command:** `npm install && npm run build`
   - **Build output directory:** `dist`
   - **Root directory:** `/` (or leave empty if root)
5. Under **Environment variables** (if needed):
   - Add `NODE_VERSION` = `18` (or higher)
6. Save changes
7. Trigger a new deployment (or push a commit to trigger auto-deploy)

### Option 2: Update via `wrangler.toml` (if using Wrangler CLI)

If you're using Wrangler for deployment, create or update `wrangler.toml`:

```toml
name = "garretpatten-com"
compatibility_date = "2024-01-01"

[env.production]
pages_build_output_dir = "dist"
```

Then deploy with:
```bash
wrangler pages deploy dist
```

## Verification

After deployment, verify:

1. **Homepage loads:** `https://yourdomain.com/` should redirect to `/about` and display correctly
2. **Routes work:** Navigate to `/resume`, `/projects`, `/hobbies`, `/contact` - all should work without 404 errors
3. **Direct URL access:** Try accessing `https://yourdomain.com/resume` directly - should load correctly
4. **Dark mode:** Toggle dark mode and refresh - preference should persist
5. **Build artifacts:** Check that `dist/` contains:
   - `index.html`
   - `assets/` folder with JS and CSS
   - `_redirects` file

## Troubleshooting

### Issue: Routes return 404

**Solution:** Ensure the `_redirects` file is in the `public/` directory and being copied to `dist/` during build. Check the build logs to confirm.

### Issue: Build fails

**Possible causes:**
- Node version too old (need 18+)
- Missing dependencies (run `npm install` locally first)
- Build command incorrect

**Solution:**
- Set Node version to 18 or higher in Cloudflare Pages settings
- Verify `package.json` has all dependencies
- Check build logs for specific errors

### Issue: Assets not loading (404 on JS/CSS)

**Solution:**
- Verify build output directory is set to `dist`
- Check that Vite is generating assets correctly (run `npm run build` locally)
- Ensure Cloudflare Pages is serving from the correct directory

### Issue: Form submission fails

**Solution:**
- Update `src/components/ContactForm.vue` with your actual Formspree form ID
- Verify Formspree form is configured to send emails to `garret.patten@proton.me`
- Check browser console for CORS errors (Formspree should handle this)

## Build Process

When Cloudflare Pages builds your site:

1. **Install dependencies:** `npm install` installs all packages
2. **Build:** `npm run build` runs Vite build process:
   - Compiles Vue components
   - Processes Tailwind CSS
   - Bundles and minifies JavaScript
   - Optimizes assets
   - Copies `public/` files (including `_redirects`) to `dist/`
3. **Deploy:** Cloudflare Pages serves files from `dist/` directory
4. **Routing:** `_redirects` file ensures all routes serve `index.html`

## Pre-Deployment Checklist

- [ ] `_redirects` file exists in `public/` directory
- [ ] Build command updated to `npm install && npm run build`
- [ ] Build output directory set to `dist`
- [ ] Node version set to 18 or higher
- [ ] Formspree form ID updated in `ContactForm.vue`
- [ ] Test build locally: `npm run build` succeeds
- [ ] Test preview locally: `npm run preview` works correctly
- [ ] All routes work in local preview

## Additional Notes

### Custom Domain

If you're using a custom domain, ensure DNS is properly configured:
- CNAME record pointing to your Cloudflare Pages domain
- SSL/TLS set to "Full" or "Full (strict)"

### Performance

Cloudflare Pages automatically:
- Serves assets via CDN
- Enables compression (gzip/brotli)
- Provides DDoS protection
- Caches static assets

### Analytics (Optional)

You can add Cloudflare Web Analytics or other analytics tools by:
1. Adding script tags to `index.html`
2. Or using a Vue plugin for analytics

## Migration from Old Static Site

If you were previously deploying a static HTML file:

**Before:**
- Build command: None (or empty)
- Build output: Root directory with `index.html`

**After:**
- Build command: `npm install && npm run build`
- Build output: `dist/` directory

The old `index.html` in the root is now the Vue app entry point and will be processed by Vite during build.

---

*Last updated: After Vue 3 rewrite*

