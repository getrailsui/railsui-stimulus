![railsui-stimulus-github](https://github.com/user-attachments/assets/eae7a2d1-ac91-4207-aca0-5ce3dea0fc15)

# Rails UI Stimulus.js Components

A suite of Stimulus.js components built with Tailwind CSS for use in [Rails UI](https://railsui.com). You can use these independently of Rails UI.

[View demo](https://getrailsui.github.io/railsui-stimulus/)

## Pre-requsities

You'll need to install and configure [Stimulus.js](https://github.com/hotwired/stimulus) in your project before using this package.

## Installation

Add the module `railsui-stimulus`

```bash
npm install railsui-stimulus
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
  RailsuiDateRangePicker,
  RailsuiDropdown,
  RailsuiModal,
  RailsuiRange,
  RailsuiSelectAll,
  RailsuiTabs,
  RailsuiToast,
  RailsuiToggle,
  RailsuiTooltip,
} from 'railsui-stimulus'

application.register('railsui-clipboard', RailsuiClipboard)
application.register('railsui-count-up', RailsuiCountUp)
application.register('railsui-date-range-picker', RailsuiDateRangePicker)
application.register('railsui-dropdown', RailsuiDropdown)
application.register('railsui-modal', RailsuiModal)
application.register('railsui-range', RailsuiRange)
application.register('railsui-select-all', RailsuiSelectAll)
application.register('railsui-tabs', RailsuiTabs)
application.register('railsui-toast', RailsuiToast)
application.register('railsui-toggle', RailsuiToggle)
application.register('railsui-tooltip', RailsuiTooltip)
```

## Components

- [Clipboard](docs/clipboard.md)
- [Count up](docs/count_up.md)
- [Date range picker](docs/date_range_picker.md)
- [Dropdown](docs/dropdown.md)
- [Modal](docs/modal.md)
- [Range](docs/range.md)
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
