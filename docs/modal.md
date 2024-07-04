# Modal

Fluid modals with the help of [stimulus-use](https://github.com/stimulus-use/stimulus-use) for transition effects. Hitting the Escape key closes the modal. Use the `close` method to toggle the modal directly with a button or close icon.

## Usage

```javascript
import { RailsuiModal } from 'railsui-stimulus'
application.register('railsui-modal', RailsuiModal)
```

### Example

```html
<div data-controller="railsui-modal">
  <button
    type="button"
    data-action="click->railsui-modal#open"
    class="py-2 px-3 font-medium text-sm text-center rounded-md focus:ring-4 transition ease-in-out duration-300 no-underline
            inline-flex items-center justify-center bg-white hover:bg-white text-neutral-700 focus:ring-neutral-100 border
            border-neutral-300 shadow-sm hover:border-neutral-400 shadow-neutral-300/20 hover:shadow-neutral-300/50 dark:shadow-none
            dark:bg-neutral-800/70 dark:text-neutral-200 dark:border-neutral-700 dark:focus:ring-neutral-600/30 dark:hover:border-neutral-600
            dark:hover:bg-neutral-800 gap-2"
    tabindex="0"
  >
    Open modal
  </button>

  <div
    aria-labelledby="modal-title"
    aria-modal="true"
    data-railsui-modal-target="container"
    data-action="keyup@window->railsui-modal#closeWithEsc"
    class="hidden fixed inset-0 z-50 overflow-y-auto"
  >
    <div class="h-screen w-full relative flex items-center justify-center">
      <div
        data-railsui-modal-target="content"
        data-transition-enter-active="transition ease-out duration-300"
        data-transition-enter-from="transform opacity-0 scale-95"
        data-transition-enter-to="transform opacity-100 scale-100"
        data-transition-leave-active="transition ease-in duration-300"
        data-transition-leave-from="transform opacity-100 scale-100"
        data-transition-leave-to="transform opacity-0 scale-95"
        class="hidden rounded-xl shadow-xl max-w-lg bg-white m-1 p-8 prose origin-bottom mx-auto dark:bg-neutral-700 dark:text-neutral-200"
      >
        <h3
          id="modal-title"
          class="text-2xl font-bold text-neutral-900 dark:text-neutral-100 tracking-tight"
        >
          Modal Title
        </h3>

        <div class="prose prose-neutral dark:prose-invert mt-2 mb-6">
          <p>
            This modal contains important information about the actions you are about to take. Make
            sure you have read all the instructions carefully.
          </p>
        </div>

        <div class="flex justify-end items-center flex-wrap gap-4">
          <button
            class="py-2 px-3 font-medium text-sm text-center rounded-md focus:ring-4 transition ease-in-out duration-300 no-underline inline-flex items-center justify-center bg-white hover:bg-white text-neutral-700 focus:ring-neutral-100 border border-neutral-300 shadow-sm hover:border-neutral-400 shadow-neutral-300/20 hover:shadow-neutral-300/50 dark:shadow-none dark:bg-neutral-800/70 dark:text-neutral-200 dark:border-neutral-700 dark:focus:ring-neutral-600/30 dark:hover:border-neutral-600 dark:hover:bg-neutral-800"
            data-action="click->railsui-modal#close"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
</div>
```
