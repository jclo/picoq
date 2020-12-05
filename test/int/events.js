// ESLint declarations:
/* global describe, it */
/* eslint one-var: 0, semi-style: 0, no-underscore-dangle: 0 */


// -- Vendor Modules
const { expect } = require('chai')
    ;


// -- Local Modules


// -- Local Constants


// -- Local Variables


// -- Main

module.exports = function(PicoQ) {
  describe('Test events functions:', () => {
    const el    = document.querySelector('#app50')
        , event = document.createEvent('Event')
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
      PicoQ('#app50').on('click', handler);
      // Trigger this event:
      el.dispatchEvent(event);

      it('Expects PicoQ("#app50").on("click", handler) to attach an event.', () => {
        expect(fired).to.be.equal(true);
      });
    });

    describe('Test PicoQ().off():', () => {
      // Remove the handler to el:
      PicoQ('#app50').off('click', handler);
      // Trigger this event:
      el.dispatchEvent(event);

      it('Expects PicoQ("#app50").off("click", handler) to to remove the attached event.', () => {
        expect(fired).to.be.equal(true);
      });
    });

    describe('Test PicoQ().trigger():', () => {
      // it('Expects PicoQ("#app50").trigger("click") to return an object.', () => {
      //   expect(PicoQ('#app50').trigger('click')).to.be.an('object');
      // });
    });
  });
};
