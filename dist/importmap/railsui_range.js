var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import { Controller } from "@hotwired/stimulus";
class railsui_range_default extends Controller {
  connect() {
    this.updateTrack();
  }
  updateTrack() {
    const value = (this.rangeTarget.value - this.rangeTarget.min) / (this.rangeTarget.max - this.rangeTarget.min) * 100;
    this.rangeTarget.style.setProperty("--range-fill", `${value}%`);
  }
  onInput() {
    this.updateTrack();
  }
}
__publicField(railsui_range_default, "targets", ["range"]);
export {
  railsui_range_default as default
};
//# sourceMappingURL=railsui_range.js.map
