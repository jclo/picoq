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
  describe('Test PicoQ() select methods:', () => {
    describe('Test PicoQ():', () => {
      const obj = PicoQ();
      it('Expects PicoQ() to return an object.', () => {
        expect(obj).to.be.an('object');
      });

      it('Expects this object to own the property "_root" that is undefined.', () => {
        expect(obj).to.own.property('_root').that.is.equal(undefined);
      });

      it('Expects this object to own the property "id" that is an empty string.', () => {
        expect(obj).to.own.property('id').that.is.a('string').that.has.lengthOf(0);
      });

      it('Expects this object to own the property "0".', () => {
        expect(obj).to.own.property('0');
      });

      const obj2 = PicoQ('#zzz');
      it('Expects PicoQ("#zzz") to return an object.', () => {
        expect(obj2).to.be.an('object');
      });

      it('Expects this object to own the property "_root" that is undefined.', () => {
        expect(obj2).to.own.property('_root').that.is.equal(undefined);
      });

      it('Expects this object to own the property "id" that is a null.', () => {
        expect(obj2).to.own.property('id').that.is.a('null');
      });

      it('Expects this object to own the property "0" that is a null.', () => {
        expect(obj2).to.own.property('0').that.is.a('null');
      });

      const a = {
        aaa() {
          this.id = 'app200';
          this.PicoQ = PicoQ;
          return this.PicoQ();
        },
      };
      const obj3 = a.aaa();
      it('Expects this.PicoQ() to return an object.', () => {
        expect(obj3).to.be.an('object');
      });

      it('Expects this object to own the property "_root".', () => {
        expect(obj3).to.own.property('_root');
      });

      it('Expects this object to own the property "id" that is equal "app200".', () => {
        expect(obj3).to.own.property('id').that.is.equal('app200');
      });

      it('Expects this object to own the property "0".', () => {
        expect(obj3).to.own.property('0');
      });

      it('Expects "0" to own the property "id" that is equal "app200".', () => {
        expect(obj3[0].id).to.be.a('string').that.is.equal('app200');
      });
    });

    describe('Test PicoQ().select():', () => {
      const a = {
        aaa() {
          this.id = 'app200';
          this.PicoQ = PicoQ;
          return this.PicoQ();
        },
      };
      const obj = a.aaa();

      it('Expects this.PicoQ().select() does nothing.', () => {
        const o = obj.select()[0];
        expect(o.classList.value).to.be.a('string').that.is.equal('Parent');
      });

      it('Expects this.PicoQ().select("zzz") does nothing.', () => {
        const o = obj.select('zzz')[0];
        expect(o.classList.value).to.be.a('string').that.is.equal('Parent');
      });

      it('Expects this.PicoQ().select(".FirstChild") selects the first child.', () => {
        const o = obj.select('.FirstChild')[0];
        expect(o.classList.value).to.be.a('string').that.is.equal('FirstChild');
      });
    });

    describe('Test PicoQ().selectChild(n):', () => {
      const a = {
        aaa() {
          this.id = 'app200';
          this.PicoQ = PicoQ;
          return this.PicoQ();
        },
      };
      const obj = a.aaa();

      it('Expects this.PicoQ().selectChild() does nothing.', () => {
        const o = obj.selectChild()[0];
        expect(o.classList.value).to.be.a('string').that.is.equal('Parent');
      });

      it('Expects this.PicoQ().selectChild(100) does nothing.', () => {
        const o = obj.selectChild(100)[0];
        expect(o.classList.value).to.be.a('string').that.is.equal('Parent');
      });

      it('Expects this.PicoQ().selectChild(1) selects the second child.', () => {
        const o = obj.selectChild(1)[0];
        expect(o.classList.value).to.be.a('string').that.is.equal('SecondChild');
      });
    });

    describe('Test PicoQ().parent():', () => {
      const a = {
        aaa() {
          this.id = 'app200';
          this.PicoQ = PicoQ;
          return this.PicoQ();
        },
      };
      const obj = a.aaa();

      it('Expects this.PicoQ().parent() does nothing.', () => {
        const o = obj.parent()[0];
        expect(o.classList.value).to.be.a('string').that.is.equal('Parent');
      });

      it('Expects this.PicoQ().selectChild(1).parent() goes back to parent.', () => {
        const o = obj.selectChild(1).parent()[0];
        expect(o.classList.value).to.be.a('string').that.is.equal('Parent');
      });

      it('Expects PicoQ("#app200").selectChild(1).parent() goes back to parent.', () => {
        const o = PicoQ('#app200').selectChild(1).parent()[0];
        expect(o.classList.value).to.be.a('string').that.is.equal('Parent');
      });
    });

    describe('Test PicoQ().firstParent():', () => {
      const a = {
        aaa() {
          this.id = 'app200';
          this.PicoQ = PicoQ;
          return this.PicoQ();
        },
      };
      const obj = a.aaa();

      it('Expects this.PicoQ().firstParent() does nothing.', () => {
        const o = obj.firstParent()[0];
        expect(o.classList.value).to.be.a('string').that.is.equal('Parent');
      });

      it('Expects this.PicoQ().selectChild(1).firstParent() goes back to parent.', () => {
        const o = obj.selectChild(1).firstParent()[0];
        expect(o.classList.value).to.be.a('string').that.is.equal('Parent');
      });

      it('Expects PicoQ("#app200").selectChild(1).firstParent() goes not back to root parent.', () => {
        const o = PicoQ('#app200').selectChild(1).firstParent()[0];
        expect(o.classList.value).to.be.a('string').that.is.equal('SecondChild');
      });
    });

    describe('Test PicoQ().find():', () => {
      const nl = PicoQ('#app201').find('.aaa');
      it('Expects PicoQ("#app201").find(".aaa") to return a NodeList.', () => {
        expect(nl).to.be.a('NodeList');
      });

      it('Expects this NodeList to own three nodes.', () => {
        expect(nl.length).to.be.a('number').that.is.equal(3);
      });

      it('Expects the contents of the first node to be equal to "1".', () => {
        expect(nl.item(0).innerHTML).to.be.a('string').that.is.equal('1');
      });

      it('Expects the contents of the second node to be equal to "2".', () => {
        expect(nl.item(1).innerHTML).to.be.a('string').that.is.equal('2');
      });

      it('Expects the contents of the third node to be equal to "3".', () => {
        expect(nl.item(2).innerHTML).to.be.a('string').that.is.equal('3');
      });
    });

    describe('Test PicoQ().tag():', () => {
      it('Expects PicoQ("zzz").tag() to return null.', () => {
        expect(PicoQ('zzz').tag()).to.be.a('null');
      });

      it('Expects PicoQ("#app200").tag() to return "DIV".', () => {
        expect(PicoQ('#app200').tag()).to.be.a('string').that.is.equal('DIV');
      });
    });
  });
};
