/*!
 * falsey <https://github.com/jonschlinkert/falsey>
 *
 * Copyright (c) 2014-2018, Jon Schlinkert.
 * Licensed under the MIT License.
 */

'use strict';

require('mocha');
const assert = require('assert');
const falsey = require('./');

describe('falsey', function() {
  it('should return false when truthy', function() {
    assert(!falsey('1'));
    assert(!falsey(1));
    assert(!falsey([0]));
    assert(!falsey(true));
    assert(!falsey('true'));
    assert(!falsey({a: 'b'}));
  });

  it('should return true when falsey', function() {
    assert(falsey(''));
    assert(falsey('0'));
    assert(falsey(0));
    assert(falsey(false));
    assert(falsey(NaN));
    assert(falsey(null));
    assert(falsey(undefined));
  });

  it('should return "falsey" for `nil`', function() {
    assert(falsey('nil'));
    assert(falsey('NIL'));
  });

  it('should return "falsey" for `none`', function() {
    assert(falsey('none'));
    assert(falsey('None'));
  });

  it('should return "falsey" for `nope`', function() {
    assert(falsey('nope'));
    assert(falsey('nOPe'));
  });

  it('should return "falsey" for `no`', function() {
    assert(falsey('no'));
    assert(falsey('NO'));
  });

  it('should return "falsey" for `nada`', function() {
    assert(falsey('nada'));
    assert(falsey('Nada'));
  });

  it('should support custom "falsey" values', function() {
    assert(!falsey('nil', []));
    assert(!falsey('none', []));
    assert(falsey('foo', ['foo', 'bar', 'baz']));
    assert(falsey('bar', ['foo', 'bar', 'baz']));
    assert(falsey('baz', ['foo', 'bar', 'baz']));
    assert(!falsey('fez', ['foo', 'bar', 'baz']));
  });
});
