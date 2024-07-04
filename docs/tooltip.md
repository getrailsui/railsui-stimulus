# Tooltip

Drop-in tooltips with the help of [tippy.js](https://atomiks.github.io/tippyjs/)

## Usage

```javascript
import { RailsuiTooltip } from 'railsui-stimulus'
application.register('railsui-tooltip', RailsuiTooltip)
```

```html
<button
  data-controller="railsui-tooltip"
  data-railsui-tooltip-content-value="Hi, from the tips of tools"
  class="underline"
>
  Hover here
</button>
<button
  data-controller="railsui-tooltip"
  data-railsui-tooltip-content-value="We raised over $1 billion to engineer the greatest tooltip of our lives. <strong>What's super cool</strong> is that HTML can be embedded into the tooltip for max emphasis."
  data-railsui-tooltip-allow-html-value="true"
  class="underline"
>
  and here
</button>
```

### Options

- `content` - The content of the tooltip is placed here.
- `allowHTML` - Allow HTML elements within the tooltip content. default: `false`
