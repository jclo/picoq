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
  //
  // getlass, addClass, removeClass, toggleClass
  describe('Test class functions:', () => {
    // PicoQ().getClassList():
    describe('Test PicoQ().getClassList():', () => {
      it('Expects PicoQ("#app20").getClassList().value to return an empty string.', () => {
        expect(PicoQ('#app20').getClassList().value).to.be.a('string').that.is.empty;
      });

      it('Expects PicoQ("#app21").getClassList().value to return the string "aaa".', () => {
        expect(PicoQ('#app21').getClassList().value).to.be.a('string').that.is.equal('aaa');
      });
    });

    // PicoQ().addClass():
    describe('Test PicoQ().addClass():', () => {
      it('Expects PicoQ("#app22").getClassList().value to return an empty string.', () => {
        expect(PicoQ('#app22').getClassList().value).to.be.a('string').that.is.empty;
      });

      it('Expects PicoQ("#app22").addClass("abc").getClassList().value to return the string "abc".', () => {
        expect(PicoQ('#app22').addClass('abc').getClassList().value).to.be.a('string').that.is.equal('abc');
      });
    });

    // PicoQ().removeClass():
    describe('Test PicoQ().removeClass():', () => {
      it('Expects PicoQ("#app23").getClassList().value to return the string "bbb".', () => {
        expect(PicoQ('#app23').getClassList().value).to.be.a('string').that.is.equal('bbb');
      });

      it('Expects PicoQ("#app23").removeClass("bbb").getClassList().value to return an empty string.', () => {
        expect(PicoQ('#app23').removeClass('bbb').getClassList().value).to.be.a('string').that.is.empty;
      });
    });

    // PicoQ().toggleClass():
    describe('Test PicoQ().toggleClass():', () => {
      it('Expects PicoQ("#app24").getClassList().value to return an empty string.', () => {
        expect(PicoQ('#app24').getClassList().value).to.be.a('string').that.is.empty;
      });

      it('Expects PicoQ("#app24").toggleClass("abc").getClassList().value to return the string "abc".', () => {
        expect(PicoQ('#app24').toggleClass('abc').getClassList().value).to.be.a('string').that.is.equal('abc');
      });

      it('Expects PicoQ("#app24").toggleClass("abc").getClassList().value to return an empty string.', () => {
        expect(PicoQ('#app24').toggleClass('abc').getClassList().value).to.be.a('string').that.is.empty;
      });
    });
  });
};
