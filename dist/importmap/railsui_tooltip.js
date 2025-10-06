var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import { Controller } from "@hotwired/stimulus";
import tippy from "tippy.js";
class railsui_tooltip_default extends Controller {
  connect() {
    if (!this.hasContentValue) {
      console.error("Tooltip Error: No content value provided", this.element);
      return;
    }
    let options = {
      allowHTML: this.allowHtmlValue,
      animation: this.animationValue,
      arrow: this.arrowValue,
      content: this.contentValue,
      delay: this.delayValue,
      duration: this.durationValue,
      interactive: this.interactiveValue,
      interactiveBorder: this.interactiveBorderValue,
      maxWidth: this.maxWidthValue,
      offset: this.offsetValue,
      placement: this.placementValue,
      touch: this.touchValue,
      zIndex: this.zIndexValue
    };
    this.tippy = tippy(this.element, options);
  }
  disconnect() {
    this.tippy.destroy();
  }
}
__publicField(railsui_tooltip_default, "values", {
  allowHtml: { type: Boolean, default: false },
  animation: { type: String, default: "fade" },
  arrow: { type: Boolean, default: true },
  content: String,
  delay: { type: Array, default: [150, 0] },
  duration: { type: Array, default: [300, 250] },
  followCursor: { type: Boolean, default: false },
  interactive: { type: Boolean, default: false },
  interactiveBorder: { type: Number, default: 15 },
  maxWidth: { type: Number, default: 350 },
  offset: { type: Array, default: [0, 10] },
  placement: { type: String, default: "bottom" },
  touch: { type: Array, default: ["hold", 500] },
  zIndex: { type: Number, default: 9999 }
});
export {
  railsui_tooltip_default as default
};
//# sourceMappingURL=railsui_tooltip.js.map
