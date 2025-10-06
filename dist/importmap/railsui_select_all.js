var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import { Controller } from "@hotwired/stimulus";
class railsui_select_all_default extends Controller {
  connect() {
    this.selectAllTarget.addEventListener("change", this.selectAll.bind(this));
    this.checkboxTargets.forEach((checkbox) => {
      checkbox.addEventListener("change", this.updateSelectAllState.bind(this));
    });
    this.updateSelectAllState();
  }
  selectAll() {
    const isChecked = this.selectAllTarget.checked;
    this.checkboxTargets.forEach((checkbox) => {
      checkbox.checked = isChecked;
    });
  }
  updateSelectAllState() {
    const checkedCount = this.checkboxTargets.filter((checkbox) => checkbox.checked).length;
    if (checkedCount === 0) {
      this.selectAllTarget.checked = false;
      this.selectAllTarget.indeterminate = false;
    } else if (checkedCount === this.checkboxTargets.length) {
      this.selectAllTarget.checked = true;
      this.selectAllTarget.indeterminate = false;
    } else {
      this.selectAllTarget.checked = false;
      this.selectAllTarget.indeterminate = true;
    }
  }
}
__publicField(railsui_select_all_default, "targets", ["checkbox", "selectAll"]);
export {
  railsui_select_all_default as default
};
//# sourceMappingURL=railsui_select_all.js.map
