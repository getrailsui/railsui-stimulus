# NPM/Bundler Setup Guide

This guide helps you set up railsui-stimulus with npm/yarn/bun and bundlers like Vite, Webpack, esbuild, Rollup, etc.

## Quick Start

### 1. Install the package

```bash
npm install railsui-stimulus
```

Or with yarn:
```bash
yarn add railsui-stimulus
```

Or with bun:
```bash
bun add railsui-stimulus
```

### 2. Import and register components

In your main JavaScript file (e.g., `src/main.js`, `app/javascript/application.js`):

```javascript
import { Application } from '@hotwired/stimulus'

const application = Application.start()

// Import all components at once
import {
  RailsuiClipboard,
  RailsuiCountUp,
  RailsuiCombobox,
  RailsuiDateRangePicker,
  RailsuiDropdown,
  RailsuiModal,
  RailsuiPasswordToggle,
  RailsuiRange,
  RailsuiReadMore,
  RailsuiSelectAll,
  RailsuiTabs,
  RailsuiToast,
  RailsuiToggle,
  RailsuiTooltip,
} from 'railsui-stimulus'

// Register components
application.register('railsui-clipboard', RailsuiClipboard)
application.register('railsui-count-up', RailsuiCountUp)
application.register('railsui-combobox', RailsuiCombobox)
application.register('railsui-date-range-picker', RailsuiDateRangePicker)
application.register('railsui-dropdown', RailsuiDropdown)
application.register('railsui-modal', RailsuiModal)
application.register('railsui-password-toggle', RailsuiPasswordToggle)
application.register('railsui-range', RailsuiRange)
application.register('railsui-read-more', RailsuiReadMore)
application.register('railsui-select-all', RailsuiSelectAll)
application.register('railsui-tabs', RailsuiTabs)
application.register('railsui-toast', RailsuiToast)
application.register('railsui-toggle', RailsuiToggle)
application.register('railsui-tooltip', RailsuiTooltip)
```

### 3. Import required CSS

Some components need external CSS. Import in your main CSS/SCSS file:

```css
/* Required for Tooltip component */
@import 'tippy.js/dist/tippy.css';

/* Required for Date Range Picker component */
@import 'flatpickr/dist/flatpickr.min.css';
```

Or in your JavaScript:

```javascript
import 'tippy.js/dist/tippy.css'
import 'flatpickr/dist/flatpickr.min.css'
```

## Bundler-Specific Setup

### Vite

Works out of the box! Just install and import.

**vite.config.js:**
```javascript
import { defineConfig } from 'vite'

export default defineConfig({
  // No special configuration needed
})
```

### Webpack

Works with standard configuration.

**webpack.config.js:**
```javascript
module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
}
```

### esbuild

```bash
esbuild src/main.js --bundle --outfile=dist/bundle.js
```

### Rollup

**rollup.config.js:**
```javascript
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'

export default {
  input: 'src/main.js',
  output: {
    file: 'dist/bundle.js',
    format: 'iife',
  },
  plugins: [resolve(), commonjs()],
}
```

### Parcel

Works automatically! Just import and build:

```bash
parcel build src/index.html
```

## Import Individual Components

You can also import components individually to reduce bundle size:

```javascript
import { RailsuiModal } from 'railsui-stimulus'

application.register('railsui-modal', RailsuiModal)
```

**Note**: The bundled version includes all dependencies, so importing individual components won't significantly reduce bundle size unless you tree-shake at build time.

## CSS Dependencies

### Required CSS by Component

Only these components need external CSS:

- **RailsuiTooltip**: Requires `tippy.js/dist/tippy.css`
- **RailsuiDateRangePicker**: Requires `flatpickr/dist/flatpickr.min.css`

All other components use Tailwind CSS classes and don't need external stylesheets.

### CSS Import Methods

**Method 1: In your main CSS file**
```css
@import 'tippy.js/dist/tippy.css';
@import 'flatpickr/dist/flatpickr.min.css';
```

**Method 2: In your JavaScript**
```javascript
import 'tippy.js/dist/tippy.css'
import 'flatpickr/dist/flatpickr.min.css'
```

**Method 3: Via CDN (in HTML)**
```html
<link rel="stylesheet" href="https://unpkg.com/tippy.js@6.3.7/dist/tippy.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/flatpickr@4.6.13/dist/flatpickr.min.css">
```

## TypeScript Support

The package includes TypeScript type definitions via JSDoc comments. For better TypeScript support:

**tsconfig.json:**
```json
{
  "compilerOptions": {
    "allowJs": true,
    "checkJs": false,
    "moduleResolution": "node"
  }
}
```

## Rails with Webpacker/jsbundling-rails

If you're using Rails with a JavaScript bundler:

### jsbundling-rails (Rails 7+)

