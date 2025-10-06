![railsui-stimulus-github](https://github.com/user-attachments/assets/eae7a2d1-ac91-4207-aca0-5ce3dea0fc15)

# Rails UI Stimulus.js Components

![Test Status](https://github.com/getrailsui/railsui-stimulus/actions/workflows/test.yml/badge.svg)

A suite of Stimulus.js components built with Tailwind CSS for use in [Rails UI](https://railsui.com). You can use these independently of Rails UI.

[View demo](https://getrailsui.github.io/railsui-stimulus/)

## Pre-requsities

You'll need to install and configure [Stimulus.js](https://github.com/hotwired/stimulus) in your project before using this package.

## Installation

### Option 1: Using importmaps (Recommended for Rails 7+)

Rails 7+ ships with importmap-rails by default. This method doesn't require npm or a build step.

📚 **[Complete Importmap Guide →](IMPORTMAP.md)** - Includes self-hosted setup, troubleshooting, and more.

1. Pin the package and its dependencies:

```bash
./bin/importmap pin railsui-stimulus
```

2. Add the required dependencies to your `config/importmap.rb`:

```ruby
# config/importmap.rb
pin "railsui-stimulus", to: "https://cdn.jsdelivr.net/npm/railsui-stimulus@1.0.11/dist/importmap/index.js"

# Pin dependencies
pin "@hotwired/stimulus", to: "https://ga.jspm.io/npm:@hotwired/stimulus@3.2.2/dist/stimulus.js"
pin "tippy.js", to: "https://ga.jspm.io/npm:tippy.js@6.3.7/dist/tippy.esm.js"
pin "flatpickr", to: "https://ga.jspm.io/npm:flatpickr@4.6.13/dist/esm/index.js"
pin "hotkeys-js", to: "https://ga.jspm.io/npm:hotkeys-js@3.13.7/dist/hotkeys.esm.js"
pin "stimulus-use", to: "https://ga.jspm.io/npm:stimulus-use@0.52.2/dist/index.js"
```

3. Add required CSS files to your `app/assets/stylesheets/application.css` or include via CDN:

```css
/* For Tooltip component */
@import "https://unpkg.com/tippy.js@6.3.7/dist/tippy.css";

/* For Date Range Picker component */
@import "https://cdn.jsdelivr.net/npm/flatpickr@4.6.13/dist/flatpickr.min.css";
```

Or in your layout file:

```erb
<%= stylesheet_link_tag "https://unpkg.com/tippy.js@6.3.7/dist/tippy.css" %>
<%= stylesheet_link_tag "https://cdn.jsdelivr.net/npm/flatpickr@4.6.13/dist/flatpickr.min.css" %>
```

4. Import components in your JavaScript entrypoint (e.g., `app/javascript/controllers/index.js`):

```javascript
import { Application } from "@hotwired/stimulus"

const application = Application.start()

// Import components
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

### Option 2: Using npm/yarn/bun (For bundler-based projects)

📚 **[NPM/Bundler Setup Guide →](BUILD.md)** - Detailed instructions for Vite, Webpack, esbuild, etc.

Add the module `railsui-stimulus`

```bash
npm install railsui-stimulus
```

```bash
yarn add railsui-stimulus
```

```bash
bun add railsui-stimulus
```

Import it in your main entrypoint file.

```javascript
// Start Stimulus
import { Application } from '@hotwired/stimulus'

const application = Application.start()

// Import components adhoc.
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

## Documentation

### Setup Guides
- **[IMPORTMAP.md](IMPORTMAP.md)** - Complete importmap setup guide (Rails 7+)
- **[BUILD.md](BUILD.md)** - NPM/bundler setup guide (Vite, Webpack, etc.)
- **[PUBLISHING.md](PUBLISHING.md)** - How to publish and get on CDNs

### Components

- [Clipboard](docs/clipboard.md)
- [Count up](docs/count_up.md)
- [Combobox](docs/combobox.md)
- [Date range picker](docs/date_range_picker.md)
- [Dropdown](docs/dropdown.md)
- [Modal](docs/modal.md)
- [Password Toggle](docs/password_toggle.md)
- [Range](docs/range.md)
- [Read more](docs/read_more.md)
- [Select all](docs/select_all.md)
- [Tab](docs/tab.md)
- [Toast](docs/toast.md)
- [Toggle](docs/toggle.md)
- [Tooltip](docs/tooltip.md)

## Styles

The examples provided come from some of the UI from Rails UI. You'll want to tweak this to match your needs, or go check out [Rails UI](https://railsui.com) for drop-in UI for your next Ruby on Rails application.

## Extending

With Stimulus, you can inherit one component from another. Inherited controllers automatically access the targets defined by their parent class.

If you override the `connect`, `disconnect`, or any other methods from the parent, call `super.method()` so the parent’s functionality is properly executed.

```javascript
import { RailsuiToggle } from 'railsui-stimulus'

export default class CheckboxToggle extends RailsuiToggle {
  connect() {
    super.connect()
    console.log('toggleable', this.toggleableTarget)
  }
}
```

## Bugs/Contributing

Run `npx serve` locally to preview all components.

Bug reports and pull requests are welcome! Head to [https://github.com/getrailsui/railsui-stimulus](https://github.com/getrailsui/railsui-stimulus).

## Build Ruby on Rails apps faster than ever

[Rails UI](https://railsui.com) gives Rails developers instance access to professionally designed templates and components.

Leverage breathtaking UI to fast-track your next idea.
