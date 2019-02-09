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
  describe('Test Utility functions:', () => {
    // Makes the internal private functions accessible:
    PicoQ.setTestMode();
    const _u = PicoQ.Pic.u;

    describe('Test _u.normalizeCssPropertyName():', () => {
      it('Expects _u.normalizeCssPropertyName() to return en empty string.', () => {
        expect(_u.normalizeCssPropertyName()).to.be.a('string').that.is.empty;
      });
      it('Expects _u.normalizeCssPropertyName("font-size") to return "fontSize".', () => {
        expect(_u.normalizeCssPropertyName('font-size')).to.be.a('string').that.is.equal('fontSize');
      });
      it('Expects _u.normalizeCssPropertyName("border-bottom-color") to return "borderBottomColor".', () => {
        expect(_u.normalizeCssPropertyName('border-bottom-color')).to.be.a('string').that.is.equal('borderBottomColor');
      });
    });
  });
};
