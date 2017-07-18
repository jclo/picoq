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
  describe('Test core functions:', () => {
    it('Expects PicoQ() to return an object.', () => {
      expect(PicoQ()).to.be.an('object');
    });

    it('Expects PicoQ()[0] to return undefined.', () => {
      expect(PicoQ()[0]).to.be.undefined;
    });

    it('Expects PicoQ("#appX")[0] to return null.', () => {
      // expect(PicoQ('#app1')[0].id).to.be.a('string').equal('app1');
      expect(PicoQ('#appX')[0]).to.be.null;
    });

    it('Expects PicoQ("#app1")[0].id to return "app1".', () => {
      expect(PicoQ('#app1')[0].id).to.be.a('string').equal('app1');
    });
  });
};