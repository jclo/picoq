/** **************************************************************************
 *-
 * Defines the methods that interact with the attributes of a node.
 *
 * attr.js extends PicoQ.prototype.
 *
 * Private Functions:
 *  . none,
 *
 *
 * Public Static Methods:
 *  . attr                        sets or gets the specified attribute,
 *  . removeAttr                  removes the specified attribute,
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
     * Sets or Gets the specified attribute.
     *
     * @method (arg1, arg2)
     * @public
     * @param {String}      the attribute name,
     * @param {String}      the attribute value,
     * @returns {Object}    returns this or the attribute value,
     * @since 0.0.0
     */
    attr: function(attr, value) {
      if (value) {
        this[0].setAttribute(attr, value);
        return this;
      }
      return this[0].getAttribute(attr);
    },

    /**
     * Removes the specified attribute.
     *
     * @method (arg1)
     * @public
     * @param {String}      the attribute name,
     * @returns {Object}    returns this,
     * @since 0.0.0
     */
    removeAttr: function(attr) {
      this[0].removeAttribute(attr);
      return this;
    }
  });
}());
/* eslint-enable one-var, semi-style */
