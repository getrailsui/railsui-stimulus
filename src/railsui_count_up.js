import { Controller } from '@hotwired/stimulus'

export default class extends Controller {
  static values = {
    target: Number,
    duration: { type: Number, default: 2000 },
  }

  connect() {
    this.createObserver()
  }

  createObserver() {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    }

    this.observer = new IntersectionObserver(this.handleIntersect.bind(this), options)
    this.observer.observe(this.element)
  }

  handleIntersect(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        this.animateCountUp()
        this.observer.unobserve(this.element) // Stop observing after animation starts
      }
    })
  }

  animateCountUp() {
    const start = 0
    const end = this.targetValue
    const duration = this.durationValue
    const frameRate = 60 // frames per second
    const totalFrames = Math.round((duration / 1000) * frameRate)
    const increment = (end - start) / totalFrames

    let current = start
    let frame = 0

    const timer = setInterval(() => {
      current += increment
      frame++
      if (frame >= totalFrames) {
        clearInterval(timer)
        current = end
      }
      this.updateDisplay(current)
    }, 1000 / frameRate)
  }

  updateDisplay(value) {
    if (this.hasPercentage()) {
      this.element.textContent = `${value.toFixed(1)}%`
    } else {
      this.element.textContent = this.formatNumber(value)
    }
  }

  hasPercentage() {
    return this.element.dataset.railsuiCountUp && this.element.dataset.railsuiCountUp.includes('%')
  }

  formatNumber(value) {
    return Math.round(value).toLocaleString()
  }
}
