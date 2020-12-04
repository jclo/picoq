// ESLint declarations:
/* global describe, it */
/* eslint one-var: 0, semi-style: 0, no-underscore-dangle: 0 */

'use strict';

// -- Vendor Modules
const { expect } = require('chai')
    ;


// -- Local Modules


// -- Local Constants


// -- Local Variables


// -- Main

module.exports = function(PicoQ) {
  describe('Test css functions:', () => {
    describe('Test PicoQ(selector).css():', () => {
      it('Expects PicoQ("#app20").css() to return undefined', () => {
        expect(PicoQ('#app20').css()).to.be.a('undefined');
      });
    });

    describe('Test PicoQ(selector).css(property):', () => {
      it('Expects PicoQ("#app20").css("font-size") to return an empty string.', () => {
        expect(PicoQ('#app20').css('font-size')).to.be.a('string').that.has.lengthOf(0);
      });
    });

    describe('Test PicoQ(selector).css(property, value):', () => {
      it('Expects PicoQ("#app20").css("font-family", "arial") to return an object.', () => {
        expect(PicoQ('#app20').css('font-family', 'arial')).to.be.an('object');
      });

      it('Expects PicoQ("#app20").css("font-family") to return the string "arial".', () => {
        expect(PicoQ('#app20').css('font-family')).to.be.a('string').that.is.equal('arial');
      });
    });
  });
};
