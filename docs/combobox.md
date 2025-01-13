# Combobox

A dynamic combobox designed with accessibility in mind. You can use keyboard commands to navigate through options with tab, arrow keys, and enter.

Search options using the search field and select an option with the enter key.

The combobox is themed with Tailwind CSS and transitions are supplemented with [stimulus-use](https://github.com/stimulus-use/stimulus-use).

## Usage

```javascript
import { RailsuiCombobox } from 'railsui-stimulus'
application.register('railsui-combobox', RailsuiCombobox)
```

**📍 Important usage notes:**

- A hidden input field is required to submit the value selected to your server. Be sure to add a hidden input field with a `hiddenInput` Stimulus target assigned.

- Pass a `data-value` attribute to each combobox option to set the value of the hidden input field.

- Ensure each option has a unique `id` attribute for proper filtering.

- The combobox will automatically close when the user clicks outside of the combobox as well as using the escape key. You can navigate with arrows, the end key and tabbing.

- SVG icons are sourced from hero icons. You're welcome to use your own icons but you'll need to adjust the CSS and/or Stimulus targets as needed.

### Targets

- `input` - The combobox search input field.
- `list` - The combobox options list.
- `option` - Each combobox option.
- `box` - The combobox container.
- `text` - The combobox label/placeholder text.
- `hiddenInput` - The hidden input field for form submission.
- `checkmark` - The checkmark for visibly indicating an option is selected.
- `noresults` - The no results message if no options exist.

### Values

- `activeClass` - The class to apply to the an option when active.
- `inactiveClass` - The class to apply to the an option when inactive.

## Example

```html
<div
  class="relative w-64"
  data-controller="railsui-combobox"
  data-action="click@window->railsui-combobox#handleOutsideClick"
  data-railsui-combobox-active-class-value="bg-blue-500 text-white hover:bg-blue-600"
  data-railsui-combobox-inactive-class-value="bg-white text-gray-800 hover:bg-gray-50">

    <!-- Hidden input for form submission -->
    <input type="hidden" name="selected_option" data-railsui-combobox-target="hiddenInput" />

    <!-- Top-level combobox button -->
    <div
      aria-expanded="false"
      aria-controls="combobox-list"
      aria-labelledby="combobox-label"
      data-action="click->railsui-combobox#toggleDropdown keydown.enter->railsui-combobox#toggleDropdown"
      data-railsui-combobox-target="box"
      role="combobox"
      tabindex="0"
      class="rounded-md pl-3 pr-2 py-1.5 border border-gray-400/40 bg-white cursor-pointer focus:ring-2 focus:ring-blue-500 placeholder-gray-600/80 font-normal antialiased font-sans w-full shadow-gray-200/30 shadow-sm line-clamp-1 whitespace-nowrap flex items-center justify-between">
      <span id="combobox-label" class="sr-only">Select an option</span>
      <span data-railsui-combobox-target="text">Select an option...</span>
      <svg
        class="stroke-current stroke-gray-500 pointer-events-none size-5" xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24">
        <title>chevron-up-down</title>
        <g fill="none">
          <path d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </g>
      </svg>
    </div>

    <!-- combobox dropdown -->
    <div
      data-railsui-combobox-target="list"
      data-transition-enter-from="opacity-0 scale-95"
      data-transition-enter-to="opacity-100 scale-100"
      data-transition-leave-from="opacity-100 scale-100"
      data-transition-leave-to="opacity-0 scale-95"
      data-action="keydown.esc->railsui-combobox#hideDropdown"
      class="absolute z-10 w-full mt-1 bg-white border rounded shadow-lg max-h-50 rounded-md overflow-y-auto  transition ease-in-out duration-200 origin-top hidden"
      role="listbox"
      aria-labelledby="combobox-label">

      <!-- Search input inside dropdown -->
      <div class="p-2">
        <label for="combobox-search" class="sr-only">Search</label>
        <div class="relative">
          <input
            id="combobox-search"
            type="text"
            placeholder="Search..."
            autocomplete="off"
            aria-autocomplete="list"
            data-railsui-combobox-target="input"
            data-action="input->railsui-combobox#filter keydown->railsui-combobox#handleKeydown"
            class="rounded-md pr-3 pl-8 py-1.5 border border-gray-400/40 bg-white focus:border-gray-400/80 focus:ring-4 focus:ring-gray-400/10 focus:shadow-none focus:outline-none placeholder-gray-600/80 font-normal antialiased font-sans w-full shadow-gray-200/30 shadow-sm">
          <svg
            class="stroke-gray-400 size-4 absolute top-3 left-3"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24">
            <title>magnifying-glass</title>
            <g fill="none">
              <path d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
            </g>
          </svg>
        </div>
      </div>

      <!-- List of options -->
      <ul role="presentation">
        <li
          id="option-1"
          aria-selected="false"
          data-action="click->railsui-combobox#selectOption keydown.enter->railsui-combobox#selectOption"
          data-railsui-combobox-target="option"
          data-value="Option 1"
          class="px-4 py-2 cursor-pointer flex items-center justify-between" role="option"
          tabindex="0"
          >
          Option 1

          <span data-railsui-combobox-target="checkmark" class="hidden" aria-hidden="true">
            <svg class="stroke-current text-blue-900 size-4" xmlns="http://www.w3.org/2000/svg" width="24"
              height="24" viewBox="0 0 24 24">
              <g fill="none">
                <path d="M4.5 12.75l6 6 9-13.5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                </path>
              </g>
            </svg>
          </span>
        </li>
        <li
          id="option-2"
          aria-selected="false"
          data-action="click->railsui-combobox#selectOption keydown.enter->railsui-combobox#selectOption">
          data-value="Option 2"
          data-railsui-combobox-target="option"
          class="px-4 py-2 cursor-pointer flex items-center justify-between" role="option"
          tabindex="0">
          Option 2

          <span data-railsui-combobox-target="checkmark" class="hidden" aria-hidden="true">
            <svg class="stroke-current text-blue-900 size-4" xmlns="http://www.w3.org/2000/svg" width="24"
              height="24" viewBox="0 0 24 24">
              <g fill="none">
                <path d="M4.5 12.75l6 6 9-13.5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                </path>
              </g>
            </svg>
          </span>
        </li>
        <li
          id="option-3"
          aria-selected="false"
          data-action="click->railsui-combobox#selectOption keydown.enter->railsui-combobox#selectOption"
          data-railsui-combobox-target="option"
          data-value="Option 3"
          class="px-4 py-2 cursor-pointer flex items-center justify-between"
          tabindex="0"
          role="option"
          >
          Option 3

          <span data-railsui-combobox-target="checkmark" class="hidden" aria-hidden="true">
            <svg class="stroke-current text-blue-900 size-4" xmlns="http://www.w3.org/2000/svg" width="24"
              height="24" viewBox="0 0 24 24">

              <g fill="none">
                <path d="M4.5 12.75l6 6 9-13.5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                </path>
              </g>
            </svg>
          </span>
        </li>
      </ul>

      <!-- No results message -->
      <div
        data-railsui-combobox-target="noresults"
        class="hidden px-4 py-2 text-gray-500"
        aria-hidden="true">
        No results found
      </div>
    </div>
  </div>
</div>
```

### Options

- `activeClass` - Active classes for the active option.
- `inactiveClass` - Inactive classes for the inactive option.
