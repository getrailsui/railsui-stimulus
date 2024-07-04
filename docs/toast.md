# Toast

Use toasts to deliver real-time updates to a user without disrupting their flow.

## Usage

```javascript
import { RailsuiToast } from 'railsui-stimulus'
application.register('railsui-toast', RailsuiToast)
```

### Requirements

Toasts typically enter the screen from the left or right side of the viewport. This example accounts for those two variants by extending Tailwind. Extend your `tailwind.config.js` file as follows:

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      keyframes: {
        'toast-from-right': {
          '0%': { transform: 'translateX(50%)', opacity: '0%' },
          '100%': { transform: 'translateX(0)', opacity: '100%' },
        },
        'toast-from-left': {
          '0%': { transform: 'translateX(-50%)', opacity: '0%' },
          '100%': { transform: 'translateX(0)', opacity: '100%' },
        },
      },
      animation: {
        'toast-from-right': 'toast-from-right 0.5s cubic-bezier(0.68, -0.55, 0.27, 1.55)',
        'toast-from-left': 'toast-from-left 0.5s cubic-bezier(0.68, -0.55, 0.27, 1.55)',
      },
    },
  },
  plugins: [],
}
```

If you'd rather just add custom CSS, that's fine too:

```css
/* my-stylesheet.css */

@keyframes toast-from-right {
  0% {
    transform: translateX(50%);
    opacity: 0%;
  }

  100% {
    transform: translateX(0);
    opacity: 100%;
  }
}

@keyframes toast-from-left {
  0% {
    transform: translateX(-50%);
    opacity: 0%;
  }

  100% {
    transform: translateX(0);
    opacity: 100%;
  }
}

.toast-from-right {
  animation: toast-from-right 0.5s cubic-bezier(0.68, -0.55, 0.27, 1.55);
}

.toast-from-left {
  animation: toast-from-left 0.5s cubic-bezier(0.68, -0.55, 0.27, 1.55);
}
```

### Example

```html
<div
  class="relative bg-neutral-100 border-neutral-200 border rounded-b-xl md:p-10 p-6 w-full min-h-[280px] dark:bg-neutral-900 dark:border-neutral-700 overflow-hidden"
>
  <div
    aria-live="assertive"
    class="pointer-events-none absolute flex items-center justify-end px-4 py-6 sm:p-6 top-0 right-0 left-0 w-full toast-from-right"
    data-controller="railsui-toast"
    data-railsui-toast-trigger-on-load-value="true"
  >
    <div
      class="pointer-events-auto w-full max-w-sm overflow-hidden rounded-md bg-white shadow-xl ring-1 ring-black ring-opacity-5 dark:bg-neutral-950 dark:border dark:border-neutral-700/80"
    >
      <div class="p-4">
        <div class="flex items-start">
          <div class="flex-shrink-0">
            <svg
              class="stroke-current size-5 text-indigo-600"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <title>hand-thumb-up</title>
              <g fill="none">
                <path
                  d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V3a.75.75 0 0 1 .75-.75A2.25 2.25 0 0 1 16.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375z"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </g>
            </svg>
          </div>
          <div class="ml-3 w-0 flex-1 pt-0.5">
            <p class="text-sm font-medium text-neutral-900 dark:text-white">Successfully liked!</p>
            <p class="mt-1 text-sm text-neutral-500 dark:text-neutral-300">
              John Doe has been notified.
            </p>
          </div>
          <div class="ml-4 flex flex-shrink-0">
            <button
              type="button"
              class="inline-flex rounded-sm bg-white text-neutral-400 hover:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-neutral-50 dark:bg-transparent dark:focus:ring-neutral-500 dark:hover:text-neutral-100
                                          dark:focus:text-neutral-100"
              data-action="click->railsui-toast#hide"
            >
              <span class="sr-only">Close</span>
              <svg
                class="size-5 stroke-current pointer-events-none"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <title>x-mark</title>
                <path
                  d="M6 18L18 6M6 6l12 12"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
```

### Options

- `triggerOnLoad`: Make the toast notification appear as soon as initialized. Defaults to `false`
