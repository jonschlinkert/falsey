/*!
 * falsey <https://github.com/jonschlinkert/falsey>
 *
 * Copyright (c) 2014-2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */

'use strict';

var assert = require('assert');
var isFalsey = require('./');


describe('falsey', function () {
  it('should return false.', function () {
    assert(isFalsey(undefined));
    assert(isFalsey(null));
    assert(isFalsey(false));
    assert(!isFalsey(true));
    assert(isFalsey(0));
    assert(!isFalsey(1));
    assert(isFalsey(''));
    assert(isFalsey('0'));
    assert(!isFalsey('1'));
    assert(isFalsey(NaN));
    assert(isFalsey({}));
    assert(!isFalsey({a: 'b'}));
    assert(isFalsey([]));
    assert(!isFalsey([0]));

    // arguments
    (function(){
      assert(isFalsey(arguments));
    }());
    (function(one){
      assert(!isFalsey(arguments));
    }(0));

    (function(){
      var args = [].slice.call(arguments);
      assert(isFalsey(args));
    }());
    (function(one){
      var args = [].slice.call(arguments);
      assert(!isFalsey(args));
    }(0));

    assert(!isFalsey('true'));
    // custom values
    assert(isFalsey('nil'));
    assert(!isFalsey('nil', []));
    assert(isFalsey('none'));
    assert(!isFalsey('none', []));
  });
});
