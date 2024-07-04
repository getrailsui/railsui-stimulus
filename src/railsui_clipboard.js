import { Controller } from '@hotwired/stimulus'
import tippy from 'tippy.js'

export default class extends Controller {
  static targets = ['content']

  copy(event) {
    event.preventDefault()
    navigator.clipboard.writeText(this.textToCopy)
    this.showFeedback(event.currentTarget, 'Copied!')
  }

  get textToCopy() {
    const { value, innerText } = this.contentTarget
    return value || innerText
  }

  showFeedback(element, message) {
    tippy(element, {
      content: message,
      showOnCreate: true,
      onHidden: instance => {
        instance.destroy()
      },
    })
  }
}
