# Clipboard

A drop-in click-to-copy component with the help of [tippy.js](https://atomiks.github.io/tippyjs/)

## Usage

```javascript
import { RailsuiClipboard } from 'railsui-stimulus'
application.register('railsui-clipboard', RailsuiClipboard)
```

### Input trigger

```html
<div class="max-w-md">
  <div class="relative">
    <input
      type="text"
      readonly
      value="XDFA-ASE3-ADFA-342S"
      data-controller="railsui-clipboard"
      data-railsui-clipboard-target="content"
      data-action="click->railsui-clipboard#copy"
      class="rounded font-mono px-3 py-1.5 border border-gray-300/80 bg-white focus:border-gray-400/80 focus:ring-4 focus:ring-gray-500/10
  focus:shadow-none focus:outline-none dark:bg-gray-800 dark:focus:border-gray-600 placeholder-gray-600/80
  dark:focus:ring-gray-600/30 dark:placeholder:text-gray-200/50 font-normal antialiased font-sans w-full
  shadow-gray-200/30 dark:shadow-gray-900/20 dark:border-gray-600/80 peer"
    />
    <svg
      class="absolute top-2.5 right-2 stroke-current size-5 peer-focus:stroke-neutral-800 stroke-neutral-400 fill-none"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <title>square-2-stack</title>
      <path
        d="M16.5 8.25V6a2.25 2.25 0 0 0-2.25-2.25H6A2.25 2.25 0 0 0 3.75 6v8.25A2.25 2.25 0 0 0 6 16.5h2.25m8.25-8.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-7.5A2.25 2.25 0 0 1 8.25 18v-1.5m8.25-8.25h-6a2.25 2.25 0 0 0-2.25 2.25v6"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>
    </svg>
  </div>
</div>
```

### Button trigger

```
<div data-controller="railsui-clipboard" class="flex items-center relative max-w-md">
  <input type="text" id="test" value="TRY-RAILSUI-TODAY" data-railsui-clipboard-target="content" class="rounded font-mono px-3 py-1.5 border border-gray-300/80 bg-neutral-100 font-normal antialiased font-sans w-full shadow-gray-200/30 dark:shadow-gray-900/20 dark:border-gray-600/80 pointer-events-none" readonly>
  <button type="button" data-action="click->railsui-clipboard#copy"
    class="absolute top-1 right-1 py-1 px-3 font-medium text-sm text-center rounded-md focus:ring-4 transition ease-in-out duration-300 no-underline inline-flex items-center justify-center bg-white hover:bg-white text-neutral-700 focus:ring-neutral-100 border border-neutral-300 shadow-sm hover:border-neutral-400 shadow-neutral-300/20 hover:shadow-neutral-300/50 dark:shadow-none dark:bg-neutral-800/70 dark:text-neutral-200 dark:border-neutral-700 dark:focus:ring-neutral-600/30 dark:hover:border-neutral-600 dark:hover:bg-neutral-800 gap-3">Copy</button>
</div>
```
