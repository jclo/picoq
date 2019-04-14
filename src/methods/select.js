/** **************************************************************************
 *-
 * Defines the select methods.
 *
 * select.js extends PicoQ.prototype.
 *
 * Private Functions:
 *  . none,
 *
 *
 * Public Static Methods:
 *  . select                      selects a child element,
 *  . selectChild                 selects the specified child if it exists,
 *  . parent                      returns to the parent element,
 *  . firstParent                 returns to the root parent if defined,
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
     * Selects a child element.
     *
     * @method (arg1)
     * @public
     * @param {String}      the selector,
     * @returns {Object}    returns this,
     * @since 0.0.7
     */
    select: function(selector) {
      var child;

      if (Object.prototype.toString.call(selector) === '[object String]') {
        child = this[0].querySelector(selector);
        if (child) {
          this[0] = child;
        }
      }
      return this;
    },

    /**
     * Selects the specified child if it exists.
     *
     * @method (arg1)
     * @public
     * @param {Number}      the child index,
     * @returns {Object}    returns this,
     * @since 0.0.8
     */
    selectChild: function(n) {
      if (Object.prototype.toString.call(n) === '[object Number]') {
        this[0] = this[0].children[n] ? this[0].children[n] : this[0];
      }
      return this;
    },

    /**
     * Returns to the parent element.
     *
     * @method ()
     * @public
     * @param {}            -,
     * @returns {Object}    returns this,
     * @since 0.0.7
     */
    parent: function() {
      if (this.root) {
        // As a root parent is defined, we stop at it.
        if (this[0] !== this.root) {
          this[0] = this[0].parentNode;
        }
      } else {
        this[0] = this[0].parentNode;
      }
      return this;
    },

    /**
     * Returns to the root parent if defined.
     *
     * @method ()
     * @public
     * @param {}            -,
     * @returns {Object}    returns this,
     * @since 0.0.7
     */
    firstParent: function() {
      if (this.root) {
        this[0] = this.root;
      }
      return this;
    }
  });
}());
/* eslint-enable one-var, semi-style */
