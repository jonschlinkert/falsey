/*!
 * falsey <https://github.com/jonschlinkert/falsey>
 *
 * Copyright (c) 2014-2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */

'use strict';

require('mocha');
var assert = require('assert');
var isFalsey = require('./');

describe('falsey', function() {
  it('should return false when truthy', function() {
    assert(!isFalsey('1'));
    assert(!isFalsey(1));
    assert(!isFalsey([0]));
    assert(!isFalsey(true));
    assert(!isFalsey('true'));
    assert(!isFalsey({a: 'b'}));

    // arguments
    (function(one){
      assert(!isFalsey(arguments));
    }(0));

    (function(one){
      var args = [].slice.call(arguments);
      assert(!isFalsey(args));
    }(0));
  });

  it('should return true when falsey', function() {
    assert(isFalsey(''));
    assert(isFalsey('0'));
    assert(isFalsey(0));
    assert(isFalsey(false));
    assert(isFalsey(NaN));
    assert(isFalsey(null));
    assert(isFalsey(undefined));
    assert(isFalsey([]));
    assert(isFalsey({}));

    // arguments
    (function(){
      assert(isFalsey(arguments));
    }());
    (function(){
      var args = [].slice.call(arguments);
      assert(isFalsey(args));
    }());
  });

  it('should return "falsey" for `nil`', function() {
    assert(isFalsey('nil'));
  });

  it('should return "falsey" for `none`', function() {
    assert(isFalsey('none'));
  });

  it('should return "falsey" for `nope`', function() {
    assert(isFalsey('nope'));
  });

  it('should return "falsey" for `no`', function() {
    assert(isFalsey('no'));
  });

  it('should return "falsey" for `nada`', function() {
    assert(isFalsey('nada'));
  });

  it('should support custom "falsey" values', function() {
    assert(!isFalsey('nil', []));
    assert(!isFalsey('none', []));
    assert(isFalsey('foo', ['foo', 'bar', 'baz']));
    assert(isFalsey('bar', ['foo', 'bar', 'baz']));
    assert(isFalsey('baz', ['foo', 'bar', 'baz']));
    assert(!isFalsey('fez', ['foo', 'bar', 'baz']));
  });
});
