import { Controller } from '@hotwired/stimulus'

export default class extends Controller {
  static targets = ['content', 'button']
  static values = {
    maxLength: { type: Number, default: 100 },
    moreText: { type: String, default: 'Read more' },
    lessText: { type: String, default: 'Read less' },
  }

  connect() {
    this.originalText = this.contentTarget.textContent
    this.truncate()
  }

  truncate() {
    if (this.originalText.length <= this.maxLengthValue) {
      this.buttonTarget.classList.add('hidden')
      return
    }

    if (!this.expanded) {
      this.contentTarget.textContent = this.originalText.slice(0, this.maxLengthValue) + '...'
      this.buttonTarget.textContent = this.moreTextValue
    }
  }

  toggle() {
    this.expanded = !this.expanded

    if (this.expanded) {
      this.contentTarget.textContent = this.originalText
      this.buttonTarget.textContent = this.lessTextValue
    } else {
      this.truncate()
    }
  }
}
