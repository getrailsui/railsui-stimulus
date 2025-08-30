# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build Commands

```bash
# Development - watch mode with ESM output
bun run dev

# Production build - creates both ESM and CommonJS bundles
bun run build

# Individual build targets
bun run build-esm  # ESM module build
bun run build-cjs  # CommonJS build
```

## Architecture

This is a Stimulus.js component library designed for Rails applications with Tailwind CSS. The library exports 14 reusable UI components that can be imported individually or collectively.

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
- Build outputs to both ESM and CommonJS formats for maximum compatibility

### Entry Points

- `src/index.js` - Main export file that re-exports all components
- `dist/railsui-stimulus.module.js` - ESM bundle output
- `dist/railsui-stimulus.cjs` - CommonJS bundle output

### Component Files

All components are in `src/` directory with naming pattern `railsui_[component_name].js`:
- Each file exports a default class extending Stimulus Controller
- Components use underscore naming in files but PascalCase when exported

## Code Style

Uses Prettier with the following configuration:
- No semicolons
- Single quotes
- 2-space indentation
- Trailing commas
- 100 character print width