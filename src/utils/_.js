/** **************************************************************************
 *-
 * Defines an utility library.
 *
 * _.js is just a literal object that contains a set of functions.
 * it can't be intantiated.
 *
 *
 * Public Static Methods:
 *  . extend                      extends a given object with passed-in object(s),
 *
 *
 *
 * @namespace    _
 * @dependencies none
 * @exports      -
 * @author       -
 * @since        0.0.0
 * @version      -
 * ************************************************************************ */
/* eslint-disable one-var, semi-style */

'use strict';

_ = {

  /**
   * Extends a given object with all the properties in passed-in object(s).
   *
   * Nota: mutates obj
   *       The passed-in objects must be literal objects. The method extends
   *       the first object with the properties/values of the n + 1 objects.
   *       If the property values are objects, the method passes their reference.
   *       This method doesn't perform a deep extend.
   *
   * @function (arg1)
   * @private
   * @param {Object}      the objects to merge,
   * @returns {Object}    the resulting object,
   * @since 0.0.8
   */
  /* eslint-disable noo-param-reassign */
  extend: function(obj) {
    var source
      , props
      , i
      , j
      ;

    for (i = 1; i < arguments.length; i++) {
      source = arguments[i];
      props = Object.keys(source);
      for (j = 0; j < props.length; j++) {
        /* istanbul ignore next */
        if (Object.prototype.hasOwnProperty.call(source, props[j])) {
          /* eslint-disable-next-line no-param-reassign */
          obj[props[j]] = source[props[j]];
        }
      }
    }
    return obj;
  }
};
/* eslint-enable one-var, semi-style */
