# Cloudflare Pages Internal Error Fix

## Issue

Build completes successfully but fails at "Validating asset output directory" with:
```
Failed: an internal error occurred. If this continues, contact support
```

## Root Cause

This is a known Cloudflare Pages issue that can occur when:
1. The build command runs `npm install` redundantly (Cloudflare already does this)
2. There's a timing issue during directory validation
3. The output directory validation has a race condition

## Solution

### Step 1: Update Build Command

In Cloudflare Pages settings, change the build command from:
```
npm install && npm run build
```

To:
```
npm run build
```

**Why:** Cloudflare Pages automatically runs `npm install` before your build command. Running it twice can cause timing/validation issues.

### Step 2: Verify Output Directory

Ensure **Build output directory** is set to exactly:
```
dist
```

(Not `dist/`, not `./dist`, just `dist`)

### Step 3: Clear Build Cache

1. Go to Cloudflare Pages → Settings
2. Look for "Clear build cache" option
3. Clear the cache
4. Redeploy

### Step 4: Alternative - Use Wrangler Config

If the above doesn't work, create a `wrangler.toml` file in the root:

```toml
name = "garretpatten-com"
compatibility_date = "2024-01-23"

[env.production]
pages_build_output_dir = "dist"
```

Then deploy using Wrangler CLI or ensure Cloudflare detects this config.

## Verification

After making changes:
1. Check build logs - should see successful build
2. Should NOT see the "internal error" message
3. Deployment should complete successfully
4. Preview URL should work correctly

## If Still Failing

If you still get the internal error after these changes:

1. **Contact Cloudflare Support** - This appears to be a Cloudflare Pages bug
2. **Try Different Build Command Variations:**
   - `npm ci && npm run build` (uses clean install)
   - `npm run build` (simplest)
3. **Check Cloudflare Status** - There might be a service issue
4. **Try Manual Deployment** - Use Wrangler CLI to deploy manually

## Expected Behavior

After fix, you should see:
- ✅ Build completes successfully
- ✅ "Validating asset output directory" passes
- ✅ Deployment completes
- ✅ Site works on preview URL

---

*This error is a Cloudflare Pages platform issue, not a problem with your code or build process.*

