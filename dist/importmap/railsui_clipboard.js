var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import { Controller } from "@hotwired/stimulus";
import tippy from "tippy.js";
class railsui_clipboard_default extends Controller {
  copy(event) {
    event.preventDefault();
    navigator.clipboard.writeText(this.textToCopy);
    this.showFeedback(event.currentTarget, "Copied!");
  }
  get textToCopy() {
    const { value, innerText } = this.contentTarget;
    return value || innerText;
  }
  showFeedback(element, message) {
    tippy(element, {
      content: message,
      showOnCreate: true,
      onHidden: (instance) => {
        instance.destroy();
      }
    });
  }
}
__publicField(railsui_clipboard_default, "targets", ["content"]);
export {
  railsui_clipboard_default as default
};
//# sourceMappingURL=railsui_clipboard.js.map
