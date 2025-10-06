var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import { Controller } from "@hotwired/stimulus";
class railsui_count_up_default extends Controller {
  connect() {
    this.createObserver();
  }
  createObserver() {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1
    };
    this.observer = new IntersectionObserver(this.handleIntersect.bind(this), options);
    this.observer.observe(this.element);
  }
  handleIntersect(entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        this.animateCountUp();
        this.observer.unobserve(this.element);
      }
    });
  }
  animateCountUp() {
    const start = 0;
    const end = this.targetValue;
    const duration = this.durationValue;
    const frameRate = 60;
    const totalFrames = Math.round(duration / 1e3 * frameRate);
    const increment = (end - start) / totalFrames;
    let current = start;
    let frame = 0;
    const timer = setInterval(() => {
      current += increment;
      frame++;
      if (frame >= totalFrames) {
        clearInterval(timer);
        current = end;
      }
      this.updateDisplay(current);
    }, 1e3 / frameRate);
  }
  updateDisplay(value) {
    if (this.hasPercentage()) {
      this.element.textContent = `${value.toFixed(1)}%`;
    } else {
      this.element.textContent = this.formatNumber(value);
    }
  }
  hasPercentage() {
    return this.element.dataset.railsuiCountUp && this.element.dataset.railsuiCountUp.includes("%");
  }
  formatNumber(value) {
    return Math.round(value).toLocaleString();
  }
}
__publicField(railsui_count_up_default, "values", {
  target: Number,
  duration: { type: Number, default: 2e3 }
});
export {
  railsui_count_up_default as default
};
//# sourceMappingURL=railsui_count_up.js.map
