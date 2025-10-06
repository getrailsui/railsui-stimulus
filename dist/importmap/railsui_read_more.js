var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import { Controller } from "@hotwired/stimulus";
class railsui_read_more_default extends Controller {
  connect() {
    this.originalText = this.contentTarget.textContent;
    this.truncate();
  }
  truncate() {
    if (this.originalText.length <= this.maxLengthValue) {
      this.buttonTarget.classList.add("hidden");
      return;
    }
    if (!this.expanded) {
      this.contentTarget.textContent = this.originalText.slice(0, this.maxLengthValue) + "...";
      this.buttonTarget.textContent = this.moreTextValue;
    }
  }
  toggle() {
    this.expanded = !this.expanded;
    if (this.expanded) {
      this.contentTarget.textContent = this.originalText;
      this.buttonTarget.textContent = this.lessTextValue;
    } else {
      this.truncate();
    }
  }
}
__publicField(railsui_read_more_default, "targets", ["content", "button"]);
__publicField(railsui_read_more_default, "values", {
  maxLength: { type: Number, default: 100 },
  moreText: { type: String, default: "Read more" },
  lessText: { type: String, default: "Read less" }
});
export {
  railsui_read_more_default as default
};
//# sourceMappingURL=railsui_read_more.js.map
