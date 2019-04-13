// -- Public Methods to manage the events ------------------------------------
/* */

'use strict';

PicoQ._.extend(PicoQ.prototype, {

  /**
   * Adds an event listener to the selected node.
   *
   * @method (arg1, arg2)
   * @public
   * @param {String}    the event name,
   * @param {Function}  the function to call when the event is fired,
   * @returns {Object}  returns this,
   * @since 0.0.0
   */
  on: function(event, callback) {
    this[0].addEventListener(event, callback);
    return this;
  },

  /**
   * Remove an event listener to the selected node.
   *
   * @method (arg1, arg2)
   * @public
   * @param {String}    the event name,
   * @param {Function}  the listener function to remove,
   * @returns {Object}  returns this,
   * @since 0.0.0
   */
  off: function(event, callback) {
    this[0].removeEventListener(event, callback);
    return this;
  },

  /**
   * Fires the event associated to the selected node.
   *
   * Nota:
   * This is not supported by IE!
   *
   * @method (arg1)
   * @public
   * @param {String}    the event name,
   * @returns {Boolean} returns false if preventDefault was activated otherwise true,
   * @since 0.0.0
   */
  trigger: function(event) {
    // Create event object from event name:
    // (http://2ality.com/2013/06/triggering-events.html)
    var evt;

    if (Event) {
      // Modern Browsers:
      evt = new Event(event);
    } else {
      // Old browsers:
      evt = document.createEvent('Event');
      evt.initEvent(event, true, true);
    }
    return this[0].dispatchEvent(evt);
  },

  /**
   * Fires the event associated to the selected node (alias on trigger).
   *
   * @method (arg1)
   * @public
   * @param {String}    the event name,
   * @returns {Boolean} returns false if preventDefault was activated otherwise true,
   * @since 0.0.0
   */
  fire: function(event) {
    return this.trigger(event);
  }
});
/* */
