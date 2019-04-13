/* global describe, it */
/* eslint  one-var: 0, no-unused-expressions: 1, semi-style: 0 */

'use strict';

// -- Node modules
const { expect } = require('chai')
    ;

// -- Local modules


// -- Local constants


// -- Local variables


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
        expect(PicoQ('#app20').css('font-size')).to.be.a('string').that.is.empty;
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
