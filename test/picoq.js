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
  describe('Test PicoQ VERSION and noConflict:', () => {
    it('Expects PicoQ.VERSION to return a string.', () => {
      expect(PicoQ.VERSION).to.be.a('string');
    });
    it('Expects PicoQ.noConflict to return a function.', () => {
      expect(PicoQ.noConflict).to.be.a('function');
    });
  });
};
