'use strict';

//====================================================================

var isWritableStream = require('./');

//--------------------------------------------------------------------

var Duplex = require('stream').Duplex;
var Readable = require('stream').Readable;
var Writable = require('stream').Writable;

var Duplex3 = require('readable-stream').Duplex;
var Readable3 = require('readable-stream').Readable;
var Writable3 = require('readable-stream').Writable;

var expect = require('chai').expect;
var withData = require('leche').withData;

//====================================================================

withData({
  'writable stream': [new Writable()],
  'writable stream 3': [new Writable3()],
  'duplex stream': new Duplex(),
  'duplex stream 3': new Duplex3(),
  'stdout': process.stdout,
}, function (value) {
  it('should return true', function () {
    expect(isWritableStream(value)).to.be.true;
  });
});


withData({
  undefined: [undefined],
  null: [null],
  0: [0],
  1: [1],
  '3.14': [3.14],
  false: [false],
  true: [true],
  'empty string': [''],
  'non empty string': ['non empty'],
  array: [[]],
  object: [{}],
  function: [function () {}],
  'readable stream': new Readable(),
  'readable stream 3': new Readable3(),
  'stdin': process.stdin,
}, function (value) {
  it('should return false', function () {
    expect(isWritableStream(value)).to.be.false;
  });
});
