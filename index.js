/*!
 * path-root-regex <https://github.com/jonschlinkert/path-root-regex>
 *
 * Copyright (c) 2016, Jon Schlinkert.
 * Licensed under the MIT License.
 */

'use strict';

module.exports = function() {
  return /^([a-zA-Z]:|[\\\/]{2}[^\\\/]+[\\\/]+[^\\\/]+)?([\\\/])?/;
};
