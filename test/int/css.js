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
  describe('Test PicoQ().css():', () => {
    it('Expects PicoQ("#zzz").css() to return null.', () => {
      expect(PicoQ('#zzz').css()).to.be.a('null');
    });

    it('Expects PicoQ("#zzz").css("font-family", "arial") to return null.', () => {
      expect(PicoQ('#zzz').css('font-family', 'arial')[0]).to.be.a('null');
    });

    it('Expects PicoQ("#app700").css() to return undefined', () => {
      expect(PicoQ('#app700').css()).to.be.a('undefined');
    });

    it('Expects PicoQ("#app700").css("font-size") to return an empty string.', () => {
      expect(PicoQ('#app700').css('font-size')).to.be.a('string').that.has.lengthOf(0);
    });

    it('Expects PicoQ("#app700").css("font-family", "arial") to return an object.', () => {
      expect(PicoQ('#app700').css('font-family', 'arial')).to.be.an('object');
    });

    it('Expects PicoQ("#app700").css("font-family") to return the string "arial".', () => {
      expect(PicoQ('#app700').css('font-family')).to.be.a('string').that.is.equal('arial');
    });
  });
};
