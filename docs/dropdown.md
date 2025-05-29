<div data-controller="railsui-dropdown" class="relative md:inline-block block md:w-auto w-full">
  <button
    type="button"
    data-action="click->railsui-dropdown#toggle click@window->railsui-dropdown#hide"
    data-railsui-dropdown-target="trigger"
    aria-haspopup="true"
    aria-expanded="false"
    class="py-2 px-3 font-medium text-sm text-center rounded-md focus:ring-4 transition ease-in-out duration-300 no-underline inline-flex items-center justify-center bg-white hover:bg-white text-neutral-700 focus:ring-neutral-100 border border-neutral-300 shadow-sm hover:border-neutral-400 shadow-neutral-300/20 hover:shadow-neutral-300/50 dark:shadow-none dark:bg-neutral-800/70 dark:text-neutral-200 dark:border-neutral-700 dark:focus:ring-neutral-600/30 dark:hover:border-neutral-600 dark:hover:bg-neutral-800 gap-2"
  >
    Dropdown
    <svg
      class="size-3 stroke-current"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <title>chevron-down</title>
      <g fill="none">
        <path
          d="M19.5 8.25l-7.5 7.5-7.5-7.5"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
      </g>
    </svg>
  </button>

  <div
    class="hidden transition transform origin-top-left absolute left-0 top-11 bg-white rounded-lg shadow-xl shadow-neutral-900/10 border border-neutral-200 md:w-[200px] w-full z-50 py-2 dark:bg-neutral-700 dark:shadow-neutral-900/50 dark:border-neutral-500/60 md:text-sm text-base font-medium text-neutral-600 dark:text-neutral-200"
    data-railsui-dropdown-target="menu"
    aria-hidden="true"
    data-transition-enter-from="opacity-0 scale-95"
    data-transition-enter-to="opacity-100 scale-100"
    data-transition-leave-from="opacity-100 scale-100"
    data-transition-leave-to="opacity-0 scale-95"
  >
    <div>
      <a href="#" class="px-4 py-[.4rem] block hover:bg-neutral-50 dark:hover:bg-neutral-600 dark:hover:text-white">Item 1</a>
    </div>
    <div>
      <a href="#" class="px-4 py-[.4rem] block hover:bg-neutral-50 dark:hover:bg-neutral-600 dark:hover:text-white">Item 2</a>
    </div>
    <div>
      <a href="#" class="px-4 py-[.4rem] block hover:bg-neutral-50 dark:hover:bg-neutral-600 dark:hover:text-white">Item 3</a>
    </div>
  </div>
</div>
