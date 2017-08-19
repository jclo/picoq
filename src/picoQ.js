
  // -- PicoQ Public -----------------------------------------------------------

  /**
   * PicoQ constructor.
   *
   * @constructor (arg1)
   * @public
   * @param {String}    CSS selector,
   * @returns {Object}  returns PicoQ object,
   * @since 0.0.0
   */
  /* eslint-disable no-param-reassign */
  PicoQ = function(selector) {
    if (this instanceof PicoQ) {
      if (selector) {
        this[0] = docu.querySelector(selector);
        return this;
      }
      return null;
    }
    // Initialize windo and docu to DOM or VDOM (for testing purpose):
    windo = PicoQ.VDOM ? PicoQ.VDOM.window : window;
    docu = PicoQ.VDOM ? PicoQ.VDOM.window.document : window.document;

    // PicoQ instantiate itself. So, there is no need of using new:
    return new PicoQ(selector);
  };

  // Saves the previous value of the library variable, so that it can be
  // restored later on, if noConflict is used.
  previousPicoQ = root.PicoQ;

  // Runs PicoQ in noConflict mode, returning the PicoQ variable to its
  // previous owner. Returns a reference to this PicoQ object.
  /* istanbul ignore next */
  PicoQ.noConflict = function() {
    root.PicoQ = previousPicoQ;
    return this;
  };

  // The current version of the library:
  PicoQ.VERSION = '{{lib:version}}';

  /* eslint-disable no-param-reassign */


  // -- PicoQ Public Methods ---------------------------------------------------
  // Prototype functions are attached to PicoQ.prototype by the function
  // PicoQ._extend()
  PicoQ.prototype = {
    //
  };
