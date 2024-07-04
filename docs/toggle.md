# Toggle

Toggle appearance quickly and easily. Use [stimulus-use](https://github.com/stimulus-use/stimulus-use) to add transition effects.

## Usage

```javascript
import { RailsuiToggle } from 'railsui-stimulus'
application.register('railsui-toggle', RailsuiToggle)
```

### Example

```html
<div data-controller="railsui-toggle">
  <button
    type="button"
    data-action="click->railsui-toggle#toggle:prevent touch->railsui-toggle#toggle:prevent"
    class="underline"
  >
    Toggle me
  </button>
  <div
    class="hidden origin-top mt-4"
    data-railsui-toggle-target="toggleable"
    data-transition-enter-active="transition ease-out duration-200"
    data-transition-enter-from="transform opacity-0"
    data-transition-enter-to="transform opacity-100"
    data-transition-leave-active="transition ease-in duration-200"
    data-transition-leave-from="transform opacity-100"
    data-transition-leave-to="transform opacity-0"
  >
    <div class="p-4 bg-orange-50 rounded-xl text-orange-800">
      <p>Why hello there...</p>
    </div>
  </div>
</div>
```

### Options

- `triggerOnLoad`: Make the toast notification appear as soon as initialized. Defaults to `false`
