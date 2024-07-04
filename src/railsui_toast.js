import { Controller } from '@hotwired/stimulus'
import { useTransition } from 'stimulus-use'

export default class extends Controller {
  static values = {
    triggerOnLoad: { type: Boolean, default: false },
  }

  connect() {
    useTransition(this, {
      element: this.element,
    })

    // Trigger toggle
    if (this.triggerOnLoadValue) {
      this.toggleTransition()
    }
  }

  toggle() {
    this.toggleTransition()
  }

  hide() {
    this.leave()
  }

  disconnect() {
    this.leave()
  }
}
