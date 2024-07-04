# Date Range Picker

A custom date range picker built with [flatpickr.js](https://github.com/flatpickr/flatpickr). Range selected outputs to a hidden input.

## Usage

```javascript
import { RailsuiDateRangePicker } from 'railsui-stimulus'
application.register('railsui-date-range-picker', RailsuiDateRangePicker)
```

### Example

Example with custom options passed

```html
<button
  type="button"
  class="btn btn-white..."
  data-controller="date-range-picker"
  data-date-range-picker-date-format-value="m-d-Y"
  data-date-range-picker-date-min-date-value="<%= Date.today.year - 1 %>"
>
  <span data-date-range-picker-target="label"></span>
  <input type="hidden" data-date-range-picker-target="input" />
</button>
```

### Options

Pass these as stimulus values:

- `mode`: default: `range`
- `dateFormat`: default `Y-m-d`
- `minDate`: default `today`
- `defaultDate`: default(array) `[new Date(), new Date(currentDate.getTime() + 7 * 24 * 60 * 60 * 1000)]`
