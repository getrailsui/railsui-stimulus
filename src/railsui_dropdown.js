import { Controller } from '@hotwired/stimulus'
import { useTransition } from 'stimulus-use'

export default class extends Controller {
  static targets = ['menu']

  connect() {
    useTransition(this, { element: this.menuTarget })

    this._trigger = this.element.querySelector('[data-action*="toggle"]')
    if (this._trigger) {
      this._trigger.setAttribute('aria-haspopup', 'true')
      this._trigger.setAttribute('aria-expanded', 'false')
    }

    this.menuTarget.setAttribute('aria-hidden', 'true')

    document.addEventListener('keydown', this._onKeydown)
  }

  disconnect() {
    document.removeEventListener('keydown', this._onKeydown)
  }

  toggle() {
    const isOpen = !this.menuTarget.classList.contains('hidden')
    this.toggleTransition()
    this._setAria(!isOpen)
  }

  hide(event) {
    if (!this.element.contains(event.target)) {
      this.leave()
      this._setAria(false)
    }
  }

  _onKeydown = event => {
    if (event.key === 'Escape') {
      this.leave()
      this._setAria(false)
    }
  }

  _setAria(expanded) {
    if (this._trigger) this._trigger.setAttribute('aria-expanded', expanded)
    this.menuTarget.setAttribute('aria-hidden', !expanded)
  }
}
