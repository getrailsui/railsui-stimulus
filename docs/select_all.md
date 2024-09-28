# Select all

Add a select all checkbox to a series of child checkboxes. If one or more of the children are checked then
the parent checkbox becomes `indeterminate` until the rest are checked or unchecked entirely.

## Usage

```javascript
import { RailsuiSelectAll } from 'railsui-stimulus'
application.register('railsui-select-all', RailsuiSelectAll)
```

### Targets

- `checkbox` - the child checkboxes (1 or more)
- `selectAll` - the parent checkbox

You'll need to have a parent checkbox and a child checkbox for each item in the list. Use the `data-railsui-select-all-target` attribute on the parent checkbox to target the parent checkbox. Use the `data-railsui-select-checkbox-target` attribute on the child checkboxes to target the child checkboxes.

### Example

```html
<div data-controller="railsui-select-all">
  <div class="flex items-center justify-start">
    <div class="md:w-12 mb-3 md:mb-0">
      <div class="flex items-center gap-3">
        <input
          type="checkbox"
          class="rounded accent-blue-600 border-gray-400"
          name="all_users"
          id="all_users"
          data-railsui-select-all-target="selectAll"
        />
        <label for="all_users" class="form-label mb-0 md:hidden block text-zinc-700"
          >Select all</label
        >
      </div>
    </div>
  </div>
  <ul class="divide-y divide-gray-200">
    <!-- User -->
    <li class="flex flex-wrap items-center justify-start space-y-3 md:space-y-0 py-6 md:py-4">
      <div class="w-10">
        <input
          type="checkbox"
          class="rounded accent-blue-600 border-gray-400"
          data-railsui-select-all-target="checkbox"
        />
      </div>
      <div class="md:flex-1 w-full">
        <div class="flex md:items-center items-start gap-3">
          <img
            src="https://randomuser.me/api/portraits/men/32.jpg"
            class="size-10 rounded-full"
            alt=""
          />
          <h3 class="font-medium md:text-base text-lg leading-tight text-zinc-700 line-clamp-1">
            John Doe
          </h3>
        </div>
      </div>
      <div class="md:w-2/12 w-1/3">
        <span
          class="inline-block rounded-md bg-green-500 text-white text-xs font-medium px-1.5 py-0.5"
        >
          Active
        </span>
      </div>
      <div class="md:w-2/12 w-1/3">Jan 20, 2022</div>
      <div class="md:w-2/12 w-1/3 flex items-center justify-end">
        <a
          href="javascript:void(0);"
          class="text-blue-600 inline-block px-1 py-0.5 font-medium hover:underline"
          >Edit</a
        >
      </div>
    </li>
    <!-- User -->
    <li class="flex flex-wrap items-center justify-start space-y-3 md:space-y-0 py-6 md:py-4">
      <div class=" w-10">
        <input
          type="checkbox"
          class="rounded accent-blue-600 border-gray-400"
          data-railsui-select-all-target="checkbox"
        />
      </div>
      <div class="md:flex-1 w-full">
        <div class="flex md:items-center items-start gap-3">
          <img
            src="https://randomuser.me/api/portraits/men/37.jpg"
            class="size-10 rounded-full"
            alt=""
          />
          <h3 class="font-medium md:text-base text-lg leading-tight text-zinc-700 line-clamp-1">
            Rich Miles
          </h3>
        </div>
      </div>
      <div class="md:w-2/12 w-1/3">
        <span
          class="inline-block rounded-md bg-green-500 text-white text-xs font-medium px-1.5 py-0.5"
        >
          Active
        </span>
      </div>
      <div class="md:w-2/12 w-1/3">Jan 20, 2022</div>
      <div class="md:w-2/12 w-1/3 flex items-center justify-end">
        <a
          href="javascript:void(0);"
          class="text-blue-600 inline-block px-1 py-0.5 font-medium hover:underline"
          >Edit</a
        >
      </div>
    </li>
    <!-- User -->
    <li class="flex flex-wrap items-center justify-start space-y-3 md:space-y-0 py-6 md:py-4">
      <div class="w-10">
        <input
          type="checkbox"
          class="rounded accent-blue-600 border-gray-400"
          data-railsui-select-all-target="checkbox"
        />
      </div>
      <div class="md:flex-1 w-full">
        <div class="flex md:items-center items-start gap-3">
          <img
            src="https://randomuser.me/api/portraits/women/21.jpg"
            class="size-10 rounded-full"
            alt=""
          />
          <h3 class="font-medium md:text-base text-lg leading-tight text-zinc-700 line-clamp-1">
            Rose Mary
          </h3>
        </div>
      </div>
      <div class="md:w-2/12 w-1/3">
        <span
          class="inline-block rounded-md bg-green-500 text-white text-xs font-medium px-1.5 py-0.5"
        >
          Active
        </span>
      </div>
      <div class="md:w-2/12 w-1/3">Jan 20, 2022</div>
      <div class="md:w-2/12 w-1/3 flex items-center justify-end">
        <a
          href="javascript:void(0);"
          class="text-blue-600 inline-block px-1 py-0.5 font-medium hover:underline"
          >Edit</a
        >
      </div>
    </li>
  </ul>
</div>
```
