import { Controller } from '@hotwired/stimulus'
import { useTransition } from 'stimulus-use'
export default class extends Controller {
  static targets = ['toggleable']

  connect() {
    useTransition(this, {
      element: this.toggleableTarget,
    })
  }

  toggle() {
    this.toggleTransition()
  }
}
