# Range

Customize range inputs with CSS and Javascript. This is a simple example of how you can style a range input with CSS.

## Usage

```javascript
import { RailsuiRange } from 'railsui-stimulus'
application.register('railsui-range', RailsuiRange)
```

### Input trigger

```html
<div class="form-group" data-controller="railsui-range">
  <label for="volume" class="text-sm font-medium mb-1 block">Volume</label>
  <input
    type="range"
    id="volume"
    class="form-input-range"
    data-railsui-range-target="range"
    data-action="input->railsui-range#onInput"
    min="2"
    max="100"
    value="25"
  />
</div>
```

For this to work we'll need to add a custom CSS variable to our CSS that the controller can manipulate based on event listeners. This variable will be used to set the width of the range input's fill which ultimately is a gradient. This is a simple example of how you can style a range input with CSS.

Browsers handle range inputs differently so the amount of CSS we need to write is different for each browser. Sucks but necessary!

```css
.form-input-range {
  position: relative;
  background: transparent;
  appearance: none;

  --range-fill: 0;
}

.form-input-range::-webkit-slider-thumb {
  appearance: none;
  border: 2px solid white;
  width: 16px;
  height: 16px;
  border-radius: 100%;
  background: white;
  cursor: pointer;
  position: relative;
  top: -4.5px;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.25);
  outline: 1px solid rgba(0, 0, 0, 0.25);
}

.form-input-range::-moz-range-thumb {
  appearance: none;
  border: 2px solid white;
  width: 16px;
  height: 16px;
  border-radius: 100%;
  background: white;
  cursor: pointer;
  position: relative;
  top: -4.5px;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.25);
  outline: 1px solid rgba(0, 0, 0, 0.25);
}

.form-input-range::-ms-thumb {
  appearance: none;
  border: 2px solid white;
  width: 16px;
  height: 16px;
  border-radius: 100%;
  background: white;
  cursor: pointer;
  position: relative;
  top: -4.5px;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.25);
  outline: 1px solid rgba(0, 0, 0, 0.25);
}

.form-input-range::-webkit-slider-runnable-track {
  width: 100%;
  height: 4px;
  border-radius: 10px;
  cursor: pointer;
  background: linear-gradient(to right, #22c55e var(--range-fill), #d1d5db var(--range-fill));

  @media (prefers-color-scheme: dark) {
    background: linear-gradient(to right, #22c55e var(--range-fill), #374151 var(--range-fill));
  }
}

.form-input-range::-moz-range-track {
  width: 100%;
  height: 4px;
  border-radius: 10px;
  cursor: pointer;
  background: linear-gradient(to right, #22c55e var(--range-fill), #d1d5db var(--range-fill));

  @media (prefers-color-scheme: dark) {
    background: linear-gradient(to right, #22c55e var(--range-fill), #374151 var(--range-fill));
  }
}

.form-input-range::-ms-track {
  width: 100%;
  height: 4px;
  border-radius: 10px;
  cursor: pointer;
  background: linear-gradient(to right, #22c55e var(--range-fill), #d1d5db var(--range-fill));

  @media (prefers-color-scheme: dark) {
    background: linear-gradient(to right, #22c55e var(--range-fill), #374151 var(--range-fill));
  }
}
```

Here's the meat and potatoes of the controller.

```javascript
import { Controller } from '@hotwired/stimulus'

export default class extends Controller {
  static targets = ['range']

  connect() {
    this.updateTrack() // Set initial track based on value
  }

  updateTrack() {
    const value =
      ((this.rangeTarget.value - this.rangeTarget.min) /
        (this.rangeTarget.max - this.rangeTarget.min)) *
      100
    this.rangeTarget.style.setProperty('--range-fill', `${value}%`)
  }

  onInput() {
    this.updateTrack() // Update track when input changes
  }
}
```
