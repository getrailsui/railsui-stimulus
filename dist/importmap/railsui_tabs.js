var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import { Controller } from "@hotwired/stimulus";
class railsui_tabs_default extends Controller {
  connect() {
    this.activeTabClasses = (this.data.get("activeTab") || "active").split(" ");
    this.inactiveTabClasses = (this.data.get("inactiveTab") || "inactive").split(" ");
    if (this.anchor) this.index = this.tabTargets.findIndex((tab) => tab.id === this.anchor);
    this.showTab();
  }
  change(event) {
    event.preventDefault();
    if (event.currentTarget.dataset.index) {
      this.index = event.currentTarget.dataset.index;
    } else if (event.currentTarget.dataset.id) {
      this.index = this.tabTargets.findIndex((tab) => tab.id == event.currentTarget.dataset.id);
    } else {
      this.index = this.tabTargets.indexOf(event.currentTarget);
    }
    window.dispatchEvent(new CustomEvent("tsc:tab-change"));
  }
  showTab() {
    this.tabTargets.forEach((tab, index) => {
      const panel = this.panelTargets[index];
      if (index === this.index) {
        panel.classList.remove("hidden");
        tab.classList.remove(...this.inactiveTabClasses);
        tab.classList.add(...this.activeTabClasses);
        if (tab.id) {
          location.hash = tab.id;
        }
      } else {
        panel.classList.add("hidden");
        tab.classList.remove(...this.activeTabClasses);
        tab.classList.add(...this.inactiveTabClasses);
      }
    });
  }
  get index() {
    return parseInt(this.data.get("index") || 0);
  }
  set index(value) {
    this.data.set("index", value >= 0 ? value : 0);
    this.showTab();
  }
  get anchor() {
    return document.URL.split("#").length > 1 ? document.URL.split("#")[1] : null;
  }
}
__publicField(railsui_tabs_default, "targets", ["tab", "panel"]);
export {
  railsui_tabs_default as default
};
//# sourceMappingURL=railsui_tabs.js.map
