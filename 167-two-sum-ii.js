/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
  let start = 0;
  let end = numbers.length - 1;
  
  while (end > start) {
    const currentSum = numbers[end] + numbers[start];
    if (currentSum === target) return [start + 1, end + 1];
    if (currentSum > target){
      end--;
    } else {
      start++;
    }
  }
};