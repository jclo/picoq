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
  describe('Test Overslash functions:', () => {
    describe('Test _.isUndefined():', () => {
      it('Expexts _.isUndefined(1) to return false.', () => {
        expect(_.isUndefined(1)).to.be.false;
      });
      it('Expexts _.isUndefined(undefined) to return true.', () => {
        expect(_.isUndefined(undefined)).to.be.true;
      });
    });

    describe('Test _.isNull():', () => {
      it('Expexts _.isNull(1) to return false.', () => {
        expect(_.isNull(1)).to.be.false;
      });
      it('Expexts _.isNull(null) to return true.', () => {
        expect(_.isNull(null)).to.be.true;
      });
    });

    describe('Test _.isBoolean():', () => {
      it('Expexts _.isBoolean(1) to return false.', () => {
        expect(_.isBoolean(1)).to.be.false;
      });
      it('Expexts _.isBoolean(true) to return true.', () => {
        expect(_.isBoolean(true)).to.be.true;
      });
    });

    describe('Test _.isString():', () => {
      it('Expexts _.isString() to return false.', () => {
        expect(_.isString()).to.be.false;
      });
      it('Expexts _.isString("aaa") to return true.', () => {
        expect(_.isString('aaa')).to.be.true;
      });
    });

    describe('Test _.isNumber():', () => {
      it('Expexts _.isNumber("1") to return false.', () => {
        expect(_.isNumber('1')).to.be.false;
      });
      it('Expexts _.isNumber(1) to return true.', () => {
        expect(_.isNumber(1)).to.be.true;
      });
    });

    describe('Test _.isNaN():', () => {
      it('Expexts _.isNaN("1") to return false.', () => {
        expect(_.isNaN('1')).to.be.false;
      });
      it('Expexts _.isNaN(NaN) to return true.', () => {
        expect(_.isNaN(NaN)).to.be.true;
      });
    });

    describe('Test _.isOdd():', () => {
      it('Expexts _.isOdd(2) to return false.', () => {
        expect(_.isOdd(2)).to.be.false;
      });
      it('Expexts _.isOdd(1) to return true.', () => {
        expect(_.isOdd(1)).to.be.true;
      });
    });

    describe('Test _.isObject():', () => {
      it('Expexts _.isObject() to return false.', () => {
        expect(_.isObject()).to.be.false;
      });
      it('Expexts _.isObject({}) to return true.', () => {
        expect(_.isObject({})).to.be.true;
      });
      it('Expexts _.isObject([]) to return true.', () => {
        expect(_.isObject([])).to.be.true;
      });
      it('Expexts _.isObject(function() {}) to return true.', () => {
        expect(_.isObject(() => {})).to.be.true;
      });
    });

    describe('Test _.isLiteralObject():', () => {
      it('Expexts _.isObject() to return false.', () => {
        expect(_.isLiteralObject()).to.be.false;
      });
      it('Expexts _.isLiteralObject({}) to return true.', () => {
        expect(_.isLiteralObject({})).to.be.true;
      });
      it('Expexts _.isLiteralObject([]) to return false.', () => {
        expect(_.isLiteralObject([])).to.be.false;
      });
      it('Expexts _.isLiteralObject(function() {}) to return false.', () => {
        expect(_.isLiteralObject(() => {})).to.be.false;
      });
    });

    describe('Test _.isFunction():', () => {
      it('Expexts _.isFunction() to return false.', () => {
        expect(_.isFunction()).to.be.false;
      });
      it('Expexts _.isFunction(function() {}) to return true.', () => {
        expect(_.isFunction(() => {})).to.be.true;
      });
    });

    describe('Test _.isArray():', () => {
      it('Expexts _.isArray() to return false.', () => {
        expect(_.isArray()).to.be.false;
      });
      it('Expexts _.isArray([]) to return true.', () => {
        expect(_.isArray([])).to.be.true;
      });
    });

    describe('Test _.extend():', () => {
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
