var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import { Controller } from "@hotwired/stimulus";
import flatpickr from "flatpickr";
const currentDate = /* @__PURE__ */ new Date();
const oneWeekLater = new Date(currentDate.getTime() + 7 * 24 * 60 * 60 * 1e3);
class railsui_date_range_picker_default extends Controller {
  connect() {
    this.rangeValue = this.rangeValue.map((dateString) => new Date(dateString));
    let self = this;
    const picker = flatpickr(this.element, {
      mode: this.modeValue,
      minDate: this.minDateValue,
      dateFormat: this.dateFormatValue,
      defaultDate: this.rangeValue,
      onChange: function(selectedDates, dateStr, instance) {
        self.setCurrentRange(instance);
      }
    });
    this.setCurrentRange(picker);
  }
  setCurrentRange(picker) {
    const formatDate = (date) => {
      const options = { month: "short", day: "numeric" };
      return date.toLocaleDateString("en-US", options);
    };
    const range = picker.selectedDates.map(formatDate).join(" - ");
    if (this.hasLabelTarget) {
      this.labelTarget.textContent = range;
      this.inputTarget.value = picker.selectedDates;
    }
  }
}
__publicField(railsui_date_range_picker_default, "targets", ["label", "input"]);
__publicField(railsui_date_range_picker_default, "values", {
  mode: { type: String, default: "range" },
  minDate: { type: String, default: "today" },
  dateFormat: { type: String, default: "Y-m-d" },
  range: {
    type: Array,
    default: [currentDate, oneWeekLater]
  }
});
export {
  railsui_date_range_picker_default as default
};
//# sourceMappingURL=railsui_date_range_picker.js.map
