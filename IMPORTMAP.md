# Importmap Setup Guide

This guide helps Rails developers set up railsui-stimulus with importmaps.

## Quick Start

### 1. Add to your `config/importmap.rb`

```ruby
# Main package
pin "railsui-stimulus", to: "https://unpkg.com/railsui-stimulus@1.1.1/dist/importmap/index.js"

# Required dependencies
pin "@hotwired/stimulus", to: "https://unpkg.com/@hotwired/stimulus@3.2.2/dist/stimulus.js"
pin "tippy.js", to: "https://unpkg.com/tippy.js@6.3.7/dist/esm/tippy.esm.js"
pin "@popperjs/core", to: "https://unpkg.com/@popperjs/core@2.11.8/dist/esm/index.js"
pin "flatpickr", to: "https://unpkg.com/flatpickr@4.6.13/dist/esm/index.js"
pin "hotkeys-js", to: "https://unpkg.com/hotkeys-js@3.13.15/dist/hotkeys.esm.js"
pin "stimulus-use", to: "https://unpkg.com/stimulus-use@0.52.2/dist/index.js"
```

### 2. Add CSS dependencies

Add to your `app/assets/stylesheets/application.css`:

```css
/* Required for Tooltip component */
@import "https://unpkg.com/tippy.js@6.3.7/dist/tippy.css";

/* Required for Date Range Picker component */
@import "https://unpkg.com/flatpickr@4.6.13/dist/flatpickr.min.css";
```

Or add to your layout file (`app/views/layouts/application.html.erb`):

```erb
<%= stylesheet_link_tag "https://unpkg.com/tippy.js@6.3.7/dist/tippy.css", "data-turbo-track": "reload" %>
<%= stylesheet_link_tag "https://unpkg.com/flatpickr@4.6.13/dist/flatpickr.min.css", "data-turbo-track": "reload" %>
```

### 3. Register components

In your `app/javascript/controllers/index.js`:

```javascript
import { Application } from "@hotwired/stimulus"
const application = Application.start()

// Import all components
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
} from "railsui-stimulus"

// Register components
application.register("railsui-clipboard", RailsuiClipboard)
application.register("railsui-count-up", RailsuiCountUp)
application.register("railsui-combobox", RailsuiCombobox)
application.register("railsui-date-range-picker", RailsuiDateRangePicker)
application.register("railsui-dropdown", RailsuiDropdown)
application.register("railsui-modal", RailsuiModal)
application.register("railsui-password-toggle", RailsuiPasswordToggle)
application.register("railsui-range", RailsuiRange)
application.register("railsui-read-more", RailsuiReadMore)
application.register("railsui-select-all", RailsuiSelectAll)
application.register("railsui-tabs", RailsuiTabs)
application.register("railsui-toast", RailsuiToast)
application.register("railsui-toggle", RailsuiToggle)
application.register("railsui-tooltip", RailsuiTooltip)
```

## Using Self-Hosted Files

If you prefer to host the files yourself instead of using a CDN:

### 1. Download the package

```bash
npm pack railsui-stimulus
tar -xzf railsui-stimulus-1.0.11.tgz
```

### 2. Copy files to vendor

```bash
mkdir -p vendor/javascript/railsui-stimulus
cp -r package/dist/importmap/* vendor/javascript/railsui-stimulus/
```

### 3. Update importmap.rb

```ruby
# config/importmap.rb
pin "railsui-stimulus", to: "railsui-stimulus/index.js"
pin_all_from "vendor/javascript/railsui-stimulus", under: "railsui-stimulus"

# Dependencies (still need to be pinned)
pin "@hotwired/stimulus", to: "https://unpkg.com/@hotwired/stimulus@3.2.2/dist/stimulus.js"
pin "tippy.js", to: "https://unpkg.com/tippy.js@6.3.7/dist/esm/tippy.esm.js"
pin "@popperjs/core", to: "https://unpkg.com/@popperjs/core@2.11.8/dist/esm/index.js"
pin "flatpickr", to: "https://unpkg.com/flatpickr@4.6.13/dist/esm/index.js"
pin "hotkeys-js", to: "https://unpkg.com/hotkeys-js@3.13.15/dist/hotkeys.esm.js"
pin "stimulus-use", to: "https://unpkg.com/stimulus-use@0.52.2/dist/index.js"
```

## Component-Specific CSS Notes

Only certain components require external CSS:

- **Tooltip**: Requires `tippy.js` CSS
- **Date Range Picker**: Requires `flatpickr` CSS

All other components work with your Tailwind CSS setup.

## Troubleshooting

### Issue: Components not loading

Check your browser console for import errors. Ensure all dependencies are properly pinned in `importmap.rb`.

### Issue: Styles missing

Make sure you've included the required CSS files for components you're using (Tooltip and Date Range Picker).

### Issue: Version mismatches

Ensure the version numbers in your pins match the versions specified in this guide or the package's `importmap.json` file.

## Alternative CDN Providers

You can use different CDN providers if preferred:

**jsDelivr:**
```ruby
pin "railsui-stimulus", to: "https://cdn.jsdelivr.net/npm/railsui-stimulus@1.1.1/dist/importmap/index.js"
```

**JSPM:**
```ruby
pin "railsui-stimulus", to: "https://ga.jspm.io/npm:railsui-stimulus@1.1.1/dist/importmap/index.js"
```

## Need Help?

- [GitHub Issues](https://github.com/getrailsui/railsui-stimulus/issues)
- [Rails UI Documentation](https://railsui.com)
