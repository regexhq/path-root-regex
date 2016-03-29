'use strict';

require('mocha');
var assert = require('assert');
var regex = require('./');

function match(str) {
  var m = regex().exec(str);
  return m ? m[0] : null;
}

describe('path-root-regex', function() {
  it('should export a function', function() {
    assert.equal(typeof regex, 'function');
  });

  it('should return a regex when called', function() {
    assert(regex() instanceof RegExp);
  });

  it('should match the root of a filepath', function() {
    assert.equal(match('\\\\server\\share\\abc'), '\\\\server\\share\\');
    assert.equal(match('\\\\server foo\\some folder\\base-file.js'), '\\\\server foo\\some folder\\');
    assert.equal(match('\\\\?\\UNC\\server\\share'), '\\\\?\\UNC\\');
    assert.equal(match('foo/bar/baz.js'), '');
    assert.equal(match('c:\\foo\\bar\\baz.js'), 'c:\\');
    assert.equal(match('\\\\slslslsl\\admin$\\system32'), '\\\\slslslsl\\admin$\\');
    assert.equal(match('/foo/bar/baz.js'), '/');
  });
});
