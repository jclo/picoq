/* global describe, it */
/* eslint  one-var: 0, semi-style: 0 */

'use strict';

// -- Node modules
const { expect } = require('chai')
    ;

// -- Local modules


// -- Local constants


// -- Local variables


// -- Main
module.exports = function(PicoQ) {
  describe('Test PicoQ VERSION and noConflict:', () => {
    it('Expects PicoQ.VERSION to return a string.', () => {
      expect(PicoQ.VERSION).to.be.a('string');
    });
    it('Expects PicoQ.noConflict to return a function.', () => {
      expect(PicoQ.noConflict).to.be.a('function');
    });
  });
};
