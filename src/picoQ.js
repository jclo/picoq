/** **************************************************************************
 *-
 * Defines PicoQ library.
 *
 * picoqjs is built upon a variation of the Pseudoclassical
 * Instantiation pattern. The object is instantiated by the new keyword
 * included in the constructor. The caller just needs to call the
 * constructor without the new keyword to get in return the object.
 *
 * Constructor:
 *  . PicoQ                       creates the PicoQ object,
 *
 *
 * Public Static Methods:
 *  . noConflict                  returns a reference to this PicoQ object,
 *  . setTestMode                 gives an access to the private methods for
 *                                testing purpose.
 *
 *
 * Public Methods:
 *  . PicoQ.prototype is defined empty. It is filled by the methods defined
 *    in the files stored in the folders methods and ajax.
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
/* eslint-disable one-var, semi-style, no-underscore-dangle */

'use strict';

(function() {
  // IIFE

  // -- Module path


  // -- Local modules


  // -- Local constants
  var previousPicoQ
    ;

  // -- Local variables


  // -- Public ---------------------------------------------------------------

  /**
   * Creates the PicoQ object.
   *
   * @constructor (arg1)
   * @public
   * @param {String}      CSS selector,
   * @returns {Object}    returns PicoQ object,
   * @since 0.0.0
   */
  /* eslint-disable no-param-reassign */
  PicoQ = function(selector) {
    if (this instanceof PicoQ) {
      if (selector) {
        this[0] = document.querySelector(selector);
        return this;
      }
      return null;
    }

    // PicoQ instantiate itself. So, there is no need of using new:
    return new PicoQ(selector);
  };

  // Saves the previous value of the library variable, so that it can be
  // restored later on, if noConflict is used.
  previousPicoQ = root.PicoQ;

  // Attaches a release number to the library:
  PicoQ.VERSION = '{{lib:version}}';


  // -- Public Static Methods ------------------------------------------------

  /**
   * Returns a reference to this PicoQ object.
   *
   * Nota:
   * Runs PicoQ in noConflict mode by returning the PicoQ variable to its
   * previous owner and returning a reference to this PicoQ object.
   *
   * @method ()
   * @public
   * @param {}            -,
   * @returns {Object}    returns a reference to this object,
   * @since 0.0.0
   */
  PicoQ.noConflict = function() {
    root.PicoQ = previousPicoQ;
    return this;
  };

  /**
   * Gives an access to the private methods for testing purpose.
   *
   * @method ()
   * @public
   * @param {}            -,
   * @returns {Object}    returns a reference to this object,
   * @since 0.0.0
   */
  PicoQ.setTestMode = function() {
    PIQ._ = _;
    PicoQ.PIQ = PIQ;
  };


  // -- Public Methods -------------------------------------------------------

  // Prototype functions are attached to PicoQ.prototype by the function
  // PicoQ._extend()
  PicoQ.prototype = {
    //
  };
}());
/* eslint-enable one-var, semi-style, no-underscore-dangle */
