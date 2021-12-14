/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (n) {
    let start = 1;
    let end = n;
    while (end > start) {
      let version = Math.ceil((start + end) / 2);
      if (isBadVersion(version) && !isBadVersion(version - 1)) return version;
      if (isBadVersion(version - 1)) end = version - 1;
      if (!isBadVersion(version)) start = version + 1;
    }
  };
};
