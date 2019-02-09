/* global describe, it */
/* eslint  one-var: 0, import/no-extraneous-dependencies: 1, no-unused-expressions: 0,
  no-underscore-dangle: 0, semi-style: 0 */

'use strict';

// -- Node modules
const { expect } = require('chai')
    ;

// -- Local modules


// -- Local constants


// -- Local variables


// -- Main
module.exports = function(PicoQ) {
  describe('Test attributes functions:', () => {
    describe('Test PicoQ().attr():', () => {
      it('Expects PicoQ("#app40").attr() to return null.', () => {
        expect(PicoQ('#app40').attr()).to.be.null;
      });

      it('Expects PicoQ("#app40").attr("style") to return null.', () => {
        expect(PicoQ('#app40').attr('style')).to.be.null;
      });

      it('Expects PicoQ("#app40").attr("style", "color.blue") to return an object.', () => {
        expect(PicoQ('#app40').attr('style', 'color: blue')).to.be.an('object');
      });

      it('Expects PicoQ("#app40")[0].style.color to return the string "blue".', () => {
        expect(PicoQ('#app40')[0].style.color).to.be.a('string').that.is.equal('blue');
      });
    });

    describe('Test PicoQ().removeAttr():', () => {
      it('Expects PicoQ("#app41").attr("style") to return the string "blue".', () => {
        PicoQ('#app41')[0].style.color = 'blue';
        expect(PicoQ('#app41').attr('style')).to.be.a('string').that.is.equal('color: blue;');
      });

      it('Expects PicoQ("#app41").removeAttr("style") to return an object.', () => {
        expect(PicoQ('#app41').removeAttr('style')).to.be.a('object');
      });

      it('Expects PicoQ("#app41")[0].style.color to return an empty string.', () => {
        expect(PicoQ('#app41')[0].style.color).to.be.a('string').that.is.empty;
      });
    });
  });
};
