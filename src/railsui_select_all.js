import { Controller } from '@hotwired/stimulus'

export default class extends Controller {
  static targets = ['checkbox', 'selectAll']

  connect() {
    this.selectAllTarget.addEventListener('change', this.selectAll.bind(this))
    this.checkboxTargets.forEach(checkbox => {
      checkbox.addEventListener('change', this.updateSelectAllState.bind(this))
    })
    this.updateSelectAllState()
  }

  selectAll() {
    const isChecked = this.selectAllTarget.checked
    this.checkboxTargets.forEach(checkbox => {
      checkbox.checked = isChecked
    })
  }

  updateSelectAllState() {
    const checkedCount = this.checkboxTargets.filter(checkbox => checkbox.checked).length
    if (checkedCount === 0) {
      this.selectAllTarget.checked = false
      this.selectAllTarget.indeterminate = false
    } else if (checkedCount === this.checkboxTargets.length) {
      this.selectAllTarget.checked = true
      this.selectAllTarget.indeterminate = false
    } else {
      this.selectAllTarget.checked = false
      this.selectAllTarget.indeterminate = true
    }
  }
}
