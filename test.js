var expect = require('chai').expect;

var circulate = require('./index');

describe('circulate()', function() {
  describe('basic', function() {
    it('should not change number if it is equal to start', function() {
      expect(circulate(0, 0, 360)).to.equal(0);
    });

    it('should not change number if it is within range', function() {
      expect(circulate(180, 0, 360)).to.equal(180);
    });

    it('should change number into start if it is equal to end', function() {
      expect(circulate(360, 0, 360)).to.equal(0);
    });

    it('should circulate number into range if it is out of range (positive)', function() {
      expect(circulate(450, 0, 360)).to.equal(90);
    });

    it('should circulate number into range if it is out of range (negative)', function() {
      expect(circulate(-90, 0, 360)).to.equal(270);
    });

    it('should circulate number into range if it is out of range (far negative)', function() {
      expect(circulate(-3690, 0, 360)).to.equal(270);
    });
  });

  describe('negative start', function() {
    it('should not change number if it is equal to start (negative start)', function() {
      expect(circulate(-180, -180, 180)).to.equal(-180);
    });

    it('should not change number if it is within range (negative start)', function() {
      expect(circulate(0, -180, 180)).to.equal(0);
    });

    it('should change number into start if it is equal to end (negative start)', function() {
      expect(circulate(180, -180, 180)).to.equal(-180);
    });

    it('should circulate number into range if it is out of range (positive number, negative start)', function() {
      expect(circulate(450, -180, 180)).to.equal(90);
    });

    it('should circulate number into range if it is out of range (negative number, negative start)', function() {
      expect(circulate(-270, -180, 180)).to.equal(90);
    });
  });

  describe('exceptions', function() {
    it('should always return the same number if start equals to end (zero)', function() {
      expect(circulate(0, 0, 0)).to.equal(0);
    });

    it('should always return the same number if start equals to end (positive)', function() {
      expect(circulate(0, 100, 100)).to.equal(100);
    });

    it('should always return the same number if start equals to end (negative)', function() {
      expect(circulate(0, -100, -100)).to.equal(-100);
    });

    it('should swap start for end if start is greater than end', function() {
      expect(circulate(0, 360, 0)).to.equal(0);
      expect(circulate(180, 360, 0)).to.equal(180);
      expect(circulate(360, 360, 0)).to.equal(0);
      expect(circulate(450, 360, 0)).to.equal(90);
      expect(circulate(-90, 360, 0)).to.equal(270);
      expect(circulate(-3690, 360, 0)).to.equal(270);
    });
  });
});
