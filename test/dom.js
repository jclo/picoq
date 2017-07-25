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
  describe('Test DOM insertion:', () => {
    // PicoQ().html():
    describe('Test PicoQ().html():', () => {
      it('Expects PicoQ("#appX").html() to return undefined.', () => {
        expect(PicoQ('#appX').html()).to.be.undefined;
      });

      it('Expects PicoQ("#app1").html() to return an empty string.', () => {
        expect(PicoQ('#app1').html()).to.be.a('string').that.is.empty;
      });

      it('Expects PicoQ("#app2").html() to return a non empty string.', () => {
        expect(PicoQ('#app2').html()).to.be.a('string').that.is.not.empty;
      });

      it('Expects PicoQ("#app3").html() to return an empty string.', () => {
        expect(PicoQ('#app3').html()).to.be.a('string').that.is.empty;
      });

      it('Expects PicoQ("#app3").html("<h1>Hi!</h1>")[0].outerHTML to return a string.', () => {
        expect(PicoQ('#app3').html('<h1>Hi!</h1>')[0].outerHTML).to.be.a('string');
      });

      it('Expects this string to be equal to "<div id="app3"><h1>Hi!</h1></div>".', () => {
        expect(PicoQ('#app3').html('<h1>Hi!</h1>')[0].outerHTML).to.be.equal('<div id="app3"><h1>Hi!</h1></div>');
      });
    });

    // PicoQ().empty():
    describe('Test PicoQ().empty():', () => {
      it('Expects PicoQ("#app4")[0].innerHTML to return the string "<h1>Hi!</h1>".', () => {
        expect(PicoQ('#app4')[0].innerHTML).to.be.a('string').that.is.equal('<h1>Hi!</h1>');
      });

      it('Expects PicoQ("#app4").empty()[0].innerHTML to return an empty string.', () => {
        expect(PicoQ('#app4').empty()[0].innerHTML).to.be.a('string').that.is.empty;
      });
    });

    // PicoQ().append():
    describe('Test PicoQ().append():', () => {
      it('Expects PicoQ("#app5")[0].childElementCount to return the number "1".', () => {
        expect(PicoQ('#app5')[0].childElementCount).to.be.a('number').that.is.equal(1);
      });

      it('Expects PicoQ("#app5")[0].firstChild.outerHTML to return the string "<h1>Hi!</h1>".', () => {
        expect(PicoQ('#app5')[0].firstChild.outerHTML).to.be.a('string').that.is.equal('<h1>Hi!</h1>');
      });

      it('Expects PicoQ("#app5").append("<h2>Hello!</h2>")[0].childElementCount to return the number "2".', () => {
        expect(PicoQ('#app5').append('<h2>Hello!</h2>')[0].childElementCount).to.be.a('number').that.is.equal(2);
      });

      it('Expects PicoQ("#app5")[0].lasttChild.outerHTML to return the string "<h2>Hello!</h2>".', () => {
        expect(PicoQ('#app5')[0].lastChild.outerHTML).to.be.a('string').that.is.equal('<h2>Hello!</h2>');
      });
    });

    // PicoQ().prepend():
    describe('Test PicoQ().prepend():', () => {
      it('Expects PicoQ("#app6")[0].childElementCount to return the number "1".', () => {
        expect(PicoQ('#app6')[0].childElementCount).to.be.a('number').that.is.equal(1);
      });

      it('Expects PicoQ("#app6")[0].firstChild.outerHTML to return the string "<h1>Hi!</h1>".', () => {
        expect(PicoQ('#app6')[0].firstChild.outerHTML).to.be.a('string').that.is.equal('<h1>Hi!</h1>');
      });

      it('Expects PicoQ("#app6").prepend("<h2>Hello!</h2>")[0].childElementCount to return the number "2".', () => {
        expect(PicoQ('#app6').prepend('<h2>Hello!</h2>')[0].childElementCount).to.be.a('number').that.is.equal(2);
      });

      it('Expects PicoQ("#app6")[0].firstChild.outerHTML to return the string "<h2>Hello!</h2>".', () => {
        expect(PicoQ('#app6')[0].firstChild.outerHTML).to.be.a('string').that.is.equal('<h2>Hello!</h2>');
      });
    });

    // PicoQ().after():
    describe('Test PicoQ().after():', () => {
      it('Expects PicoQ("#app6").after("<div><p>Next</p><div>")[0].nextElementSibling.textContent to return the string "Next".', () => {
        expect(PicoQ('#app6').after('<div><p>Next</p><div>')[0].nextElementSibling.textContent).to.be.a('string').that.is.equal('Next');
      });
    });

    // PicoQ().before():
    describe('Test PicoQ().before():', () => {
      it('Expects PicoQ("#app6").before("<div><p>Previous</p><div>")[0].previousElementSibling.textContent to return the string "Previous".', () => {
        expect(PicoQ('#app6').before('<div><p>Previous</p><div>')[0].previousElementSibling.textContent).to.be.a('string').that.is.equal('Previous');
      });
    });

    // PicoQ().text():
    describe('Test PicoQ().text():', () => {
      it('Expects PicoQ("#app9 h1").text() to return the string "Hi!".', () => {
        expect(PicoQ('#app9 h1').text()).to.be.a('string').that.is.equal('Hi!');
      });

      it('Expects PicoQ("#app9 h1").text("Hello").text() to return the text "Hello!".', () => {
        expect(PicoQ('#app9 h1').text('Hello!').text()).to.be.a('string').that.is.equal('Hello!');
      });
    });
  });
};