**package.json:**
```json
{
  "scripts": {
    "build": "esbuild app/javascript/*.* --bundle --outdir=app/assets/builds"
  }
}
```

**app/javascript/application.js:**
```javascript
import { Application } from '@hotwired/stimulus'
import { RailsuiModal, RailsuiTooltip } from 'railsui-stimulus'

const application = Application.start()
application.register('railsui-modal', RailsuiModal)
application.register('railsui-tooltip', RailsuiTooltip)
```

### Webpacker (Legacy)

**config/webpacker.yml:**
```yaml
default: &default
  source_path: app/javascript
  source_entry_path: packs
```

**app/javascript/packs/application.js:**
```javascript
import { Application } from '@hotwired/stimulus'
import { RailsuiModal } from 'railsui-stimulus'

const application = Application.start()
application.register('railsui-modal', RailsuiModal)
```

## Optimizing Bundle Size

### Tree Shaking

Most bundlers will tree-shake unused code automatically. To help:

```javascript
// Import only what you need
import { RailsuiModal, RailsuiTooltip } from 'railsui-stimulus'

// Don't do this if you only need a few components:
// import * as RailsUI from 'railsui-stimulus'
```

### Code Splitting

Split components into separate chunks for lazy loading:

**Vite:**
```javascript
const RailsuiModal = () => import('railsui-stimulus').then(m => m.RailsuiModal)
```

**Webpack:**
```javascript
import(/* webpackChunkName: "modal" */ 'railsui-stimulus').then(({ RailsuiModal }) => {
  application.register('railsui-modal', RailsuiModal)
})
```

## Troubleshooting

### Issue: "Cannot find module 'railsui-stimulus'"

**Solution:**
- Run `npm install` or `yarn install`
- Check that `railsui-stimulus` is in your `package.json` dependencies
- Delete `node_modules` and reinstall: `rm -rf node_modules && npm install`

### Issue: Styles not working

**Solution:**
- Make sure you've imported the required CSS files
- Check your bundler's CSS handling configuration
- For Tooltip: Import `tippy.js/dist/tippy.css`
- For Date Range Picker: Import `flatpickr/dist/flatpickr.min.css`

### Issue: Build errors with bundler

**Solution:**
- Check your bundler can handle ES modules
- Ensure you have loaders/plugins for JavaScript
- For Webpack, you may need `babel-loader`
- For older bundlers, you may need `@babel/preset-env`

### Issue: Large bundle size

**Solution:**
- The bundled package is ~102KB minified (includes all dependencies)
- Dependencies included: tippy.js, flatpickr, hotkeys-js, stimulus-use
- To reduce size, consider using importmaps instead (see [IMPORTMAP.md](IMPORTMAP.md))
- Or extract common dependencies if you're already using them elsewhere

### Issue: Stimulus not working

**Solution:**
- Ensure `@hotwired/stimulus` is installed separately
- Check that Stimulus application is started before registering components
- Verify your HTML has proper `data-controller` attributes
- Check browser console for errors

## Package Structure

When you install via npm, you get:

```
node_modules/railsui-stimulus/
├── dist/
│   ├── railsui-stimulus.module.js    # ESM bundle (what you import)
│   ├── railsui-stimulus.cjs          # CommonJS bundle
│   └── importmap/                    # Unbundled files (for importmaps)
├── src/                              # Original source files
├── package.json
└── README.md
```

Your bundler automatically uses `dist/railsui-stimulus.module.js` (ESM) or `dist/railsui-stimulus.cjs` (CommonJS) based on your setup.

## Development vs Production

### Development
```bash
# Install dependencies
npm install

# Start dev server (example with Vite)
npm run dev
```

### Production
```bash
# Build for production
npm run build

# Your bundler will:
# - Minify the code
# - Tree-shake unused code
# - Generate source maps
# - Optimize dependencies
```

The railsui-stimulus package is already minified, so you're getting production-ready code.

## Environment-Specific Configuration

### Development Mode
```javascript
if (process.env.NODE_ENV === 'development') {
  // Enable debug logging
  application.debug = true
}
```

### Production Mode
```javascript
if (process.env.NODE_ENV === 'production') {
  // Disable debug features
  application.debug = false
}
```

## Next Steps

- Check out the [component documentation](docs/)
- View live examples at https://getrailsui.github.io/railsui-stimulus/
- For importmap setup, see [IMPORTMAP.md](IMPORTMAP.md)
- For publishing your own builds, see [PUBLISHING.md](PUBLISHING.md)

## Need Help?

- [GitHub Issues](https://github.com/getrailsui/railsui-stimulus/issues)
- [Rails UI Documentation](https://railsui.com)
- [Stimulus Handbook](https://stimulus.hotwired.dev/)
