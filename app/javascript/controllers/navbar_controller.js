import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="navbar"
export default class extends Controller {
  static targets = ["menu", "menuBtn"]

  toggle() {
    this.menuTarget.classList.toggle("menu-visible")
    this.menuBtnTarget.classList.toggle("fa-xmark")
    this.menuBtnTarget.classList.toggle("fa-bars")
  }
}
