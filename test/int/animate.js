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
  describe('Test animate functions:', () => {
    // Test animate() without any arguments:
    describe('Test PicoQ(selector).animate():', () => {
      it('Expects PicoQ(selector).animate() to return this.', () => {
        PicoQ('#app1000').animate();
        expect(PicoQ('#app1000').animate()).to.be.an('object');
      });
    });

    describe('Test PicoQ(selector).animate(properties):', () => {
      const o1 = PicoQ('#app1010').animate({ top: '100px' });

      // Duration default:
      it('Expects PicoQ("#app1010").animate({top: "100px"}) to return this.', () => {
        expect(o1).to.be.an('object');
      });
      it('Expects PicoQ()._probe to be {duration: 400, easing: "swing", callback: null }.', () => {
        expect(o1._probe.duration).to.be.a('number').that.is.equal(400);
        expect(o1._probe.easing).to.be.a('string').that.is.equal('swing');
        expect(o1._probe.callback).to.be.a('null');
      });

      // Duration number:
      const o2 = PicoQ('#app1010').animate({ top: '100px' }, 500);
      it('Expects PicoQ("#app1010").animate({top: "100px"}, 500) to return this.', () => {
        expect(o2).to.be.an('object');
      });
      it('Expects PicoQ()._probe to be {duration: 500, easing: "swing", callback: null }.', () => {
        expect(o2._probe.duration).to.be.a('number').that.is.equal(500);
        expect(o2._probe.easing).to.be.a('string').that.is.equal('swing');
        expect(o2._probe.callback).to.be.a('null');
      });

      // Duration slow:
      const o3 = PicoQ('#app1010').animate({ top: '100px' }, 'slow');
      it('Expects PicoQ("#app1010").animate({top: "100px"}, "slow") to return this.', () => {
        expect(o3).to.be.an('object');
      });
      it('Expects PicoQ()._probe to be {duration: 600, easing: "swing", callback: null }.', () => {
        expect(o3._probe.duration).to.be.a('number').that.is.equal(600);
        expect(o3._probe.easing).to.be.a('string').that.is.equal('swing');
        expect(o3._probe.callback).to.be.a('null');
      });

      // Duration fast:
      const o4 = PicoQ('#app1010').animate({ top: '100px' }, 'fast');
      it('Expects PicoQ("#app1010").animate({top: "100px"}, "fast") to return this.', () => {
        expect(o4).to.be.an('object');
      });
      it('Expects PicoQ()._probe to be {duration: 200, easing: "swing", callback: null }.', () => {
        expect(o4._probe.duration).to.be.a('number').that.is.equal(200);
        expect(o4._probe.easing).to.be.a('string').that.is.equal('swing');
        expect(o4._probe.callback).to.be.a('null');
      });

      // with easing
      const o5 = PicoQ('#app1010').animate({ top: '100px' }, 'swing');
      it('Expects PicoQ("#app1010").animate({top: "100px"}, "swing") to return this.', () => {
        expect(o5).to.be.an('object');
      });
      it('Expects PicoQ()._probe to be {duration: 400, easing: "swing", callback: null }.', () => {
        expect(o5._probe.duration).to.be.a('number').that.is.equal(400);
        expect(o5._probe.easing).to.be.a('string').that.is.equal('swing');
        expect(o5._probe.callback).to.be.a('null');
      });

      // with callback
      const o6 = PicoQ('#app1010').animate({ top: '100px' }, () => {});
      it('Expects PicoQ("#app1010").animate({top: "100px"}, function() {}) to return this.', () => {
        expect(o6).to.be.an('object');
      });
      it('Expects PicoQ()._probe to be {duration: 400, easing: "swing", callback: "Function" }.', () => {
        expect(o6._probe.duration).to.be.a('number').that.is.equal(400);
        expect(o6._probe.easing).to.be.a('string').that.is.equal('swing');
        expect(o6._probe.callback).to.be.a('function');
      });

      // duration, easing
      const o7 = PicoQ('#app1010').animate({ top: '100px' }, 500, 'swing');
      it('Expects PicoQ("#app1010").animate({top: "100px"}, 500, "swing") to return this.', () => {
        expect(o7).to.be.an('object');
      });
      it('Expects PicoQ()._probe to be {duration: 500, easing: "swing", callback: null }.', () => {
        expect(o7._probe.duration).to.be.a('number').that.is.equal(500);
        expect(o7._probe.easing).to.be.a('string').that.is.equal('swing');
        expect(o7._probe.callback).to.be.a('null');
      });

      // duration, callback
      const o8 = PicoQ('#app1010').animate({ top: '100px' }, 500, () => {});
      it('Expects PicoQ("#app1010").animate({top: "100px"}, 500, function() {}) to return this.', () => {
        expect(o8).to.be.an('object');
      });
      it('Expects PicoQ()._probe to be {duration: 500, easing: "swing", callback: "function" }.', () => {
        expect(o8._probe.duration).to.be.a('number').that.is.equal(500);
        expect(o8._probe.easing).to.be.a('string').that.is.equal('swing');
        expect(o8._probe.callback).to.be.a('function');
      });

      // easing, callback
      const o9 = PicoQ('#app1010').animate({ top: '100px' }, 'swing', () => {});
      it('Expects PicoQ("#app1010").animate({top: "100px"}, "swing", function() {}) to return this.', () => {
        expect(o9).to.be.an('object');
      });
      it('Expects PicoQ()._probe to be {duration: 400, easing: "swing", callback: "function" }.', () => {
        expect(o9._probe.duration).to.be.a('number').that.is.equal(400);
        expect(o9._probe.easing).to.be.a('string').that.is.equal('swing');
        expect(o9._probe.callback).to.be.a('function');
      });

      // duration, easing, callback
      const o10 = PicoQ('#app1010').animate({ top: '100px' }, 500, 'swing', () => {});
      it('Expects PicoQ("#app1010").animate({top: "100px"}, 500, "swing", function() {}) to return this.', () => {
        expect(o10).to.be.an('object');
      });
      it('Expects PicoQ()._probe to be {duration: 500, easing: "swing", callback: "function" }.', () => {
        expect(o10._probe.duration).to.be.a('number').that.is.equal(500);
        expect(o10._probe.easing).to.be.a('string').that.is.equal('swing');
        expect(o10._probe.callback).to.be.a('function');
      });

      // duration, easing, callback
      const o11 = PicoQ('#app1010').animate({ top: '100px' }, 'fast', 'swing', () => {});
      it('Expects PicoQ("#app1010").animate({top: "100px"}, "fast", "swing", function() {}) to return this.', () => {
        expect(o11).to.be.an('object');
      });
      it('Expects PicoQ()._probe to be {duration: 200, easing: "swing", callback: "function" }.', () => {
        expect(o11._probe.duration).to.be.a('number').that.is.equal(200);
        expect(o11._probe.easing).to.be.a('string').that.is.equal('swing');
        expect(o11._probe.callback).to.be.a('function');
      });

      // duration, easing, callback
      const o12 = PicoQ('#app1010').animate({ top: '100px' }, 'slow', 'swing', () => {});
      it('Expects PicoQ("#app1010").animate({top: "100px"}, "slow", "swing", function() {}) to return this.', () => {
        expect(o12).to.be.an('object');
      });
      it('Expects PicoQ()._probe to be {duration: 500, easing: "swing", callback: "function" }.', () => {
        expect(o12._probe.duration).to.be.a('number').that.is.equal(600);
        expect(o12._probe.easing).to.be.a('string').that.is.equal('swing');
        expect(o12._probe.callback).to.be.a('function');
      });

      // Test animate
      it('Expects PicoQ("#app1020").animate({ top: "100px" }) to set top to 100px.', (done) => {
        const o20 = PicoQ('#app1020').animate({ top: '100px' }, () => {
          expect(o20[0].style.top).to.be.a('string').that.is.equal('100px');
          done();
        });
      });

      // Test animate
      it('Expects PicoQ("#app1030").animate({ top: "100px" }) to set top to 100px.', (done) => {
        const o21 = PicoQ('#app1030').animate({ top: '100px' }, () => {
          expect(o21[0].style.top).to.be.a('string').that.is.equal('100px');
          done();
        });
      });
    });
  });
};
