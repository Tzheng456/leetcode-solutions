/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let replaceIdx = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      const tmp = nums[replaceIdx];
      nums[replaceIdx] = nums[i];
      nums[i] = tmp;
      replaceIdx++;
    }
  }
};
