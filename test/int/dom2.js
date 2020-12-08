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
  describe('Test DOM insertion (next):', () => {
    describe('Test PicoQ().clone():', () => {
      it('Expects PicoQ("#app600").clone() to return a clone with one child.', () => {
        expect(PicoQ('#app600').clone().children.length).to.be.a('number').that.is.equal(1);
      });

      it('Expects PicoQ("#app600").clone() to return a clone with one grandchild.', () => {
        expect(PicoQ('#app600').clone().children[0].children.length).to.be.a('number').that.is.equal(1);
      });

      it('Expects PicoQ("#app600").clone("true") to return a clone with one child.', () => {
        expect(PicoQ('#app600').clone(true).children.length).to.be.a('number').that.is.equal(1);
      });

      it('Expects PicoQ("#app600").clone("true") to return a clone with one grandchild.', () => {
        expect(PicoQ('#app600').clone(true).children[0].children.length).to.be.a('number').that.is.equal(1);
      });

      it('Expects PicoQ("#app600").clone("false") to return a clone with no child.', () => {
        expect(PicoQ('#app600').clone(false).children.length).to.be.a('number').that.is.equal(0);
      });
    });


    describe('Test PicoQ().firstChild():', () => {
      it('Expects PicoQ("#zzz").firstChild() to return a null.', () => {
        expect(PicoQ('#zzz').firstChild()[0]).to.be.a('null');
      });

      it('Expects PicoQ("#app610").firstChild() to return "<div class="child1"></div>".', () => {
        expect(PicoQ('#app610').firstChild().outerHTML).to.be.a('string').that.is.equal('<div class="child1"></div>');
      });
    });


    describe('Test PicoQ().insertChildBefore():', () => {
      it('Expects PicoQ("#zzz").insertChildBefore() to return a null.', () => {
        expect(PicoQ('#zzz').insertChildBefore()[0]).to.be.a('null');
      });

      it('Expects PicoQ("#app620").insertChildBefore() to do nothing.', () => {
        const childs = PicoQ('#app620').insertChildBefore()[0].children;
        expect(childs.length).to.be.a('number').that.is.equal(2);
        expect(childs.item(0).outerHTML).to.be.a('string').that.is.equal('<div class="child1"></div>');
        expect(childs.item(1).outerHTML).to.be.a('string').that.is.equal('<div class="child2"></div>');
      });

      it('Expects PicoQ("#app620").insertChildBefore(newChild, child) to insert a new child.', () => {
        const newChild = document.createElement('div');
        newChild.className = 'newchild';
        const child = PicoQ('#app620')[0].children[0];
        PicoQ('#app620').insertChildBefore(newChild, child);
        const childs = PicoQ('#app620')[0].children;

        expect(childs.length).to.be.a('number').that.is.equal(3);
      });

      it('Expects the first child to be "<div class="newchild"></div>".', () => {
        const childs = PicoQ('#app620')[0].children;
        expect(childs.item(0).outerHTML).to.be.a('string').that.is.equal('<div class="newchild"></div>');
      });

      it('Expects the second child to be "<div class="child1"></div>".', () => {
        const childs = PicoQ('#app620')[0].children;
        expect(childs.item(1).outerHTML).to.be.a('string').that.is.equal('<div class="child1"></div>');
      });

      it('Expects the third child to be "<div class="child2"></div>".', () => {
        const childs = PicoQ('#app620')[0].children;
        expect(childs.item(2).outerHTML).to.be.a('string').that.is.equal('<div class="child2"></div>');
      });
    });


    describe('Test PicoQ().removeChild():', () => {
      it('Expects PicoQ("#zzz").removeChild() to return a null.', () => {
        expect(PicoQ('#zzz').removeChild()[0]).to.be.a('null');
      });

      it('Expects PicoQ("#app630").removeChild() to do nothing.', () => {
        const childs = PicoQ('#app630').removeChild()[0].children;
        expect(childs.length).to.be.a('number').that.is.equal(1);
        expect(childs.item(0).outerHTML).to.be.a('string').that.is.equal('<div class="child"></div>');
      });

      it('Expects PicoQ("#app630").removeChild(child) to remove the unique child.', () => {
        const child = PicoQ('#app630')[0].children[0];
        const childs = PicoQ('#app630').removeChild(child)[0].children;
        expect(childs.length).to.be.a('number').that.is.equal(0);
      });
    });


    describe('Test PicoQ().replaceChild():', () => {
      it('Expects PicoQ("#zzz").replaceChild() to return a null.', () => {
        expect(PicoQ('#zzz').replaceChild()[0]).to.be.a('null');
      });

      it('Expects PicoQ("#app640").replaceChild() to do nothing.', () => {
        const childs = PicoQ('#app640').replaceChild()[0].children;
        expect(childs.length).to.be.a('number').that.is.equal(1);
        expect(childs.item(0).outerHTML).to.be.a('string').that.is.equal('<div class="child"></div>');
      });

      it('Expects PicoQ("#app640").replaceChild(child) to replace the unique child.', () => {
        const newChild = document.createElement('div');
        newChild.className = 'newchild';
        const child = PicoQ('#app640')[0].children[0];
        PicoQ('#app640').replaceChild(newChild, child);
        const childs = PicoQ('#app640')[0].children;

        expect(childs.length).to.be.a('number').that.is.equal(1);
        expect(childs.item(0).outerHTML).to.be.a('string').that.is.equal('<div class="newchild"></div>');
      });
    });


    describe('Test PicoQ().children():', () => {
      it('Expects PicoQ("#zzz").children() to return a null.', () => {
        expect(PicoQ('#zzz').children()).to.be.a('null');
      });

      it('Expects PicoQ("#app650").children() to return an HTMLCollection.', () => {
        expect(PicoQ('#app650').children()).to.be.an('HTMLCollection');
      });

      it('Expects this HTMLCollection to own two elements.', () => {
        expect(PicoQ('#app650').children().length).to.be.a('number').that.is.equal(2);
      });

      it('Expects the first element to be "<div class="child1"></div>".', () => {
        expect(PicoQ('#app650').children().item(0).outerHTML).to.be.a('string').that.is.equal('<div class="child1"></div>');
      });

      it('Expects the second element to be "<div class="child2"></div>".', () => {
        expect(PicoQ('#app650').children().item(1).outerHTML).to.be.a('string').that.is.equal('<div class="child2"></div>');
      });
    });


    describe('Test PicoQ().childIndex():', () => {
      it('Expects PicoQ("#zzz").childIndex() to return -1.', () => {
        expect(PicoQ('#zzz').childIndex()).to.be.a('number').that.is.equal(-1);
      });


      it('Expects PicoQ("#app660").childIndex() to return a number equal to 0.', () => {
        expect(PicoQ('#app660').childIndex()).to.be.a('number').that.is.equal(0);
      });

      it('Expects PicoQ("#app661").childIndex() to return a number equal to 2.', () => {
        expect(PicoQ('#app661').childIndex()).to.be.a('number').that.is.equal(2);
      });
    });


    describe('Test PicoQ().getRect():', () => {
      it('Expects PicoQ("#zzz").getRect() to return null.', () => {
        expect(PicoQ('#zzz').getRect()).to.be.a('null');
      });

      it('Expects PicoQ("#app670").getRect() to return an object.', () => {
        expect(PicoQ('#app670').getRect()).to.be.an('object');
      });
      it('Expects this object to own the property "bottom".', () => {
        expect(PicoQ('#app670').getRect()).to.have.property('bottom').that.is.a('number');
      });
      it('Expects this object to own the property "height".', () => {
        expect(PicoQ('#app670').getRect()).to.have.property('height').that.is.a('number');
      });
      it('Expects this object to own the property "left".', () => {
        expect(PicoQ('#app670').getRect()).to.have.property('left').that.is.a('number');
      });
      it('Expects this object to own the property "right".', () => {
        expect(PicoQ('#app670').getRect()).to.have.property('right').that.is.a('number');
      });
      it('Expects this object to own the property "top".', () => {
        expect(PicoQ('#app670').getRect()).to.have.property('top').that.is.a('number');
      });
      it('Expects this object to own the property "width".', () => {
        expect(PicoQ('#app670').getRect()).to.have.property('width').that.is.a('number');
      });
    });
  });
};
