/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let start = 0;
  let end = nums.length - 1;

  while (end >= start) {
    let idx = Math.floor((end + start) / 2);
    if (nums[idx] === target) return idx;
    if (nums[idx] > target) {
      end = idx - 1;
    } else {
      start = idx + 1;
    }
  }
  return -1;
};
