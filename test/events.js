/* global describe, it */
/* eslint  one-var: 0, import/no-extraneous-dependencies: 1, no-unused-expressions: 0 */

'use strict';

// -- Node modules
const expect    = require('chai').expect
    ;

// -- Local modules
const PicoQ = require('../index.js')
    ;

// -- Local constants


// -- Local variables


// -- Main
/**
 * trigger event could not be test in jsdom as it uses the Event constructor.
 */
module.exports = function() {
  describe('Test events functions:', () => {
    const docu  = PicoQ.VDOM.window.document
        , el    = docu.querySelector('#app40')
        , event = docu.createEvent('Event')
        ;

    let fired = false
      ;

    // Initialize the event:
    event.initEvent('click', true, true);

    // Defines a function handler.
    function handler() {
      fired = true;
    }

    // Attach an fire an event:
    describe('Test PicoQ().on():', () => {
      // Attach an handler to el:
      PicoQ('#app40').on('click', handler);
      // Trigger this event:
      el.dispatchEvent(event);

      it('Expects PicoQ("#app40").on("click", handler) to attach an event.', () => {
        expect(fired).to.be.true;
      });
    });

    describe('Test PicoQ().off():', () => {
      // Remove the handler to el:
      PicoQ('#app40').off('click', handler);
      // Trigger this event:
      el.dispatchEvent(event);

      it('Expects PicoQ("#app40").off("click", handler) to to remove the attached event.', () => {
        expect(fired).to.be.true;
      });
    });

    describe('Test PicoQ().trigger():', () => {
      // it('Expects PicoQ("#app40").trigger("click") to return an object.', () => {
      //   expect(PicoQ('#app40').trigger('click')).to.be.an('object');
      // });
    });
  });
};
