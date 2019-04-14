/** **************************************************************************
 *-
 * Defines the methods that interact with the style of a DOM node.
 *
 * css.js extends PicoQ.prototype.
 *
 * Private Functions:
 *  . none,
 *
 *
 * Public Static Methods:
 *  . css                         gets/sets the style attribute of the element,
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
  var Util = PIQ.Util.Public
    ;


  // -- Local constants


  // -- Local variables


  // -- Private Functions ----------------------------------------------------


  // -- Public Static Methods ------------------------------------------------

  _.extend(PicoQ.prototype, {

    /**
     * Gets/Sets the style attribute of the element,
     *
     * @method (arg1, arg2)
     * @public
     * @param {String}      the style attribute,
     * @param {String}      the style attribute value,
     * @returns {String}    returns the style attribute value or this,
     * @since 0.0.0
     */
    css: function(styleAttr, value) {
      var attr = Util.normalizeCssPropertyName(styleAttr);

      if (!value) {
        // Get attribute:
        return this[0].style[attr];
      }

      // Set attribute:
      this[0].style[attr] = value;
      return this;
    }
  });
}());
/* eslint-enable one-var, semi-style */
