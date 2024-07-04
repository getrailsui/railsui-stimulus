# Count up

A nice drop-in animated effect for stats. Control the duration and display with extended data attributes.

## Usage

```javascript
import { RailsuiCountUp } from 'railsui-stimulus'
application.register('railsui-count-up', RailsuiCountUp)
```

### Example

```html
<h3
  data-controller="railsui-count-up"
  data-railsui-count-up-duration-value="3000"
  data-railsui-count-up-target-value="95"
  data-railsui-count-up="95%"
>
  0%
</h3>
```

### Options

- `duration` - Defaults to `2000`.
- `data-railsui-count-up` - Dictates presentation of the number. For example, adding a `%` sign appends `%`. Decimals are supported.
