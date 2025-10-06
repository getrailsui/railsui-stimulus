var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import { Controller } from "@hotwired/stimulus";
import { useTransition } from "stimulus-use";
class railsui_dropdown_default extends Controller {
  constructor() {
    super(...arguments);
    __publicField(this, "_onKeydown", (event) => {
      if (event.key === "Escape") {
        this.leave();
        this._setAria(false);
      }
    });
  }
  connect() {
    useTransition(this, { element: this.menuTarget });
    this._trigger = this.element.querySelector('[data-action*="toggle"]');
    if (this._trigger) {
      this._trigger.setAttribute("aria-haspopup", "true");
      this._trigger.setAttribute("aria-expanded", "false");
    }
    this.menuTarget.setAttribute("aria-hidden", "true");
    document.addEventListener("keydown", this._onKeydown);
  }
  disconnect() {
    document.removeEventListener("keydown", this._onKeydown);
  }
  toggle() {
    const isOpen = !this.menuTarget.classList.contains("hidden");
    this.toggleTransition();
    this._setAria(!isOpen);
  }
  hide(event) {
    if (!this.element.contains(event.target)) {
      this.leave();
      this._setAria(false);
    }
  }
  _setAria(expanded) {
    if (this._trigger) this._trigger.setAttribute("aria-expanded", expanded);
    this.menuTarget.setAttribute("aria-hidden", !expanded);
  }
}
__publicField(railsui_dropdown_default, "targets", ["menu"]);
export {
  railsui_dropdown_default as default
};
//# sourceMappingURL=railsui_dropdown.js.map
