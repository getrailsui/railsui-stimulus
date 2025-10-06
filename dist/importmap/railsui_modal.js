var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import { Controller } from "@hotwired/stimulus";
import { useTransition, useClickOutside } from "stimulus-use";
class railsui_modal_default extends Controller {
  connect() {
    this.originalParent = this.containerTarget.parentNode;
    this.originalNextSibling = this.containerTarget.nextSibling;
    if (this.teleportValue && this.containerTarget.parentNode !== document.body) {
      document.body.appendChild(this.containerTarget);
    }
    useTransition(this, {
      element: this.contentTarget
    });
    useClickOutside(this, {
      element: this.contentTarget
    });
  }
  open(event) {
    event.preventDefault();
    this.enableAppearance();
    this.toggleTransition();
  }
  close(event) {
    event.preventDefault();
    this.leave();
    this.disableAppearance();
  }
  clickOutside(event) {
    const action = event.target.dataset.action;
    if (action == "click->modal#open" || action == "click->modal#open:prevent") {
      return;
    }
    this.close(event);
  }
  closeWithEsc(event) {
    if (event.keyCode === 27 && !this.containerTarget.classList.contains("hidden")) {
      this.close(event);
    }
  }
  enableAppearance() {
    this.containerTarget.classList.add("bg-black/80");
    this.containerTarget.classList.remove("hidden");
  }
  disableAppearance() {
    this.containerTarget.classList.add("hidden");
    this.containerTarget.classList.remove("bg-black/80");
  }
  disconnect() {
    this.toggleTransition();
    if (this.teleportValue && this.originalParent) {
      if (this.originalNextSibling) {
        this.originalParent.insertBefore(this.containerTarget, this.originalNextSibling);
      } else {
        this.originalParent.appendChild(this.containerTarget);
      }
    }
  }
}
__publicField(railsui_modal_default, "targets", ["container", "content"]);
__publicField(railsui_modal_default, "values", {
  teleport: { type: Boolean, default: false }
});
export {
  railsui_modal_default as default
};
//# sourceMappingURL=railsui_modal.js.map
