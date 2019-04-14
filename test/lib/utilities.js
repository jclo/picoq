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
module.exports = function(Util) {
  describe('Test Utility functions:', () => {
    describe('Test Util.normalizeCssPropertyName():', () => {
      it('Expects Util.normalizeCssPropertyName() to return en empty string.', () => {
        expect(Util.normalizeCssPropertyName()).to.be.a('string').that.is.empty;
      });
      it('Expects Util.normalizeCssPropertyName("font-size") to return "fontSize".', () => {
        expect(Util.normalizeCssPropertyName('font-size')).to.be.a('string').that.is.equal('fontSize');
      });
      it('Expects Util.normalizeCssPropertyName("border-bottom-color") to return "borderBottomColor".', () => {
        expect(Util.normalizeCssPropertyName('border-bottom-color')).to.be.a('string').that.is.equal('borderBottomColor');
      });
    });
  });
};
