import { Controller } from '@hotwired/stimulus'

export default class extends Controller {
  static targets = ['range']

  connect() {
    this.updateTrack() // Set initial track based on value
  }

  updateTrack() {
    const value =
      ((this.rangeTarget.value - this.rangeTarget.min) /
        (this.rangeTarget.max - this.rangeTarget.min)) *
      100
    this.rangeTarget.style.setProperty('--range-fill', `${value}%`)
  }

  onInput() {
    this.updateTrack() // Update track when input changes
  }
}
