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
  describe('Test attributes functions:', () => {
    describe('Test PicoQ().attr():', () => {
      it('Expects PicoQ("#app30").attr() to return null.', () => {
        expect(PicoQ('#app30').attr()).to.be.null;
      });

      it('Expects PicoQ("#app30").attr("style") to return null.', () => {
        expect(PicoQ('#app30').attr('style')).to.be.null;
      });

      it('Expects PicoQ("#app30").attr("style", "color.blue") to return an object.', () => {
        expect(PicoQ('#app30').attr('style', 'color: blue')).to.be.an('object');
      });

      it('Expects PicoQ("#app30")[0].style.color to return the string "blue".', () => {
        expect(PicoQ('#app30')[0].style.color).to.be.a('string').that.is.equal('blue');
      });
    });

    describe('Test PicoQ().removeAttr():', () => {
      it('Expects PicoQ("#app31").attr("style") to return the string "blue".', () => {
        PicoQ('#app31')[0].style.color = 'blue';
        expect(PicoQ('#app31').attr('style')).to.be.a('string').that.is.equal('color: blue;');
      });

      it('Expects PicoQ("#app31").removeAttr("style") to return an object.', () => {
        expect(PicoQ('#app31').removeAttr('style')).to.be.a('object');
      });

      it('Expects PicoQ("#app31")[0].style.color to return an empty string.', () => {
        expect(PicoQ('#app31')[0].style.color).to.be.a('string').that.is.empty;
      });
    });
  });
};
