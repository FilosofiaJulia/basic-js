const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  var result = str.replace(/(.)\1*/g, (group, chr) => 
    group.length === 1 ? `${chr}` : `${group.length}${chr}`);

     return result;
  // remove line with error and write your code here
}

module.exports = {
  encodeLine
};
