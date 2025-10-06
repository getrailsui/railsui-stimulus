# Publishing to npm & CDNs

## Prerequisites

1. **npm account**: Create one at https://www.npmjs.com/signup
2. **npm CLI installed**: Comes with Node.js
3. **Login to npm**: Run `npm login` in your terminal

## Publishing Steps

### 1. Update Version Number

Edit `package.json` and bump the version:

```json
{
  "version": "1.1.0"  // Changed from 1.0.11
}
```

Version numbering (semver):
- **Major** (1.0.0 → 2.0.0): Breaking changes
- **Minor** (1.0.0 → 1.1.0): New features, backward compatible ← Use this for importmap support
- **Patch** (1.0.0 → 1.0.1): Bug fixes

### 2. Build the Package

```bash
bun run build
```

This creates all distribution files:
- `dist/railsui-stimulus.module.js` (ESM bundle)
- `dist/railsui-stimulus.cjs` (CommonJS bundle)
- `dist/importmap/` (Unbundled ESM files)

### 3. Test Locally (Optional but Recommended)

Test the package before publishing:

```bash
# Create a tarball
npm pack

# This creates: railsui-stimulus-1.1.0.tgz
# You can test this in another project with:
# npm install /path/to/railsui-stimulus-1.1.0.tgz
```

### 4. Commit Changes to Git

```bash
git add .
git commit -m "Add importmap support for Rails 7+"
git push origin support-importmaps
```

### 5. Create a Git Tag

```bash
git tag v1.1.0
git push origin v1.1.0
```

### 6. Publish to npm

```bash
npm publish
```

Or if you're using bun:

```bash
bun publish
```

**Important**: Make sure you're logged in with `npm login` first!

### 7. Verify Publication

After publishing, verify at:
- npm: https://www.npmjs.com/package/railsui-stimulus
- jsDelivr: https://cdn.jsdelivr.net/npm/railsui-stimulus@1.1.0/
- unpkg: https://unpkg.com/railsui-stimulus@1.1.0/

## Automatic CDN Availability

Once published to npm, your package is **automatically available** on these CDNs:

### jsDelivr (Recommended)
```
https://cdn.jsdelivr.net/npm/railsui-stimulus@1.1.0/dist/importmap/index.js
```

- Fast global CDN
- Automatic npm sync (5-10 min delay)
- Supports version ranges
- Example: `@1.1.0`, `@1`, `@latest`

### unpkg
```
https://unpkg.com/railsui-stimulus@1.1.0/dist/importmap/index.js
```

- Also syncs from npm automatically
- Alternative to jsDelivr
- Same features

### JSPM (ga.jspm.io)
```
https://ga.jspm.io/npm:railsui-stimulus@1.1.0/dist/importmap/index.js
```

- Specialized for ES modules
- Good for importmaps
- Used in our example configs

## What Gets Published?

The `package.json` doesn't have a `files` field, so npm publishes everything except:
- Files in `.gitignore`
- Files in `.npmignore` (if it exists)

**Currently published:**
- ✅ `src/` - Source files
- ✅ `dist/` - All build outputs (bundled + importmap)
- ✅ `package.json`
- ✅ `README.md`
- ✅ `CLAUDE.md`
- ✅ `IMPORTMAP.md`
- ✅ `BUILD.md`
- ✅ `PUBLISHING.md`
- ✅ `esbuild.importmap.js`
- ✅ `importmap.json`
- ❌ `node_modules/` (excluded by default)
- ❌ `.DS_Store` (in .gitignore)

## Publishing Checklist

Before running `npm publish`:

- [ ] Updated version in `package.json`
- [ ] Ran `bun run build` successfully
- [ ] All tests passing (if you have tests)
- [ ] Committed all changes to git
- [ ] Created and pushed git tag
- [ ] Updated README/CHANGELOG if needed
- [ ] Logged into npm (`npm whoami` to check)

## After Publishing

1. **Update importmap.json** (for next release):
   ```json
   {
     "imports": {
       "railsui-stimulus": "https://cdn.jsdelivr.net/npm/railsui-stimulus@1.1.0/dist/importmap/index.js"
     }
   }
   ```

2. **Update README.md** with new version number in examples

3. **Create GitHub Release**:
   - Go to: https://github.com/getrailsui/railsui-stimulus/releases/new
   - Tag: `v1.1.0`
   - Title: `v1.1.0 - Importmap Support`
   - Description: Use changelog content

4. **Test the CDN URLs** (wait 5-10 minutes after publishing):
   ```bash
   curl -I https://cdn.jsdelivr.net/npm/railsui-stimulus@1.1.0/dist/importmap/index.js
   # Should return HTTP 200
   ```

## Troubleshooting

### "You do not have permission to publish"
- Run `npm whoami` to verify you're logged in
- Check you have access to the `railsui-stimulus` package on npm
- If it's a new package and name is taken, you might need to scope it: `@yourusername/railsui-stimulus`

### "Version already exists"
- You can't republish the same version
- Bump version number and try again
- Use `npm unpublish` only within 72 hours if you made a mistake

### CDN not updating
- jsDelivr and unpkg cache aggressively
- Try purging cache: https://www.jsdelivr.com/tools/purge
- Or use version-specific URLs (not `@latest`)

### Package too large
- Check what's included: `npm pack --dry-run`
- Add `.npmignore` to exclude unnecessary files
- Current package size should be ~300-400KB

## Continuous Deployment (Advanced)

For automated publishing on git tag push, consider:
- GitHub Actions with npm publish step
- Add `NPM_TOKEN` to repository secrets
- Auto-publish on new tags matching `v*.*.*`

Example workflow: https://docs.github.com/en/actions/publishing-packages/publishing-nodejs-packages

## Support

- npm documentation: https://docs.npmjs.com/cli/v9/commands/npm-publish
- jsDelivr: https://www.jsdelivr.com/
- unpkg: https://unpkg.com/
