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
module.exports = function() {
  describe('Test css functions:', () => {
    describe('Test PicoQ(selector).css():', () => {
      it('Expects PicoQ("#app10").css() to return undefined', () => {
        expect(PicoQ('#app10').css()).to.be.undefined;
      });
    });

    describe('Test PicoQ(selector).css(property):', () => {
      it('Expects PicoQ("#app10").css("font-size") to return an empty string.', () => {
        expect(PicoQ('#app10').css('font-size')).to.be.a('string').that.is.empty;
      });
    });

    describe('Test PicoQ(selector).css(property, value):', () => {
      it('Expects PicoQ("#app10").css("font-family", "arial") to return an object.', () => {
        expect(PicoQ('#app10').css('font-family', 'arial')).to.be.an('object');
      });

      it('Expects PicoQ("#app10").css("font-family") to return the string "arial".', () => {
        expect(PicoQ('#app10').css('font-family')).to.be.a('string').that.is.equal('arial');
      });

    });
  });
};
