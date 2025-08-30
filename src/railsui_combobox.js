import { Controller } from '@hotwired/stimulus'
import { useTransition } from 'stimulus-use'

export default class extends Controller {
  static targets = [
    'input',
    'list',
    'option',
    'box',
    'text',
    'hiddenInput',
    'checkmark',
    'noresults',
  ]
  static values = {
    activeClass: String,
    inactiveClass: String,
  }

  connect() {
    useTransition(this, {
      element: this.listTarget,
    })

    this.isOpen = false
    this.activeIndex = -1
    this.updateTabIndices()
  }

  toggleDropdown(event) {
    // Only toggle dropdown if clicking on the combobox-display
    if (event.target === this.boxTarget || this.boxTarget.contains(event.target)) {
      this.isOpen ? this.hideDropdown() : this.showDropdown()
    }
  }

  showDropdown() {
    this.enter() // Trigger the transition
    this.boxTarget.setAttribute('aria-expanded', 'true')
    this.listTarget.setAttribute('aria-expanded', 'true')
    this.isOpen = true

    // Set the first visible option as active by default
    if (this.activeIndex === -1 && this.getVisibleOptions().length > 0) {
      this.activeIndex = 0
      this.updateActiveDescendant()
    }

    this.inputTarget.focus() // Focus the search input
    this.updateTabIndices()
  }

  hideDropdown() {
    this.leave()
    this.boxTarget.setAttribute('aria-expanded', 'false')
    this.listTarget.setAttribute('aria-expanded', 'false')
    this.isOpen = false
    this.updateActiveDescendant()
    this.updateTabIndices()
  }

  handleOutsideClick(event) {
    // Ensure clicks inside the combobox don't trigger a close
    if (!this.element.contains(event.target)) {
      this.hideDropdown()
    }
  }

  filter(event) {
    const searchTerm = event.target.value.toLowerCase()
    let hasVisibleOptions = false

    this.optionTargets.forEach(option => {
      const text = option.textContent.toLowerCase()
      const isVisible = text.includes(searchTerm)
      option.style.display = isVisible ? 'flex' : 'none'
      if (isVisible) hasVisibleOptions = true
    })

    // Show or hide "No results" message
    if (this.hasNoresultsTarget) {
      this.noresultsTarget.classList.toggle('hidden', hasVisibleOptions)
    }

    // Adjust active index to fit within visible options
    const visibleOptions = this.getVisibleOptions()
    if (this.activeIndex >= visibleOptions.length) {
      this.activeIndex = visibleOptions.length - 1
    }
    if (this.activeIndex < 0 && visibleOptions.length > 0) {
      this.activeIndex = 0
    }

    this.updateActiveDescendant()
    this.updateTabIndices()
  }

  handleKeydown(event) {
    const key = event.key

    switch (key) {
      case 'ArrowDown':
        event.preventDefault()
        this.setActiveIndex(this.activeIndex + 1)
        break
      case 'ArrowUp':
        event.preventDefault()
        this.setActiveIndex(this.activeIndex - 1)
        break
      case 'Enter':
        event.preventDefault()
        if (this.activeIndex >= 0) {
          this.selectOptionByIndex(this.activeIndex)
        }
        break
      case 'Escape':
        this.hideDropdown()
        break
    }
  }

  setActiveIndex(index) {
    const visibleOptions = this.getVisibleOptions()
    if (visibleOptions.length === 0) return

    if (index < 0) index = visibleOptions.length - 1 // Wrap to last option
    if (index >= visibleOptions.length) index = 0 // Wrap to first option

    this.activeIndex = index // Update active index
    this.updateActiveDescendant() // Refresh active descendant
  }

  updateActiveDescendant() {
    const visibleOptions = this.getVisibleOptions()

    visibleOptions.forEach((option, index) => {
      const isActive = index === this.activeIndex
      this.toggleClassesAndAria(option, isActive)
    })

    if (this.activeIndex >= 0 && visibleOptions[this.activeIndex]) {
      this.inputTarget.setAttribute('aria-activedescendant', visibleOptions[this.activeIndex].id)
    } else {
      this.inputTarget.removeAttribute('aria-activedescendant')
    }
  }

  toggleClassesAndAria(element, isActive) {
    const addClasses = isActive ? this.activeClassValue : this.inactiveClassValue
    const removeClasses = isActive ? this.inactiveClassValue : this.activeClassValue

    // Toggle classes
    element.classList.add(...addClasses.split(' '))
    element.classList.remove(...removeClasses.split(' '))

    // Update ARIA attributes
    element.setAttribute('aria-selected', isActive ? 'true' : 'false')

    const checkmark = element.querySelector("[data-railsui-combobox-target='checkmark']")
    if (checkmark) {
      // Show the checkmark if active, otherwise hide it
      checkmark.classList.toggle('hidden', !isActive)
    }
  }

  selectOption(event) {
    const option = event.currentTarget

    // Find the index of the clicked option
    const visibleOptions = this.getVisibleOptions()
    const index = visibleOptions.indexOf(option)

    if (index !== -1) {
      this.activeIndex = index // Update active index
    }

    const value = option.dataset.value || option.textContent.trim()
    const displayText = option.textContent.trim()
    this.updateDisplay(displayText, value)
  }

  selectOptionByIndex(index) {
    const visibleOptions = this.getVisibleOptions()
    const option = visibleOptions[index]
    const value = option.dataset.value || option.textContent.trim()
    const displayText = option.textContent.trim()
    this.updateDisplay(displayText, value)
  }

  updateDisplay(displayText, value = null) {
    this.textTarget.textContent = displayText
    this.hideDropdown()
    this.hiddenInputTarget.value = value || displayText
  }

  getVisibleOptions() {
    return this.optionTargets.filter(option => option.style.display !== 'none')
  }

  updateTabIndices() {
    const visibleOptions = this.getVisibleOptions()
    this.optionTargets.forEach(option => {
      option.setAttribute('tabindex', visibleOptions.includes(option) ? '0' : '-1')
    })
  }
}
