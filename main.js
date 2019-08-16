(function() {
  "use strict";
  window.addEventListener("load", init);
  function init() {
    id("home-nav-button").addEventListener("click", changeToHomePage);
    id("student-button").addEventListener("click", changeToStudentPage);
    id("education-nav-button").addEventListener("click", changeToStudentPage);
    id("dev-button").addEventListener("click", changeToDevPage);
    id("experience-nav-button").addEventListener("click", changeToDevPage);
    id("artist-button").addEventListener("click", changeToArtistPage);
    id("art-nav-button").addEventListener("click", changeToArtistPage);
    let optionButtons = qsa(".option");
    for (let i = 0; i < optionButtons.length; i++) {
      optionButtons[i].addEventListener("mouseover", setOptionSelected);
      optionButtons[i].addEventListener("mouseleave", setOptionUnselected);
    }
  }

  function changeToHomePage() {
    hideAllPages()
    id("home").classList.remove("hidden")
  }

  function changeToStudentPage() {
    hideAllPages()
    id("education").classList.remove("hidden")
  }

  function changeToDevPage() {
    hideAllPages()
    id("experience").classList.remove("hidden")
  }

  function changeToArtistPage() {
    hideAllPages()
    id("artwork").classList.remove("hidden")
  }

  function changeToContactPage() {
    hideAllPages()
    id("contact").classList.remove("hidden")
  }

  function setOptionSelected() {
    let img = this.children[1]
    if (this.id === "student-button") {
      img.src = "Assets/graduation-cap-logo-selected.png"
    } else if (this.id === "dev-button") {
      img.src = "Assets/computer-logo-selected.png"
    } else if (this.id === "artist-button") {
      img.src = "Assets/artist-logo-selected.png"
    }
    this.classList.add("option-selected")
  }

  function setOptionUnselected() {
    let img = this.children[1]
    if (this.id === "student-button") {
      img.src = "Assets/graduation-cap-logo.png"
    } else if (this.id === "dev-button") {
      img.src = "Assets/computer-logo.png"
    } else if (this.id === "artist-button") {
      img.src = "Assets/artist-logo.png"
    }
    this.classList.remove("option-selected")
  }

  function hideAllPages() {
    let pages = qsa("section")
    for (let i = 0; i < pages.length; i++) {
      pages[i].classList.add("hidden")
    }
  }
  /**
   * Helper method for getting element by id
   * @param {String} elementID - the id with which the target objects are attached to
   * @return {Object} the DOM element object with the specified id
   */
  function id(elementID) {
    return document.getElementById(elementID);
  }

  /**
   * Helper method for getting an element by selector
   * @param {String} selector - the selector used to select the target elements
   * @return {Object} The first element in the DOM selected with the given selector
   */
  function qs(selector) {
    return document.querySelector(selector);
  }

  /**
   * Helper method for getting an array of elements by selector
   * @param {String} selector - the selector used to select the target elements
   * @return {Object[]} An array of elements in the DOM with the given class
   */
  function qsa(selector) {
    return document.querySelectorAll(selector);
  }
})();
