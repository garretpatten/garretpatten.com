# Cloudflare Pages Troubleshooting: Module Resolution Error

## Error: "Failed to resolve module specifier 'vue'"

This error indicates that Cloudflare Pages is trying to serve your source files (`src/main.js`) instead of the built files (`dist/index.html` with bundled assets).

## Quick Diagnosis

### Step 1: Check Build Logs in Cloudflare

1. Go to Cloudflare Dashboard → Pages → Your Project
2. Click on the deployment that's showing the error
3. Look at the **Build Logs** tab

**What to look for:**
- ✅ Should see: `npm install` running and completing
- ✅ Should see: `vite build` running
- ✅ Should see: `✓ built in Xms` message
- ✅ Should see: Files listed like `dist/index.html`, `dist/assets/...`

**If you see:**
- ❌ Build errors or warnings
- ❌ No mention of `vite build`
- ❌ No `dist/` folder being created
- ❌ Build completing too quickly (< 10 seconds)

Then the build isn't running correctly.

### Step 2: Verify Cloudflare Pages Settings

Go to **Settings** → **Builds & deployments** and verify:

| Setting | Should Be | Common Mistakes |
|---------|-----------|----------------|
| **Build command** | `npm install && npm run build` | Missing `npm install`, wrong command |
| **Build output directory** | `dist` | `dist/`, `./dist`, or empty |
| **Root directory** | `/` or empty | Should be root |
| **Node version** | `18` or higher | Not set, or too old |

### Step 3: Check What's Being Served

In your browser on the Cloudflare Pages preview:

1. Open Developer Tools (F12)
2. Go to Network tab
3. Refresh the page
4. Look at the `index.html` request

**What you should see:**
- Response should have `<script src="/assets/index-XXXXX.js">` (with hash)
- Should NOT have `<script src="/src/main.js">`

**If you see `/src/main.js`:**
- Cloudflare is serving source files
- Build output directory is wrong, or build didn't run

## Solutions

### Solution 1: Fix Build Output Directory

1. Go to Cloudflare Pages → Settings → Builds & deployments
2. Set **Build output directory** to exactly: `dist`
   - Not `dist/`
   - Not `./dist`
   - Not empty
3. Save changes
4. Go to Deployments → Retry deployment (or push a new commit)

### Solution 2: Set Node Version

1. Go to Cloudflare Pages → Settings → Builds & deployments
2. Under **Environment variables**, add:
   - Key: `NODE_VERSION`
   - Value: `18`
3. Save changes
4. Clear build cache (if option available)
5. Redeploy

### Solution 3: Verify Build Command

The build command must be:
```
npm install && npm run build
```

**Not:**
- `npm run build` (missing install)
- `npm install` (missing build)
- `yarn build` (if using npm)
- `pnpm build` (if using npm)

### Solution 4: Check for Build Errors

In the build logs, look for:
- Dependency installation errors
- Vite build errors
- Missing file errors

Common issues:
- **"Cannot find module"**: Dependencies not installing
- **"Command not found"**: npm/node not available
- **"Permission denied"**: Build system issue

### Solution 5: Force Clean Build

1. In Cloudflare Pages, go to Settings
2. Look for "Clear build cache" option
3. Clear the cache
4. Or delete and recreate the Pages project
5. Push a fresh commit to trigger new build

### Solution 6: Verify Local Build Works

Run locally to ensure build works:
```bash
npm install
npm run build
ls -la dist/
```

You should see:
- `dist/index.html`
- `dist/assets/` folder
- `dist/_redirects` file

If local build fails, fix that first.

### Solution 7: Check File Structure

Ensure your repository has:
```
garretpatten.com/
├── package.json          ✅ Must exist
├── vite.config.js        ✅ Must exist
├── index.html            ✅ Must exist (source)
├── src/                  ✅ Must exist
│   └── main.js           ✅ Must exist
└── public/                ✅ Must exist
    └── _redirects        ✅ Must exist
```

## Verification Checklist

After making changes, verify:

- [ ] Build logs show `vite build` running
- [ ] Build logs show files in `dist/` being created
- [ ] Build completes successfully (no errors)
- [ ] Cloudflare Pages settings show `dist` as output directory
- [ ] Node version is set to 18 or higher
- [ ] Built `index.html` references `/assets/index-*.js` (not `/src/main.js`)
- [ ] Preview URL shows the site correctly
- [ ] No console errors about module resolution

## Still Not Working?

If none of the above works:

1. **Check Cloudflare Pages Documentation**: https://developers.cloudflare.com/pages/
2. **Verify Repository**: Ensure all files are committed and pushed
3. **Try Different Build Tool**: Consider using a different CI/CD if Cloudflare continues to have issues
4. **Contact Cloudflare Support**: If build logs show errors you can't resolve

## Expected Build Output

A successful build should create:
```
dist/
├── index.html              (references bundled assets)
├── assets/
│   ├── index-XXXXX.js      (bundled JavaScript)
│   ├── index-XXXXX.css     (bundled CSS)
│   └── garret-patten-XXX.jpg (image)
└── _redirects              (SPA routing)
```

The `index.html` should contain:
```html
<script type="module" crossorigin src="/assets/index-XXXXX.js"></script>
<link rel="stylesheet" crossorigin href="/assets/index-XXXXX.css">
```

**NOT:**
```html
<script type="module" src="/src/main.js"></script>
```

---

*If you're still seeing the error after following these steps, the issue is likely in the Cloudflare Pages configuration, not your code.*

