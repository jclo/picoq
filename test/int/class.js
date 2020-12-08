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
    describe('Test PicoQ().getClassList():', () => {
      it('Expects PicoQ("#zzz").getClassList().value to return a null.', () => {
        expect(PicoQ('#zzz').getClassList()).to.be.a('null');
      });

      it('Expects PicoQ("#app800").getClassList().value to return an empty string.', () => {
        expect(PicoQ('#app800').getClassList().value).to.be.a('string').that.has.lengthOf(0);
      });

      it('Expects PicoQ("#app801").getClassList().value to return the string "aaa".', () => {
        expect(PicoQ('#app801').getClassList().value).to.be.a('string').that.is.equal('aaa');
      });
    });


    describe('Test PicoQ().addClass():', () => {
      it('Expects PicoQ("#app810").getClassList().value to return an empty string.', () => {
        expect(PicoQ('#app810').getClassList().value).to.be.a('string').that.has.lengthOf(0);
      });

      it('Expects PicoQ("#app810").addClass(1).getClassList().value to return an empty string.', () => {
        expect(PicoQ('#app810').addClass(1).getClassList().value).to.be.a('string').that.has.lengthOf(0);
      });

      it('Expects PicoQ("#app810").addClass("abc").getClassList().value to return the string "abc".', () => {
        expect(PicoQ('#app810').addClass('abc').getClassList().value).to.be.a('string').that.is.equal('abc');
      });
    });


    describe('Test PicoQ().addClasses():', () => {
      it('Expects PicoQ("#app820").getClassList().value to return an empty string.', () => {
        expect(PicoQ('#app820').getClassList().value).to.be.a('string').that.has.lengthOf(0);
      });

      it('Expects PicoQ("#app820").addClasses("aaa").getClassList().value to return an empty string.', () => {
        expect(PicoQ('#app820').addClasses('aaa').getClassList().value).to.be.a('string').that.has.lengthOf(0);
      });

      it('Expects PicoQ("#app820").addClasses(["aaa", "bbb", "ccc"]).getClassList().value to return the string "aaa bbb ccc".', () => {
        expect(PicoQ('#app820').addClasses(['aaa', 'bbb', 'ccc']).getClassList().value).to.be.a('string').that.is.equal('aaa bbb ccc');
      });
    });


    describe('Test PicoQ().removeClass():', () => {
      it('Expects PicoQ("#app830").getClassList().value to return the string "bbb".', () => {
        expect(PicoQ('#app830').getClassList().value).to.be.a('string').that.is.equal('bbb');
      });

      it('Expects PicoQ("#app830").removeClass(2).getClassList().value to return the string "bbb".', () => {
        expect(PicoQ('#app830').removeClass(2).getClassList().value).to.be.a('string').that.is.equal('bbb');
      });

      it('Expects PicoQ("#app830").removeClass("bbb").getClassList().value to return an empty string.', () => {
        expect(PicoQ('#app830').removeClass('bbb').getClassList().value).to.be.a('string').that.has.lengthOf(0);
      });
    });


    describe('Test PicoQ().removeClasses():', () => {
      it('Expects PicoQ("#app840").getClassList().value to return the string "abc def ghi".', () => {
        expect(PicoQ('#app840').getClassList().value).to.be.a('string').that.is.equal('abc def ghi');
      });

      it('Expects PicoQ("#app840").removeClasses("xyz").getClassList().value to return string "abc def ghi".', () => {
        expect(PicoQ('#app840').removeClasses('xyz').getClassList().value).to.be.a('string').that.is.equal('abc def ghi');
      });

      it('Expects PicoQ("#app840").removeClasses(["abc", "def, "ghi"]).getClassList().value to return an empty string.', () => {
        expect(PicoQ('#app840').removeClasses(['abc', 'def', 'ghi']).getClassList().value).to.be.a('string').that.has.lengthOf(0);
      });
    });


    describe('Test PicoQ().toggleClass():', () => {
      it('Expects PicoQ("#zzz").toggleClass() to return a null.', () => {
        expect(PicoQ('#zzz').toggleClass()[0]).to.be.a('null');
      });

      it('Expects PicoQ("#app850").getClassList().value to return an empty string.', () => {
        expect(PicoQ('#app850').getClassList().value).to.be.a('string').that.has.lengthOf(0);
      });

      it('Expects PicoQ("#app850").toggleClass("abc").getClassList().value to return the string "abc".', () => {
        expect(PicoQ('#app850').toggleClass('abc').getClassList().value).to.be.a('string').that.is.equal('abc');
      });

      it('Expects PicoQ("#app850").toggleClass("abc").getClassList().value to return an empty string.', () => {
        expect(PicoQ('#app850').toggleClass('abc').getClassList().value).to.be.a('string').that.has.lengthOf(0);
      });
    });


    describe('Test PicoQ().hasClass():', () => {
      it('Expects PicoQ("#zzz").hasClass() to return false.', () => {
        expect(PicoQ('#zzz').hasClass()).to.be.a('boolean').that.is.equal(false);
      });

      it('Expects PicoQ("#app860").isClass(123) to return false.', () => {
        expect(PicoQ('#app860').hasClass(123)).to.be.equal(false);
      });

      it('Expects PicoQ("#app860").isClass("aaa") to return true.', () => {
        expect(PicoQ('#app860').hasClass('aaa')).to.be.equal(true);
      });

      it('Expects PicoQ("#app860").isClass("bbb") to return true.', () => {
        expect(PicoQ('#app860').hasClass('bbb')).to.be.equal(true);
      });

      it('Expects PicoQ("#app860").isClass("ccc") to return true.', () => {
        expect(PicoQ('#app860').hasClass('ccc')).to.be.equal(true);
      });

      it('Expects PicoQ("#app860").isClass("cc") to return false.', () => {
        expect(PicoQ('#app860').hasClass('cc')).to.be.equal(false);
      });
    });
  });
};
