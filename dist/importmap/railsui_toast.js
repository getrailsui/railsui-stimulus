var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import { Controller } from "@hotwired/stimulus";
import { useTransition } from "stimulus-use";
class railsui_toast_default extends Controller {
  connect() {
    useTransition(this, {
      element: this.element
    });
    if (this.triggerOnLoadValue) {
      this.toggleTransition();
    }
  }
  toggle() {
    this.toggleTransition();
  }
  hide() {
    this.leave();
  }
  disconnect() {
    this.leave();
  }
}
__publicField(railsui_toast_default, "values", {
  triggerOnLoad: { type: Boolean, default: false }
});
export {
  railsui_toast_default as default
};
//# sourceMappingURL=railsui_toast.js.map
