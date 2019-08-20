(function() {
  "use strict";
  window.addEventListener("load", init);
  function init() {
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
