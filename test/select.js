/* global describe, it */
/* eslint  one-var: 0, import/no-extraneous-dependencies: 1, no-unused-expressions: 0,
  no-underscore-dangle: 0, semi-style: 0 */

'use strict';

// -- Node modules
const { expect } = require('chai')
    ;

// -- Local modules
const PicoQ = require('../index.js')
    ;

// -- Local constants


// -- Local variables


// -- Main
module.exports = function() {
  describe('Test select:', () => {
    // PicoQ().selectChild():
    describe('Test PicoQ().selectChild():', () => {
      it('Expects PicoQ("#app10").selectChild("aaa") not to select any child.', () => {
        expect(PicoQ('#app10').selectChild('aaa')[0].classList.value).to.be.a('string').that.is.equal('Parent');
      });

      it('Expects PicoQ("#app10").selectChild(2) not to select any child.', () => {
        expect(PicoQ('#app10').selectChild(2)[0].classList.value).to.be.a('string').that.is.equal('Parent');
      });

      it('Expects PicoQ("#app10").selectChild(0) to select the first child.', () => {
        expect(PicoQ('#app10').selectChild(0)[0].classList.value).to.be.a('string').that.is.equal('FirstChild');
      });

      it('Expects PicoQ("#app10").selectChild(1) to select the second child.', () => {
        expect(PicoQ('#app10').selectChild(1)[0].classList.value).to.be.a('string').that.is.equal('SecondChild');
      });
    });
  });
};
