# 🔐 Password Toggle

A lightweight Stimulus controller to toggle password visibility in form fields. Designed for accessibility and smooth UX, this controller updates ARIA attributes and toggles "eye" icons with ease.

---

## ✨ Features

- ✅ Toggle between `password` and `text` input types
- ✅ Updates `aria-pressed` and `aria-label` automatically
- ✅ Swaps visibility icons (`eye` / `eye-slash`)
- ✅ No extra dependencies

---

## 📦 Installation

Make sure you have [`@hotwired/stimulus`](https://stimulus.hotwired.dev/) and [railsui-stimulus](https://github.com/getrailsui/railsui-stimulus) installed in your app.



## Usage

```javascript
import { RailsuiPasswordToggle } from 'railsui-stimulus'
application.register('railsui-password-toggle', RailsuiPasswordToggle)
```


```html
<div data-controller="railsui-password-toggle" class="relative">
  <input
    type="password"
    class="w-full pr-10 border border-neutral-300 rounded shadow-xs rounded-lg"
    data-railsui-password-toggle-target="input"
    autocomplete="current-password"
    value="samplepassword"
  />

  <button
    type="button"
    data-railsui-password-toggle-target="toggle"
    data-action="click->railsui-password-toggle#toggle"
    class="absolute right-2 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-700"
  >
    <!-- eye open -->
    <svg data-railsui-password-toggle-target="iconShow" class="stroke-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><title>eye</title><g fill="none"><path d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></g></svg>

    <!-- eye close -->
    <svg data-railsui-password-toggle-target="iconHide" class="stroke-current hidden" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><title>eye-slash</title><g fill="none"><path d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 0 1-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 0 0-4.243-4.243m4.242 4.242L9.88 9.88" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></g></svg>
  </button>
</div>
```
