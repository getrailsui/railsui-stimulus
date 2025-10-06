var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import { Controller } from "@hotwired/stimulus";
class railsui_password_toggle_default extends Controller {
  connect() {
    this._updateUI();
  }
  toggle(event) {
    event.preventDefault();
    this.inputTarget.type = this.inputTarget.type === "password" ? "text" : "password";
    this._updateUI();
  }
  _updateUI() {
    const isVisible = this.inputTarget.type === "text";
    this.toggleTarget.setAttribute("aria-pressed", isVisible);
    this.toggleTarget.setAttribute("aria-label", isVisible ? "Hide password" : "Show password");
    if (this.hasIconShowTarget && this.hasIconHideTarget) {
      this.iconShowTarget.classList.toggle("hidden", isVisible);
      this.iconHideTarget.classList.toggle("hidden", !isVisible);
    }
  }
}
__publicField(railsui_password_toggle_default, "targets", ["input", "toggle", "iconShow", "iconHide"]);
export {
  railsui_password_toggle_default as default
};
//# sourceMappingURL=railsui_password_toggle.js.map
