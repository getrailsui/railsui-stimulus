# Tab

## Usage

```javascript
import { RailsuiTabs } from 'railsui-stimulus'
application.register('railsui-tabs', RailsuiTabs)
```

### Example

```html
<div
  data-controller="railsui-tabs"
  data-railsui-tabs-active-tab="py-3 px-4 border-b border-neutral-900 bg-white text-neutral-900"
  data-railsui-tabs-inactive-tab="py-3 px-4 border-b border-neutral-300 bg-white text-neutral-600"
>
  <div class="border-neutral-200 border-b text-neutral-600">
    <nav role="navigation" class="-mb-px flex items-center gap-0">
      <a
        href="#"
        data-railsui-tabs-target="tab"
        data-action="click->railsui-tabs#change"
        class="py-3 px-4 border-b border-neutral-900 bg-white whitespace-nowrap"
        >Activity</a
      >
      <a
        href="#"
        data-railsui-tabs-target="tab"
        data-action="click->railsui-tabs#change"
        class="py-3 px-4 border-b border-neutral-300 bg-white text-neutral-600"
        >Account</a
      >
      <a
        href="#"
        data-railsui-tabs-target="tab"
        data-action="click->railsui-tabs#change"
        class="py-3 px-4 border-b border-neutral-300 bg-white text-neutral-600"
        >Billing</a
      >
      <a
        href="#"
        data-railsui-tabs-target="tab"
        data-action="click->railsui-tabs#change"
        class="py-3 px-4 border-b border-neutral-300 bg-white text-neutral-700"
        >Team</a
      >
    </nav>
  </div>
  <div class="p-4 prose prose-neutral" data-railsui-tabs-target="panel">
    <p>Some activities...</p>
  </div>

  <div class="hidden p-4 prose prose-neutral" data-railsui-tabs-target="panel">
    <p>Account information...</p>
  </div>

  <div class="hidden p-4 prose prose-neutral" data-railsui-tabs-target="panel">
    <p>Billing information...</p>
  </div>
  <div class="hidden p-4 prose prose-neutral" data-railsui-tabs-target="panel">
    <p>Team information...</p>
  </div>
</div>
```

### Options

- `active-tab` - Classes for the active tab
- `inactive-tab` - Classes for the inactive tab
