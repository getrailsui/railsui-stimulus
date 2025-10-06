# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build Commands

```bash
# Development - watch mode with bundled ESM output
bun run dev

# Production build - creates ESM bundle, CJS bundle, AND importmap files
bun run build

# Individual build targets
bun run build-esm       # ESM bundled module build
bun run build-cjs       # CommonJS bundled build
bun run build-importmap # Unbundled ESM files for Rails importmaps
```

## Architecture

This is a Stimulus.js component library designed for Rails applications with Tailwind CSS. The library exports 14 reusable UI components that can be imported individually or collectively.

### Dual Build System

The package supports TWO distribution methods:

1. **Bundled (npm/bundler users)**: Dependencies are bundled into single files
   - Used by npm/yarn/bun users with webpack, vite, esbuild, etc.
   - Files: `dist/railsui-stimulus.module.js` (ESM), `dist/railsui-stimulus.cjs` (CJS)

2. **Unbundled (importmap users)**: Dependencies remain external imports
   - Used by Rails 7+ apps with importmap-rails (no build step)
   - Files: `dist/importmap/*.js` (individual component files)
   - Build script: `esbuild.importmap.js`

### Component Structure

Each component follows this pattern:
- Extends Stimulus `Controller` class
- Uses `stimulus-use` mixins for common behaviors (transitions, click-outside, etc.)
- Defines static targets for DOM element references
- Implements connect/disconnect lifecycle methods
- Contains action methods for user interactions

Key architectural decisions:
- Components are framework-agnostic but optimized for Rails/Hotwire
- All components rely on Tailwind CSS classes for styling
- External dependencies: `@hotwired/stimulus`, `stimulus-use`, `tippy.js`, `flatpickr`, `hotkeys-js`
- **Dual output system**: Bundled for npm users, unbundled for importmap users

### Entry Points & Build Outputs

**Source:**
- `src/index.js` - Main export file that re-exports all components
- `src/railsui_*.js` - Individual component files (14 components)

**Bundled Outputs (for npm/bundler):**
- `dist/railsui-stimulus.module.js` - ESM bundle (minified, dependencies bundled)
- `dist/railsui-stimulus.cjs` - CommonJS bundle (minified, dependencies bundled)

**Unbundled Outputs (for importmaps):**
- `dist/importmap/index.js` - Main entry point (re-exports all components)
- `dist/importmap/railsui_*.js` - Individual component files (dependencies external)

**Configuration:**
- `esbuild.importmap.js` - Build script for importmap distribution
- `importmap.json` - Reference file with CDN URLs for dependencies
- `IMPORTMAP.md` - Complete setup guide for Rails developers

### Component Files

All components are in `src/` directory with naming pattern `railsui_[component_name].js`:
- Each file exports a default class extending Stimulus Controller
- Components use underscore naming in files but PascalCase when exported
- Same source files build to BOTH bundled and unbundled outputs

## When to Use Each Build

### Use Bundled Output When:
- Working with npm/yarn/bun package managers
- Using bundlers like webpack, vite, rollup, esbuild, etc.
- Building a SPA or using a JavaScript framework
- Want all dependencies in a single file

### Use Importmap Output When:
- Working with Rails 7+ and importmap-rails
- Want to avoid build steps entirely
- Prefer CDN-hosted dependencies
- Need fine-grained control over dependency versions
- Following the "no-build" Rails philosophy

## Important Notes for Development

### When Adding New Components:
1. Create new component file in `src/railsui_[name].js`
2. Export it from `src/index.js`
3. Run `bun run build` - it will automatically:
   - Bundle it into ESM/CJS outputs
   - Create unbundled version in `dist/importmap/`
4. No changes needed to build scripts

### When Adding New Dependencies:
1. Add to `package.json` dependencies
2. Update `importmap.json` with CDN URL for the dependency
3. Update `IMPORTMAP.md` with setup instructions
4. Update README.md if it affects installation

### Testing Both Build Outputs:
- **Bundled**: Check `dist/railsui-stimulus.module.js` includes the dependency code
- **Importmap**: Check `dist/importmap/*.js` has `import from "dependency-name"`
- Verify with: `grep "dependency-name" dist/railsui-stimulus.module.js` (should find code)
- Verify with: `grep "dependency-name" dist/importmap/railsui_component.js` (should find import statement)

## Code Style

Uses Prettier with the following configuration:
- No semicolons
- Single quotes
- 2-space indentation
- Trailing commas
- 100 character print width