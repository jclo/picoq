// ESLint declarations:
/* global describe, it */
/* eslint one-var: 0, semi-style: 0, no-underscore-dangle: 0 */


// -- Vendor Modules
const { expect } = require('chai')
    ;


// -- Local Modules


// -- Local Constants


// -- Local Variables


// -- Main

module.exports = function(PicoQ) {
  //
  // getlass, addClass, removeClass, toggleClass
  describe('Test class functions:', () => {
    // PicoQ().getClassList():
    describe('Test PicoQ().getClassList():', () => {
      it('Expects PicoQ("#app30").getClassList().value to return an empty string.', () => {
        expect(PicoQ('#app30').getClassList().value).to.be.a('string').that.has.lengthOf(0);
      });

      it('Expects PicoQ("#app31").getClassList().value to return the string "aaa".', () => {
        expect(PicoQ('#app31').getClassList().value).to.be.a('string').that.is.equal('aaa');
      });
    });

    // PicoQ().addClass():
    describe('Test PicoQ().addClass():', () => {
      it('Expects PicoQ("#app32").getClassList().value to return an empty string.', () => {
        expect(PicoQ('#app32').getClassList().value).to.be.a('string').that.has.lengthOf(0);
      });

      it('Expects PicoQ("#app32").addClass(1).getClassList().value to return an empty string.', () => {
        expect(PicoQ('#app32').addClass(1).getClassList().value).to.be.a('string').that.has.lengthOf(0);
      });

      it('Expects PicoQ("#app32").addClass("abc").getClassList().value to return the string "abc".', () => {
        expect(PicoQ('#app32').addClass('abc').getClassList().value).to.be.a('string').that.is.equal('abc');
      });
    });

    // PicoQ().addClasses():
    describe('Test PicoQ().addClasses():', () => {
      it('Expects PicoQ("#app33").getClassList().value to return an empty string.', () => {
        expect(PicoQ('#app33').getClassList().value).to.be.a('string').that.has.lengthOf(0);
      });

      it('Expects PicoQ("#app33").addClasses("aaa").getClassList().value to return an empty string.', () => {
        expect(PicoQ('#app33').addClasses('aaa').getClassList().value).to.be.a('string').that.has.lengthOf(0);
      });

      it('Expects PicoQ("#app33").addClasses(["aaa", "bbb", "ccc"]).getClassList().value to return the string "aaa bbb ccc".', () => {
        expect(PicoQ('#app33').addClasses(['aaa', 'bbb', 'ccc']).getClassList().value).to.be.a('string').that.is.equal('aaa bbb ccc');
      });
    });

    // PicoQ().removeClass():
    describe('Test PicoQ().removeClass():', () => {
      it('Expects PicoQ("#app34").getClassList().value to return the string "bbb".', () => {
        expect(PicoQ('#app34').getClassList().value).to.be.a('string').that.is.equal('bbb');
      });

      it('Expects PicoQ("#app34").removeClass(2).getClassList().value to return the string "bbb".', () => {
        expect(PicoQ('#app34').removeClass(2).getClassList().value).to.be.a('string').that.is.equal('bbb');
      });

      it('Expects PicoQ("#app34").removeClass("bbb").getClassList().value to return an empty string.', () => {
        expect(PicoQ('#app34').removeClass('bbb').getClassList().value).to.be.a('string').that.has.lengthOf(0);
      });
    });

    // PicoQ().removeClasses():
    describe('Test PicoQ().removeClasses():', () => {
      it('Expects PicoQ("#app35").getClassList().value to return the string "abc def ghi".', () => {
        expect(PicoQ('#app35').getClassList().value).to.be.a('string').that.is.equal('abc def ghi');
      });

      it('Expects PicoQ("#app35").removeClasses("xyz").getClassList().value to return string "abc def ghi".', () => {
        expect(PicoQ('#app35').removeClasses('xyz').getClassList().value).to.be.a('string').that.is.equal('abc def ghi');
      });

      it('Expects PicoQ("#app35").removeClasses(["abc", "def, "ghi"]).getClassList().value to return an empty string.', () => {
        expect(PicoQ('#app35').removeClasses(['abc', 'def', 'ghi']).getClassList().value).to.be.a('string').that.has.lengthOf(0);
      });
    });

    // PicoQ().toggleClass():
    describe('Test PicoQ().toggleClass():', () => {
      it('Expects PicoQ("#app36").getClassList().value to return an empty string.', () => {
        expect(PicoQ('#app36').getClassList().value).to.be.a('string').that.has.lengthOf(0);
      });

      it('Expects PicoQ("#app36").toggleClass("abc").getClassList().value to return the string "abc".', () => {
        expect(PicoQ('#app36').toggleClass('abc').getClassList().value).to.be.a('string').that.is.equal('abc');
      });

      it('Expects PicoQ("#app36").toggleClass("abc").getClassList().value to return an empty string.', () => {
        expect(PicoQ('#app36').toggleClass('abc').getClassList().value).to.be.a('string').that.has.lengthOf(0);
      });
    });

    // PicoQ().hasClass():
    describe('Test PicoQ().toggleClass():', () => {
      it('Expects PicoQ("#app37").isClass(123) to return false.', () => {
        expect(PicoQ('#app37').hasClass(123)).to.be.equal(false);
      });

      it('Expects PicoQ("#app37").isClass("aaa") to return true.', () => {
        expect(PicoQ('#app37').hasClass('aaa')).to.be.equal(true);
      });

      it('Expects PicoQ("#app37").isClass("bbb") to return true.', () => {
        expect(PicoQ('#app37').hasClass('bbb')).to.be.equal(true);
      });

      it('Expects PicoQ("#app37").isClass("ccc") to return true.', () => {
        expect(PicoQ('#app37').hasClass('ccc')).to.be.equal(true);
      });

      it('Expects PicoQ("#app37").isClass("cc") to return false.', () => {
        expect(PicoQ('#app37').hasClass('cc')).to.be.equal(false);
      });
    });
  });
};
