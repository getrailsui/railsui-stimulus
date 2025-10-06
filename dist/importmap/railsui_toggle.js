var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import { Controller } from "@hotwired/stimulus";
import { useTransition } from "stimulus-use";
class railsui_toggle_default extends Controller {
  constructor() {
    super(...arguments);
    __publicField(this, "_onKeydown", (event) => {
      if (event.key === "Escape") {
        this.toggleableTarget.classList.contains("hidden") || this.toggle();
      }
    });
  }
  connect() {
    useTransition(this, {
      element: this.toggleableTarget
    });
    this._setAria(false);
    document.addEventListener("keydown", this._onKeydown);
  }
  disconnect() {
    document.removeEventListener("keydown", this._onKeydown);
  }
  toggle(event) {
    const isOpen = !this.toggleableTarget.classList.contains("hidden");
    this._setAria(!isOpen, event?.currentTarget);
    this.toggleTransition();
  }
  _setAria(expanded, trigger = this.element.querySelector('[data-action*="toggle"]')) {
    if (trigger) trigger.setAttribute("aria-expanded", expanded);
    this.toggleableTarget.setAttribute("aria-hidden", (!expanded).toString());
  }
}
__publicField(railsui_toggle_default, "targets", ["toggleable"]);
export {
  railsui_toggle_default as default
};
//# sourceMappingURL=railsui_toggle.js.map
