import { Controller } from '@hotwired/stimulus'

export default class extends Controller {
  static targets = ['input', 'toggle', 'iconShow', 'iconHide']

  connect() {
    this._updateUI()
  }

  toggle(event) {
    event.preventDefault()
    this.inputTarget.type = this.inputTarget.type === 'password' ? 'text' : 'password'
    this._updateUI()
  }

  _updateUI() {
    const isVisible = this.inputTarget.type === 'text'

    this.toggleTarget.setAttribute('aria-pressed', isVisible)
    this.toggleTarget.setAttribute('aria-label', isVisible ? 'Hide password' : 'Show password')

    if (this.hasIconShowTarget && this.hasIconHideTarget) {
      this.iconShowTarget.classList.toggle('hidden', isVisible)
      this.iconHideTarget.classList.toggle('hidden', !isVisible)
    }
  }
}
