import { Controller } from '@hotwired/stimulus'
import { useTransition, useClickOutside } from 'stimulus-use'

export default class extends Controller {
  static targets = ['container', 'content']
  static values = {
    teleport: { type: Boolean, default: false },
  }

  connect() {
    // Store original parent for cleanup
    this.originalParent = this.containerTarget.parentNode
    this.originalNextSibling = this.containerTarget.nextSibling

    // Teleport to body if enabled
    if (this.teleportValue && this.containerTarget.parentNode !== document.body) {
      document.body.appendChild(this.containerTarget)
    }

    useTransition(this, {
      element: this.contentTarget,
    })

    useClickOutside(this, {
      element: this.contentTarget,
    })
  }

  open(event) {
    event.preventDefault()
    this.enableAppearance()
    this.toggleTransition()
  }

  close(event) {
    event.preventDefault()
    this.leave()
    this.disableAppearance()
  }

  clickOutside(event) {
    const action = event.target.dataset.action
    if (action == 'click->modal#open' || action == 'click->modal#open:prevent') {
      return
    }
    this.close(event)
  }

  closeWithEsc(event) {
    if (event.keyCode === 27 && !this.containerTarget.classList.contains('hidden')) {
      this.close(event)
    }
  }

  enableAppearance() {
    this.containerTarget.classList.add('bg-black/80')
    this.containerTarget.classList.remove('hidden')
  }

  disableAppearance() {
    this.containerTarget.classList.add('hidden')
    this.containerTarget.classList.remove('bg-black/80')
  }

  disconnect() {
    this.toggleTransition()

    // Return modal to original position if it was teleported
    if (this.teleportValue && this.originalParent) {
      if (this.originalNextSibling) {
        this.originalParent.insertBefore(this.containerTarget, this.originalNextSibling)
      } else {
        this.originalParent.appendChild(this.containerTarget)
      }
    }
  }
}
