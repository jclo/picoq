// ESLint declarations:
/* global describe, it */
/* eslint  one-var: 0, semi-style: 0, no-underscore-dangle: 0,
  no-unused-expressions: 0 */


// -- Vendor Modules
const { expect } = require('chai')
    ;

// -- Local Modules


// -- Local Constants


// -- Local Variables

// function _dump(elem) {
//   const s = new XMLSerializer();
//   const str = s.serializeToString(elem);
//   console.log(str);
// }

// -- Main
module.exports = function(PicoQ) {
  describe('Test DOM insertion (next):', () => {
    describe('Test PicoQ().diff():', () => {
      const [Diff] = PicoQ._setTestMode();

      const template = `
            <div>
              <h1>My Todos</h1>
            </div>
          `;

      const template2 = `
            <div>
              <h2>My Todos</h2>
            </div>
          `;

      const template3 = `
            <div>
              <h2>My Todosss</h2>
            </div>
          `;

      const template4 = `
            <div>
              <h2 class="aaa">My Todos</h2>
            </div>
          `;

      const template5 = `
            <div>
              <h2 class="bbb">My Todos</h2>
            </div>
          `;

      const template6 = `
            <div>
              <h2>My Todos</h2>
              <ul>
                <li>Swim</li>
                <li>Climb</li>
                <li>Jump</li>
                <li>Play</li>
                <li>Take a nap...</li>
              </ul>
            </div>
          `;

      const template7 = `
            <div>
              <h2>My Todos</h2>
              <ul></ul>
            </div>
          `;

      it('Expects "const [Diff] = PiciQ._setTestMode();" to return an object.', () => {
        expect(Diff).to.be.an('object');
      });

      it('Expects Diff to own 2 properties.', () => {
        expect(Object.getOwnPropertyNames(Diff)).to.be.an('array').that.has.lengthOf(2);
      });

      it('Expects Diff to own the property "stringToHTML" that is a function.', () => {
        expect(Diff.stringToHTML).to.be.a('function');
      });

      it('Expects Diff to own the property "diff" that is a function.', () => {
        expect(Diff.diff).to.be.a('function');
      });

      it('Expects Diff.stringToHTML("<div><div>") to return an HTMLDivElement.', () => {
        expect(Diff.stringToHTML('<div><div>')).to.be.an('HTMLDivElement');
      });

      it('Expects "diff(template, dom)" to add the child "<h1>My Todos</h1>".', () => {
        const el = document.getElementById('app0DD1');
        Diff.diff(Diff.stringToHTML(template), el);
        expect(el.firstChild.outerHTML).to.be.a('string').that.is.equal('<h1>My Todos</h1>');
      });

      it('Expects "diff(template2, dom)" to replace the child "<h1>My Todos</h1>" by "<h2>My Todos</h2>".', () => {
        const el = document.getElementById('app0DD1');
        Diff.diff(Diff.stringToHTML(template2), el);
        expect(el.firstChild.outerHTML).to.be.a('string').that.is.equal('<h2>My Todos</h2>');
      });

      it('Expects "diff(template3, dom)" to replace the child "<h2>My Todos</h2>" by "<h2>My Todosss</h2>".', () => {
        const el = document.getElementById('app0DD1');
        Diff.diff(Diff.stringToHTML(template3), el);
        expect(el.firstChild.outerHTML).to.be.a('string').that.is.equal('<h2>My Todosss</h2>');
      });

      it('Expects "diff(template4, dom)" to replace the child "<h2>My Todos</h2>" by "<h2 class="aaa">My Todos</h2>".', () => {
        const el = document.getElementById('app0DD1');
        Diff.diff(Diff.stringToHTML(template4), el);
        expect(el.firstChild.outerHTML).to.be.a('string').that.is.equal('<h2 class="aaa">My Todos</h2>');
      });

      it('Expects "diff(template4, dom)" to replace the child "<h2 class="aaa">My Todos</h2>" by "<h2 class="bbb">My Todos</h2>".', () => {
        const el = document.getElementById('app0DD1');
        Diff.diff(Diff.stringToHTML(template5), el);
        expect(el.firstChild.outerHTML).to.be.a('string').that.is.equal('<h2 class="bbb">My Todos</h2>');
      });

      it('Expects "diff(template4, dom)" to keep the child "<h2 class="bbb">My Todos</h2>" unchanged.', () => {
        const el = document.getElementById('app0DD1');
        Diff.diff(Diff.stringToHTML(template5), el);
        expect(el.firstChild.outerHTML).to.be.a('string').that.is.equal('<h2 class="bbb">My Todos</h2>');
      });

      it('Expects "diff(template2, dom)" to replace the child "<h2 class="aaa">My Todos</h2>" by "<h2>My Todos</h2>".', () => {
        const el = document.getElementById('app0DD1');
        Diff.diff(Diff.stringToHTML(template2), el);
        expect(el.firstChild.outerHTML).to.be.a('string').that.is.equal('<h2>My Todos</h2>');
      });

      it('Expects "diff(template2, dom)" to replace the child "<h2 class="aaa">My Todos</h2>" by "<h2>My Todos</h2>".', () => {
        const el = document.getElementById('app0DD1');
        Diff.diff(Diff.stringToHTML(template2), el);
        expect(el.firstChild.outerHTML).to.be.a('string').that.is.equal('<h2>My Todos</h2>');
      });

      it('Expects "diff(template, dom2)" to remove the extra childs.', () => {
        const el = document.getElementById('app0DD2');
        Diff.diff(Diff.stringToHTML(template), el);
        expect(el.children.length).to.be.a('number').that.is.equal(1);
      });

      it('Expects "diff(template6, dom3)" to include 2 childs.', () => {
        const el = document.getElementById('app0DD3');
        Diff.diff(Diff.stringToHTML(template6), el);
        expect(el.children.length).to.be.a('number').that.is.equal(2);
      });

      it('Expects the second child to be an "<ul>" tag.', () => {
        const el = document.getElementById('app0DD3');
        expect(el.children.item(1).tagName).to.be.a('string').that.is.equal('UL');
      });

      it('Expects a new "diff(template6, dom3)" to change nothing.', () => {
        const el = document.getElementById('app0DD3');
        Diff.diff(Diff.stringToHTML(template6), el);
        expect(el.children.length).to.be.a('number').that.is.equal(2);
      });

      it('Expects "diff(template7, dom4)" to remove "ul" childs.', () => {
        const el = document.getElementById('app0DD4');
        Diff.diff(Diff.stringToHTML(template7), el);
        expect(el.children.length).to.be.a('number').that.is.equal(2);
      });

      it('Expects "diff(template6, dom5)" to fill "ul" childs using "fragment".', () => {
        const el = document.getElementById('app0DD5');
        Diff.diff(Diff.stringToHTML(template6), el);
        expect(el.children.length).to.be.a('number').that.is.equal(2);
      });
    });
  });
};
