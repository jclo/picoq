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
  describe('Test PicoQ().text():', () => {
    it('Expects PicoQ("#zzz").text() to return a null.', () => {
      expect(PicoQ('#zzz').text()[0]).to.be.a('null');
    });

    it('Expects PicoQ("#app500").text(1) to do nothing.', () => {
      expect(PicoQ('#app500').text(1)[0].outerHTML).to.be.a('string').that.is.equal('<div id="app500"></div>');
    });

    it('Expects PicoQ("#app500").text("Hi!") to add "Hi!" to the node.', () => {
      expect(PicoQ('#app500').text('Hi!')[0].innerHTML).to.be.a('string').that.is.equal('Hi!');
    });

    it('Expects PicoQ("#app500").text() to return "Hi!".', () => {
      expect(PicoQ('#app500').text()).to.be.a('string').that.is.equal('Hi!');
    });
  });
};
