/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// var search = function (nums, target) {
//   let start = 0;
//   let end = nums.length - 1;

//   while (end >= start) {
//     let idx = Math.floor((end + start) / 2);
//     if (nums[idx] === target) return idx;
//     if (nums[idx] > target) {
//       end = idx - 1;
//     } else {
//       start = idx + 1;
//     }
//   }
//   return -1;
// };

var search = function (nums, target) {
  return binarySearch(nums, target);
};

var binarySearch = (nums, target, start = 0, end = nums.length - 1) => {
  if (start > end) return -1;
  const idx = Math.floor((start + end) / 2);
  if (nums[idx] === target) return idx;
  if (nums[idx] > target) {
    end = idx - 1;
    return binarySearch(nums, target, start, end);
  } else {
    start = idx + 1;
    return binarySearch(nums, target, start, end);
  }
};
