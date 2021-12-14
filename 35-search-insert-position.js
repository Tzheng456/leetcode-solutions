/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let start = 0;
  let end = nums.length - 1;
  let idx;
  while (end >= start) {
    idx = Math.floor((start + end) / 2);
    if (nums[idx] === target) return idx;
    if (nums[idx] > target) {
      end = idx - 1;
    } else {
      start = idx + 1;
    }
  }
  return start;
};
