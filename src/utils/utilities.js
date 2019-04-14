/** **************************************************************************
 *-
 * Defines an utility library.
 *
 * utilities.js is just a literal object that contains a set of functions.
 * it can't be intantiated.
 *
 * Private Functions:
 *  . none,
 *
 *
 * Public Static Methods:
 *  . normalizeCssPropertyName    normalizes the CSS properties,
 *
 *
 *
 * @namespace    PIQ.Util.Public
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
  var Root = PIQ.Util.Public;


  // -- Local modules


  // -- Local constants


  // -- Local variables


  // -- Public Static Methods ------------------------------------------------

  _.extend(Root, {

    /**
     * Normalizes the CSS properties.
     * (replace '-' between composite name by camelcase style).
     * Ex: font-size -> fontSize
     *
     * @function (arg1)
     * @private
     * @param {String}      the CSS property name,
     * @returns {String}    the normalized CSS property name,
     * @since 0.0.0
     */
    normalizeCssPropertyName: function(name) {
      var arr = Object.prototype.toString.call(name) === '[object String]' ? name.split('-') : []
        , normalized = ''
        , i
        ;

      // Convert name with '-' (ex.: 'font-size' to 'fontSize'):
      for (i = 0; i < arr.length; i++) {
        if (i === 0) {
          normalized += arr[i];
        } else {
          normalized += arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
        }
      }
      return normalized;
    }
  });
}());
/* eslint-enable one-var, semi-style */