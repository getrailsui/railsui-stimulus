var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import { Controller } from "@hotwired/stimulus";
import { useTransition } from "stimulus-use";
class railsui_combobox_default extends Controller {
  connect() {
    useTransition(this, {
      element: this.listTarget
    });
    this.isOpen = false;
    this.activeIndex = -1;
    this.updateTabIndices();
  }
  toggleDropdown(event) {
    if (event.target === this.boxTarget || this.boxTarget.contains(event.target)) {
      this.isOpen ? this.hideDropdown() : this.showDropdown();
    }
  }
  showDropdown() {
    this.enter();
    this.boxTarget.setAttribute("aria-expanded", "true");
    this.listTarget.setAttribute("aria-expanded", "true");
    this.isOpen = true;
    if (this.activeIndex === -1 && this.getVisibleOptions().length > 0) {
      this.activeIndex = 0;
      this.updateActiveDescendant();
    }
    this.inputTarget.focus();
    this.updateTabIndices();
  }
  hideDropdown() {
    this.leave();
    this.boxTarget.setAttribute("aria-expanded", "false");
    this.listTarget.setAttribute("aria-expanded", "false");
    this.isOpen = false;
    this.updateActiveDescendant();
    this.updateTabIndices();
  }
  handleOutsideClick(event) {
    if (!this.element.contains(event.target)) {
      this.hideDropdown();
    }
  }
  filter(event) {
    const searchTerm = event.target.value.toLowerCase();
    let hasVisibleOptions = false;
    this.optionTargets.forEach((option) => {
      const text = option.textContent.toLowerCase();
      const isVisible = text.includes(searchTerm);
      option.style.display = isVisible ? "flex" : "none";
      if (isVisible)
        hasVisibleOptions = true;
    });
    if (this.hasNoresultsTarget) {
      this.noresultsTarget.classList.toggle("hidden", hasVisibleOptions);
    }
    const visibleOptions = this.getVisibleOptions();
    if (this.activeIndex >= visibleOptions.length) {
      this.activeIndex = visibleOptions.length - 1;
    }
    if (this.activeIndex < 0 && visibleOptions.length > 0) {
      this.activeIndex = 0;
    }
    this.updateActiveDescendant();
    this.updateTabIndices();
  }
  handleKeydown(event) {
    const key = event.key;
    switch (key) {
      case "ArrowDown":
        event.preventDefault();
        this.setActiveIndex(this.activeIndex + 1);
        break;
      case "ArrowUp":
        event.preventDefault();
        this.setActiveIndex(this.activeIndex - 1);
        break;
      case "Enter":
        event.preventDefault();
        if (this.activeIndex >= 0) {
          this.selectOptionByIndex(this.activeIndex);
        }
        break;
      case "Escape":
        this.hideDropdown();
        break;
    }
  }
  setActiveIndex(index) {
    const visibleOptions = this.getVisibleOptions();
    if (visibleOptions.length === 0)
      return;
    if (index < 0)
      index = visibleOptions.length - 1;
    if (index >= visibleOptions.length)
      index = 0;
    this.activeIndex = index;
    this.updateActiveDescendant();
  }
  updateActiveDescendant() {
    const visibleOptions = this.getVisibleOptions();
    visibleOptions.forEach((option, index) => {
      const isActive = index === this.activeIndex;
      this.toggleClassesAndAria(option, isActive);
    });
    if (this.activeIndex >= 0 && visibleOptions[this.activeIndex]) {
      this.inputTarget.setAttribute("aria-activedescendant", visibleOptions[this.activeIndex].id);
    } else {
      this.inputTarget.removeAttribute("aria-activedescendant");
    }
  }
  toggleClassesAndAria(element, isActive) {
    const addClasses = isActive ? this.activeClassValue : this.inactiveClassValue;
    const removeClasses = isActive ? this.inactiveClassValue : this.activeClassValue;
    element.classList.add(...addClasses.split(" "));
    element.classList.remove(...removeClasses.split(" "));
    element.setAttribute("aria-selected", isActive ? "true" : "false");
    const checkmark = element.querySelector("[data-railsui-combobox-target='checkmark']");
    if (checkmark) {
      checkmark.classList.toggle("hidden", !isActive);
    }
  }
  selectOption(event) {
    const option = event.currentTarget;
    const visibleOptions = this.getVisibleOptions();
    const index = visibleOptions.indexOf(option);
    if (index !== -1) {
      this.activeIndex = index;
    }
    const value = option.dataset.value || option.textContent.trim();
    const displayText = option.textContent.trim();
    this.updateDisplay(displayText, value);
  }
  selectOptionByIndex(index) {
    const visibleOptions = this.getVisibleOptions();
    const option = visibleOptions[index];
    const value = option.dataset.value || option.textContent.trim();
    const displayText = option.textContent.trim();
    this.updateDisplay(displayText, value);
  }
  updateDisplay(displayText, value = null) {
    this.textTarget.textContent = displayText;
    this.hideDropdown();
    this.hiddenInputTarget.value = value || displayText;
  }
  getVisibleOptions() {
    return this.optionTargets.filter((option) => option.style.display !== "none");
  }
  updateTabIndices() {
    const visibleOptions = this.getVisibleOptions();
    this.optionTargets.forEach((option) => {
      option.setAttribute("tabindex", visibleOptions.includes(option) ? "0" : "-1");
    });
  }
}
__publicField(railsui_combobox_default, "targets", [
  "input",
  "list",
  "option",
  "box",
  "text",
  "hiddenInput",
  "checkmark",
  "noresults"
]);
__publicField(railsui_combobox_default, "values", {
  activeClass: String,
  inactiveClass: String
});
export {
  railsui_combobox_default as default
};
//# sourceMappingURL=railsui_combobox.js.map
