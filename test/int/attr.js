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
  describe('Test attributes functions:', () => {
    describe('Test PicoQ().attr():', () => {
      it('Expects PicoQ("#zzz").attr() to return null.', () => {
        expect(PicoQ('#zzz').attr()).to.be.a('null');
      });

      it('Expects PicoQ("#app900").attr() to return null.', () => {
        expect(PicoQ('#app900').attr()).to.be.a('null');
      });

      it('Expects PicoQ("#app900").attr("style") to return null.', () => {
        expect(PicoQ('#app900').attr('style')).to.be.a('null');
      });

      it('Expects PicoQ("#app900").attr("style", "color.blue") to return an object.', () => {
        expect(PicoQ('#app900').attr('style', 'color: blue')).to.be.an('object');
      });

      it('Expects PicoQ("#app900")[0].style.color to return the string "blue".', () => {
        expect(PicoQ('#app900')[0].style.color).to.be.a('string').that.is.equal('blue');
      });
    });

    describe('Test PicoQ().removeAttr():', () => {
      it('Expects PicoQ("#zzz").removeAttr()[0] to return null.', () => {
        expect(PicoQ('#zzz').removeAttr()[0]).to.be.a('null');
      });

      it('Expects PicoQ("#app910").attr("style") to return the string "blue".', () => {
        /* eslint-disable-next-line no-param-reassign */
        PicoQ('#app910')[0].style.color = 'blue';
        expect(PicoQ('#app910').attr('style')).to.be.a('string').that.is.equal('color: blue;');
      });

      it('Expects PicoQ("#app910").removeAttr("style") to return an object.', () => {
        expect(PicoQ('#app910').removeAttr('style')).to.be.a('object');
      });

      it('Expects PicoQ("#app910")[0].style.color to return an empty string.', () => {
        expect(PicoQ('#app910')[0].style.color).to.be.a('string').that.has.lengthOf(0);
      });
    });
  });
};
