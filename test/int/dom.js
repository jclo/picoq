// ESLint declarations:
/* global describe, it */
/* eslint one-var: 0, semi-style: 0, no-underscore-dangle: 0 */

'use strict';

// -- Vendor Modules
const { expect } = require('chai')
    ;


// -- Local Modules


// -- Local Constants


// -- Local Variables


// -- Main

module.exports = function(PicoQ) {
  describe('Test DOM insertion:', () => {
    // PicoQ().html():
    describe('Test PicoQ().html():', () => {
      it('Expects PicoQ("#appX").html() to return an empty string.', () => {
        expect(PicoQ('#appX').html()).to.be.a('string').that.has.lengthOf(0);
      });

      it('Expects PicoQ("#app1").html() to return an empty string.', () => {
        expect(PicoQ('#app1').html()).to.be.a('string').that.has.lengthOf(0);
      });

      it('Expects PicoQ("#app2").html() to return a non empty string.', () => {
        expect(PicoQ('#app2').html()).to.be.a('string').that.has.not.lengthOf(0);
      });

      it('Expects PicoQ("#app3").html() to return an empty string.', () => {
        expect(PicoQ('#app3').html()).to.be.a('string').that.has.lengthOf(0);
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
        expect(PicoQ('#app4').empty()[0].innerHTML).to.be.a('string').that.has.lengthOf(0);
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

      it('Expects PicoQ("#app5").appendHTML("<h2>Hello!</h2>")[0].childElementCount to return the number "2".', () => {
        expect(PicoQ('#app5').appendHTML('<h2>Hello!</h2>')[0].childElementCount).to.be.a('number').that.is.equal(2);
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

    // PicoQ().replaceWith():
    describe('Test PicoQ().replaceWith():', () => {
      it('Expects PicoQ("#app7")[0].children[1].textContent to return the string "Second Child".', () => {
        expect(PicoQ('#app7')[0].children[1].textContent).to.be.a('string').that.is.equal('Second Child');
      });

      it('Expects PicoQ("#app7 .two").replaceWith("<p>New Second Child</p>") to replace the second child node.', () => {
        expect(PicoQ('#app7 .two').replaceWith('<p>New Second Child</p>')).to.be.an('object');
      });

      it('Expects the second child text to be "New Second Child".', () => {
        expect(PicoQ('#app7')[0].children[1].textContent).to.be.a('string').that.is.equal('New Second Child');
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

    // PicoQ().clone()
    describe('Test PicoQ().clone():', () => {
      it('Expects PicoQ("#app0A").clone() to return a clone with one child.', () => {
        expect(PicoQ('#app0A').clone().children.length).to.be.a('number').that.is.equal(1);
      });

      it('Expects PicoQ("#app0A").clone() to return a clone with one grandchild.', () => {
        expect(PicoQ('#app0A').clone().children[0].children.length).to.be.a('number').that.is.equal(1);
      });

      it('Expects PicoQ("#app0A").clone("true") to return a clone with one child.', () => {
        expect(PicoQ('#app0A').clone(true).children.length).to.be.a('number').that.is.equal(1);
      });

      it('Expects PicoQ("#app0A").clone("true") to return a clone with one grandchild.', () => {
        expect(PicoQ('#app0A').clone(true).children[0].children.length).to.be.a('number').that.is.equal(1);
      });

      it('Expects PicoQ("#app0A").clone("false") to return a clone with no child.', () => {
        expect(PicoQ('#app0A').clone(false).children.length).to.be.a('number').that.is.equal(0);
      });
    });

    // PicoQ().insertChildBefore()
    describe('Test PicoQ().insertChildBefore():', () => {
      const newChild = document.createElement('div');
      const child = PicoQ('#app0B2')[0].children[0];
      const el = PicoQ('#app0B2').insertChildBefore(newChild, child)[0];
      newChild.className = 'newchild';

      it('Expects PicoQ("#app0B1").insertChildBefore() not to insert any child.', () => {
        expect(PicoQ('#app0B1').insertChildBefore()[0].children.length).to.be.a('number').that.is.equal(1);
      });

      it('Expects PicoQ("#app0B2").insertChildBefore(newChild, child) to insert a second child.', () => {
        expect(el.children.length).to.be.a('number').that.is.equal(2);
      });

      it('Expects the first child to own the class "newchild".', () => {
        expect(el.children[0].classList.value).to.be.a('string').that.is.equal('newchild');
      });

      it('Expects the second child to own the class "firstchild".', () => {
        expect(el.children[1].classList.value).to.be.a('string').that.is.equal('firstchild');
      });
    });

    // PicoQ().removeChild()
    describe('Test PicoQ().removeChild():', () => {
      const child = PicoQ('#app0C2')[0].children[0];

      it('Expects PicoQ("#app0C1").removeChild() not to remove any child.', () => {
        expect(PicoQ('#app0C1').removeChild()[0].children.length).to.be.a('number').that.is.equal(1);
      });

      it('Expects PicoQ("#app0C2").removeChild(child) to remove the unique child.', () => {
        expect(PicoQ('#app0C2').removeChild(child)[0].children.length).to.be.a('number').that.is.equal(0);
      });
    });

    // PicoQ().replaceChild()
    describe('Test PicoQ().removeChild():', () => {
      it('Expects PicoQ("#app0D1").replaceChild() not to replace any child.', () => {
        const el = PicoQ('#app0D1').replaceChild()[0];
        expect(el.children[0].classList.value).to.be.a('string').that.is.equal('child');
      });

      it('Expects PicoQ("#app0D2").replaceChild(newChild, child) to replace child by newChild.', () => {
        const newChild = document.createElement('div');
        newChild.className = 'newchild';
        const el = PicoQ('#app0D2')[0];
        const child = el.children[0];
        expect(PicoQ('#app0D2').replaceChild(newChild, child)[0].children[0].classList.value).to.be.a('string').that.is.equal('newchild');
      });
    });

    // PicoQ().children():
    describe('Test PicoQ().children():', () => {
      it('Expects PicoQ("#app0E1").children().length to return a number equal to 0.', () => {
        expect(PicoQ('#app0E1').children().length).to.be.a('number').that.is.equal(0);
      });

      it('Expects PicoQ("#app0E2").children().length to return a number equal to 3.', () => {
        expect(PicoQ('#app0E2').children().length).to.be.a('number').that.is.equal(3);
      });
    });

    // PicoQ().childIndex():
    describe('Test PicoQ().childIndex():', () => {
      it('Expects PicoQ("#app0F1").childIndex() to return a number equal to 0.', () => {
        expect(PicoQ('#app0F1').childIndex()).to.be.a('number').that.is.equal(0);
      });

      it('Expects PicoQ("#app0F2").childIndex() to return a number equal to 2.', () => {
        expect(PicoQ('#app0F2').childIndex()).to.be.a('number').that.is.equal(2);
      });
    });

    // PicoQ().getRect():
    describe('Test PicoQ(app0G"").getRect():', () => {
      it('Expects PicoQ("#ap0GGG").getRect() to return null.', () => {
        expect(PicoQ('#app0GGG').getRect()).to.be.a('null');
      });

      it('Expects PicoQ("#app0G").getRect() to return an object.', () => {
        expect(PicoQ('#app0G').getRect()).to.be.an('object');
      });

      it('Expects this object to own the property "bottom".', () => {
        expect(PicoQ('#app0G').getRect()).to.have.property('bottom').that.is.a('number');
      });
      it('Expects this object to own the property "height".', () => {
        expect(PicoQ('#app0G').getRect()).to.have.property('height').that.is.a('number');
      });
      it('Expects this object to own the property "left".', () => {
        expect(PicoQ('#app0G').getRect()).to.have.property('left').that.is.a('number');
      });
      it('Expects this object to own the property "right".', () => {
        expect(PicoQ('#app0G').getRect()).to.have.property('right').that.is.a('number');
      });
      it('Expects this object to own the property "top".', () => {
        expect(PicoQ('#app0G').getRect()).to.have.property('top').that.is.a('number');
      });
      it('Expects this object to own the property "width".', () => {
        expect(PicoQ('#app0G').getRect()).to.have.property('width').that.is.a('number');
      });
    });
  });
};
