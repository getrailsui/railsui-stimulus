import { Controller } from '@hotwired/stimulus'
import { useTransition } from 'stimulus-use'

export default class extends Controller {
  static targets = ['toggleable']

  connect() {
    useTransition(this, {
      element: this.toggleableTarget,
    })

    this._setAria(false)
    document.addEventListener('keydown', this._onKeydown)
  }

  disconnect() {
    document.removeEventListener('keydown', this._onKeydown)
  }

  toggle(event) {
    const isOpen = !this.toggleableTarget.classList.contains('hidden')
    this._setAria(!isOpen, event?.currentTarget)
    this.toggleTransition()
  }

  _setAria(expanded, trigger = this.element.querySelector('[data-action*="toggle"]')) {
    if (trigger) trigger.setAttribute('aria-expanded', expanded)
    this.toggleableTarget.setAttribute('aria-hidden', (!expanded).toString())
  }

  _onKeydown = event => {
    if (event.key === 'Escape') {
      this.toggleableTarget.classList.contains('hidden') || this.toggle()
    }
  }
}
