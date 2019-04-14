/** **************************************************************************
 *-
 * Defines the methods that manipulate the classes of the node element.
 *
 * class.js extends PicoQ.prototype.
 *
 * Private Functions:
 *  . none,
 *
 *
 * Public Static Methods:
 *  . getClassList                returns the DOMTokenList collection,
 *  . addClass                    adds a class name to the element,
 *  . addClasses                  adds a list of classes to the DOM element,
 *  . removeClass                 removes a class name from the DOM element,
 *  . removeClasses               removes a list of classes from the element,
 *  . toggleClass                 toggles a class name for the DOM element,
 *  . hasClass                    checks if the DOM element has the passed-in class,
 *
 *
 *
 * @namespace    PicoQ
 * @dependencies none
 * @exports      -
 * @author       -
 * @since        0.0.0
 * @version      -
 * ************************************************************************ */
/* eslint-disable one-var, semi-style */

'use strict';

(function() {
  // IIFE

  // -- Module path


  // -- Local modules


  // -- Local constants


  // -- Local variables


  // -- Private Functions ----------------------------------------------------


  // -- Public Static Methods ------------------------------------------------

  _.extend(PicoQ.prototype, {

    /**
     * Returns the DOMTokenList collection of the class attributes of the element.
     *
     * @method ()
     * @public
     * @param {}            -,
     * @returns {Object}    returns the DOMTokenList of the element,
     * @since 0.0.0
     */
    getClassList: function() {
      return this[0].classList;
    },

    /**
     * Adds a class name to the DOM element.
     *
     * @method (arg1)
     * @public
     * @param {String}      the class name to add,
     * @returns {Object}    returns this,
     * @since 0.0.0
     */
    addClass: function(className) {
      if (Object.prototype.toString.call(className) === '[object String]') {
        this[0].classList.add(className);
      }
      return this;
    },

    /**
     * Adds a list of classes to the DOM element.
     *
     * @method (arg1)
     * @public
     * @param {Array}       the list of classes to add,
     * @returns {Object}    returns this,
     * @since 0.0.8
     */
    addClasses: function(classes) {
      var i;
      if (Array.isArray(classes)) {
        for (i = 0; i < classes.length; i++) {
          this[0].classList.add(classes[i]);
        }
      }
      return this;
    },

    /**
     * Removes a class name from the DOM element.
     *
     * @method (arg1)
     * @public
     * @param {String}      the class name to remove,
     * @returns {Object}    returns this,
     * @since 0.0.0
     */
    removeClass: function(className) {
      if (Object.prototype.toString.call(className) === '[object String]') {
        this[0].classList.remove(className);
      }
      return this;
    },

    /**
     * Removes a list of classes from the DOM element.
     *
     * @method (arg1)
     * @public
     * @param {Array}       the list of classes to remove,
     * @returns {Object}    returns this,
     * @since 0.0.8
     */
    removeClasses: function(classes) {
      var i;
      if (Array.isArray(classes)) {
        for (i = 0; i < classes.length; i++) {
          this[0].classList.remove(classes[i]);
        }
      }
      return this;
    },

    /**
     * Toggles a class name for the DOM element.
     *
     * @method (arg1)
     * @public
     * @param {String}      the class name to add/remove,
     * @returns {Object}    returns this,
     * @since 0.0.0
     */
    toggleClass: function(className) {
      this[0].classList.toggle(className);
      return this;
    },

    /**
     * Checks if the DOM element has the passed-in class.
     *
     * @method (arg1)
     * @public
     * @param {String}      the class name,
     * @returns {Boolean}   returns true or false,
     * @since 0.0.8
     */
    hasClass: function(className) {
      var list = this[0].classList.value.split(' ');

      if (Object.prototype.toString.call(className) === '[object String]' && list.indexOf(className) !== -1) {
        return true;
      }
      return false;
    }
  });
}());
/* eslint-enable one-var, semi-style */
