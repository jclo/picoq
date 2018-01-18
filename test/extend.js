/* global describe, it */
/* eslint  one-var: 0, import/no-extraneous-dependencies: 1, no-unused-expressions: 0 */

'use strict';

// -- Node modules
const expect    = require('chai').expect
    ;

// -- Local modules
const PicoQ = require('../index.js')
    , _     = PicoQ._
    ;

// -- Local constants


// -- Local variables


// -- Main
module.exports = function() {
  describe('Test PicoQ._ functions:', () => {
    describe('Test _.extend():', () => {
      it('Expexts _.extend("aaa") to return "aaa".', () => {
        expect(_.extend('aaa')).to.be.a('string').that.is.equal('aaa');
      });

      it('Expexts _.extend({}) to return an empty object.', () => {
        expect(_.extend({})).to.be.an('object').that.is.empty;
      });
      it('Expexts _.extend({}, {a: 1}) to return a non empty object.', () => {
        expect(_.extend({}, { a: 1 })).to.be.an('object').that.is.not.empty;
      });
      it('Expexts this object to own the property "a".', () => {
        expect(_.extend({}, { a: 1 })).to.have.property('a');
      });
      it('Expexts _.extend({a: 1}, {a: 2, b: 3}) to return a non empty object.', () => {
        expect(_.extend({}, { a: 1 }, { a: 2, b: 3 })).to.be.an('object').that.is.not.empty;
      });
      it('Expexts this object to own two properties.', () => {
        const keys = Object.keys(_.extend({}, { a: 1 }, { a: 2, b: 3 }));
        expect(keys).to.have.a.lengthOf(2);
      });
      it('Expexts this object to own the property "a" that is equal to 2.', () => {
        expect(_.extend({}, { a: 1 }, { a: 2, b: 3 })).to.have.property('a').that.is.equal(2);
      });
      it('Expexts this object to own the property "b" that is equal to 3.', () => {
        expect(_.extend({}, { a: 1 }, { a: 2, b: 3 })).to.have.property('b').that.is.equal(3);
      });
    });
  });
};
