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
  describe('Test DOM insertion:', () => {
    describe('Test PicoQ().html():', () => {
      it('Expects PicoQ("#appX").html() to return an empty string.', () => {
        expect(PicoQ('#appX').html()).to.be.a('string').that.has.lengthOf(0);
      });

      it('Expects PicoQ("#app300").html() to return an empty string.', () => {
        expect(PicoQ('#app300').html()).to.be.a('string').that.has.lengthOf(0);
      });

      it('Expects PicoQ("#app301").html() to return a non empty string.', () => {
        expect(PicoQ('#app301').html()).to.be.a('string').that.has.not.lengthOf(0);
      });

      it('Expects PicoQ("#app302").html() to return an empty string.', () => {
        expect(PicoQ('#app302').html()).to.be.a('string').that.has.lengthOf(0);
      });

      it('Expects PicoQ("#app302").html("<h1>Hi!</h1>")[0].outerHTML to return a string.', () => {
        expect(PicoQ('#app302').html('<h1>Hi!</h1>')[0].outerHTML).to.be.a('string');
      });

      it('Expects this string to be equal to "<div id="app302"><h1>Hi!</h1></div>".', () => {
        expect(PicoQ('#app302').html('<h1>Hi!</h1>')[0].outerHTML).to.be.equal('<div id="app302"><h1>Hi!</h1></div>');
      });
    });


    describe('Test PicoQ().empty():', () => {
      it('Expects PicoQ("#app310")[0].innerHTML to return the string "<h1>Hi!</h1>".', () => {
        expect(PicoQ('#app310')[0].innerHTML).to.be.a('string').that.is.equal('<h1>Hi!</h1>');
      });

      it('Expects PicoQ("#app310").empty()[0].innerHTML to return an empty string.', () => {
        expect(PicoQ('#app310').empty()[0].innerHTML).to.be.a('string').that.has.lengthOf(0);
      });
    });


    describe('Test PicoQ().append():', () => {
      it('Expects PicoQ("#zzz").append()[0] to return a null object.', () => {
        expect(PicoQ('#zzz').append()[0]).to.be.a('null');
      });

      it('Expects PicoQ("#app320").append()[0] to return a node without child.', () => {
        expect(PicoQ('#app320').append()[0].innerHTML).to.be.a('string').that.is.equal('');
      });

      it('Expects PicoQ("#app320").append(1)[0] to return a node without child.', () => {
        expect(PicoQ('#app320').append(1)[0].innerHTML).to.be.a('string').that.is.equal('');
      });

      it('Expects PicoQ("#app320").append("p")[0].outerHTML to return the child node <p></p>.', () => {
        expect(PicoQ('#app320').append('p')[0].outerHTML).to.be.a('string').that.is.equal('<p></p>');
      });
    });


    describe('Test PicoQ().appendTextChild():', () => {
      it('Expects PicoQ("#zzz").appendTextChild()[0] to return a null object.', () => {
        expect(PicoQ('#zzz').appendTextChild()[0]).to.be.a('null');
      });

      it('Expects PicoQ("#app330").appendTextChild()[0] to return a node without child.', () => {
        expect(PicoQ('#app330').appendTextChild()[0].innerHTML).to.be.a('string').that.is.equal('');
      });

      it('Expects PicoQ("#app330").appendTextChild(1)[0] to return a node without child.', () => {
        expect(PicoQ('#app330').appendTextChild(1)[0].innerHTML).to.be.a('string').that.is.equal('');
      });

      it('Expects PicoQ("#app330").appendTextChild("aaa")[0].outerHTML to return the child node "aaa".', () => {
        expect(PicoQ('#app330').appendTextChild('aaa')[0].innerHTML).to.be.a('string').that.is.equal('aaa');
      });
    });


    describe('Test PicoQ().appendBefore():', () => {
      it('Expects PicoQ("#zzz").appendBefore()[0] to return a null object.', () => {
        expect(PicoQ('#zzz').appendBefore()[0]).to.be.a('null');
      });

      it('Expects PicoQ("#app340").appendBefore()[0] to return a node with one children.', () => {
        const el = PicoQ('#app340').appendBefore()[0];
        const { children } = el;
        expect(children).to.be.an('HTMLCollection');
        expect(children.length).to.be.a('number').that.is.equal(1);
      });

      it('Expects PicoQ("#app340").appendBefore("p")[0] to return a node with one children.', () => {
        const el = PicoQ('#app340').appendBefore('p')[0];
        const { children } = el;
        expect(children).to.be.an('HTMLCollection');
        expect(children.length).to.be.a('number').that.is.equal(1);
      });

      it('Expects PicoQ("#app340").appendBefore("p", ".second")[0] to return a node with one children.', () => {
        const el = PicoQ('#app340').appendBefore('p', '.second')[0];
        const { children } = el;
        expect(children).to.be.an('HTMLCollection');
        expect(children.length).to.be.a('number').that.is.equal(1);
      });

      it('Expects PicoQ("#app340").appendBefore("p", ".first").parent()[0].children to return a node with two child.', () => {
        const childs = PicoQ('#app340').appendBefore('p', '.first').parent()[0].children;
        expect(childs).to.be.an('HTMLCollection');
        expect(childs.length).to.be.a('number').that.is.equal(2);
      });

      it('Expects the first child to be "<p></p>".', () => {
        const childs = PicoQ('#app340')[0].children;
        expect(childs.item(0).outerHTML).to.be.a('string').that.is.equal('<p></p>');
      });

      it('Expects the second child to be "<p class="first">unique</p>".', () => {
        const childs = PicoQ('#app340')[0].children;
        expect(childs.item(1).outerHTML).to.be.a('string').that.is.equal('<p class="first">unique</p>');
      });
    });


    describe('Test PicoQ().appendAfter():', () => {
      it('Expects PicoQ("#zzz").appendAfter()[0] to return a null object.', () => {
        expect(PicoQ('#zzz').appendAfter()[0]).to.be.a('null');
      });

      it('Expects PicoQ("#app350").appendAfter()[0] to return a node with one children.', () => {
        const el = PicoQ('#app350').appendAfter()[0];
        const { children } = el;
        expect(children).to.be.an('HTMLCollection');
        expect(children.length).to.be.a('number').that.is.equal(1);
      });

      it('Expects PicoQ("#app350").appendAfter("p")[0] to return a node with one children.', () => {
        const el = PicoQ('#app350').appendAfter('p')[0];
        const { children } = el;
        expect(children).to.be.an('HTMLCollection');
        expect(children.length).to.be.a('number').that.is.equal(1);
      });

      it('Expects PicoQ("#app350").appendAfter("p", ".second")[0] to return a node with one children.', () => {
        const el = PicoQ('#app350').appendAfter('p', '.second')[0];
        const { children } = el;
        expect(children).to.be.an('HTMLCollection');
        expect(children.length).to.be.a('number').that.is.equal(1);
      });

      it('Expects PicoQ("#app350").appendAfter("p", ".first").parent()[0].children to return a node with two child.', () => {
        const childs = PicoQ('#app350').appendAfter('p', '.first').parent()[0].children;
        expect(childs).to.be.an('HTMLCollection');
        expect(childs.length).to.be.a('number').that.is.equal(2);
      });

      it('Expects the first child to be "<p class="first">unique</p>".', () => {
        const childs = PicoQ('#app350')[0].children;
        expect(childs.item(0).outerHTML).to.be.a('string').that.is.equal('<p class="first">unique</p>');
      });

      it('Expects the second child to be "<p></p>".', () => {
        const childs = PicoQ('#app350')[0].children;
        expect(childs.item(1).outerHTML).to.be.a('string').that.is.equal('<p></p>');
      });
    });


    describe('Test PicoQ().replace():', () => {
      it('Expects PicoQ("#zzz").replace()[0] to return a null object.', () => {
        expect(PicoQ('#zzz').replace()[0]).to.be.a('null');
      });

      it('Expects PicoQ("#app360 .first").replace()[0] to return the current node.', () => {
        expect(PicoQ('#app360 .first').replace()[0].innerHTML).to.be.a('string').that.is.equal('unique');
      });

      it('Expects PicoQ("#app360 .first").replace("h2")[0] to return the new node.', () => {
        expect(PicoQ('#app360 .first').replace('h2')[0].outerHTML).to.be.a('string').that.is.equal('<h2></h2>');
      });
    });


    describe('Test PicoQ().appendHTML():', () => {
      it('Expects PicoQ("#zzz").appendHTML()[0] to return a null object.', () => {
        expect(PicoQ('#zzz').appendHTML()[0]).to.be.a('null');
      });

      it('Expects PicoQ("#app370").appendHTML()[0] to return an object with one child.', () => {
        const childs = PicoQ('#app370').appendHTML()[0].children;
        expect(childs.length).to.be.a('number').that.is.equal(1);
      });

      it('Expects PicoQ("#app370").appendHTML("<p>Hi!</p>")[0] to return an object with two childs.', () => {
        const childs = PicoQ('#app370').appendHTML('<p>Hi!</p>')[0].children;
        expect(childs.length).to.be.a('number').that.is.equal(2);
        expect(childs.item(1).outerHTML).to.be.a('string').that.is.equal('<p>Hi!</p>');
      });
    });


    describe('Test PicoQ().prepend():', () => {
      it('Expects PicoQ("#zzz").prepend()[0] to return a null object.', () => {
        expect(PicoQ('#zzz').prepend()[0]).to.be.a('null');
      });

      it('Expects PicoQ("#app380").prepend()[0] to return an object with one child.', () => {
        const childs = PicoQ('#app380').prepend()[0].children;
        expect(childs.length).to.be.a('number').that.is.equal(1);
      });

      it('Expects PicoQ("#app380").prepend("<p>Hi!</p>")[0] to return an object with two childs.', () => {
        const childs = PicoQ('#app380').prepend('<p>Hi!</p>')[0].children;
        expect(childs.length).to.be.a('number').that.is.equal(2);
        expect(childs.item(0).outerHTML).to.be.a('string').that.is.equal('<p>Hi!</p>');
      });
    });


    describe('Test PicoQ().after():', () => {
      const a = {
        aaa() {
          this.id = 'app391a';
          this.PicoQ = PicoQ;
          return this.PicoQ();
        },
      };

      it('Expects PicoQ("#zzz").after()[0] to return a null object.', () => {
        expect(PicoQ('#zzz').after()[0]).to.be.a('null');
      });

      it('Expects PicoQ("#app390 .after").after() to return an object with one child.', () => {
        const childs = PicoQ('#app390 .after').after().parent()[0].children;
        expect(childs.length).to.be.a('number').that.is.equal(1);
      });

      it('Expects PicoQ("#app390 .after").after("<p>Hi!</p>") to return an object with two childs.', () => {
        const childs = PicoQ('#app390 .after').after('<p>Hi!</p>').parent()[0].children;
        expect(childs.length).to.be.a('number').that.is.equal(2);
      });

      it('Expects the first child to be "<div class="after"></div>".', () => {
        const childs = PicoQ('#app390')[0].children;
        expect(childs.item(0).outerHTML).to.be.a('string').that.is.equal('<div class="after"></div>');
      });

      it('Expects the second child to be "<p>Hi!</p>".', () => {
        const childs = PicoQ('#app390')[0].children;
        expect(childs.item(1).outerHTML).to.be.a('string').that.is.equal('<p>Hi!</p>');
      });

      const obj = a.aaa();
      obj.after('<p>Hi!</p>');
      it('Expects this.PicoQ("app391a").after("<p>Hi!</p>") not to add this node.', () => {
        const childs = PicoQ('#app391')[0].children;
        expect(childs.length).to.be.a('number').that.is.equal(1);
        expect(childs.item(0).outerHTML).to.be.a('string').that.is.equal('<div id="app391a"></div>');
      });
    });

    describe('Test PicoQ().before():', () => {
      const a = {
        aaa() {
          this.id = 'app3A1a';
          this.PicoQ = PicoQ;
          return this.PicoQ();
        },
      };

      it('Expects PicoQ("#zzz").before()[0] to return a null object.', () => {
        expect(PicoQ('#zzz').before()[0]).to.be.a('null');
      });

      it('Expects PicoQ("#app3A0 .before").before() to return an object with one child.', () => {
        const childs = PicoQ('#app3A0 .before').before().parent()[0].children;
        expect(childs.length).to.be.a('number').that.is.equal(1);
      });

      it('Expects PicoQ("#app3A0 .before").before("<p>Hi!</p>") to return an object with two childs.', () => {
        const childs = PicoQ('#app3A0 .before').before('<p>Hi!</p>').parent()[0].children;
        expect(childs.length).to.be.a('number').that.is.equal(2);
      });

      it('Expects the first child to be "<p>Hi!</p>".', () => {
        const childs = PicoQ('#app3A0')[0].children;
        expect(childs.item(0).outerHTML).to.be.a('string').that.is.equal('<p>Hi!</p>');
      });

      it('Expects the second child to be "<div class="before"></div>".', () => {
        const childs = PicoQ('#app3A0')[0].children;
        expect(childs.item(1).outerHTML).to.be.a('string').that.is.equal('<div class="before"></div>');
      });

      const obj = a.aaa();
      obj.before('<p>Hi!</p>');
      it('Expects this.PicoQ("app3A1a").before("<p>Hi!</p>") not to add this node.', () => {
        const childs = PicoQ('#app3A1')[0].children;
        expect(childs.length).to.be.a('number').that.is.equal(1);
        expect(childs.item(0).outerHTML).to.be.a('string').that.is.equal('<div id="app3A1a"></div>');
      });
    });


    describe('Test PicoQ().replaceWith():', () => {
      const a = {
        aaa() {
          this.id = 'app3B1a';
          this.PicoQ = PicoQ;
          return this.PicoQ();
        },
      };

      it('Expects PicoQ("#zzz").replaceWith()[0] to return a null object.', () => {
        expect(PicoQ('#zzz').replaceWith()[0]).to.be.a('null');
      });

      it('Expects PicoQ("#app3B0 .tobereplaced").replaceWith() to return an object with the original child.', () => {
        const childs = PicoQ('#app3B0 .tobereplaced').replaceWith().parent()[0].children;
        expect(childs.length).to.be.a('number').that.is.equal(1);
        expect(childs.item(0).outerHTML).to.be.a('string').that.is.equal('<p class="tobereplaced">unique</p>');
      });

      it('Expects PicoQ("#app3B0 .tobereplaced").replaceWith("<p>Hi!</p>") to return an object with the new child.', () => {
        const childs = PicoQ('#app3B0 .tobereplaced').replaceWith('<p>Hi!</p>').parent()[0].children;
        expect(childs.length).to.be.a('number').that.is.equal(1);
        expect(childs.item(0).outerHTML).to.be.a('string').that.is.equal('<p>Hi!</p>');
      });

      a.aaa();
      it('Expects this.PicoQ("#app3B1a").replaceWith("<p>Hi!</p>") not to replace the root node.', () => {
        const obj = a.aaa();
        obj.replaceWith('<p>Hi!</p>');
        const childs = PicoQ('#app3B1')[0].children;
        expect(childs.length).to.be.a('number').that.is.equal(1);
        expect(childs.item(0).outerHTML).to.be.a('string').that.is.equal('<div id="app3B1a">unique</div>');
      });
    });
  });
};
