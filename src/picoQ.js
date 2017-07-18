
  // -- PicoQ Public Methods ---------------------------------------------------
  PicoQ = function(selector) {
    if (this instanceof PicoQ) {
      if (selector) {
        this[0] = docu.querySelector(selector);
        return this;
      }
      return null;
    }
    // Initialize docu to DOM or VDOM (for testing purpose):
    docu = PicoQ.VDOM ? PicoQ.VDOM.window.document : window.document;
    return new PicoQ(selector);
  };

  // Define prototype functions.
  // Prototype functions are attached to PicoQ.prototype by the function
  // PicoQ._extend()
  PicoQ.prototype = {
    //
  };
