var sortedSquares = function (nums) {
  let start = 0;
  let end = nums.length - 1;
  let positiveIdx, negativeIdx;
  let foundZero = false;

  while (end >= start) {
    const idx = Math.floor((start + end) / 2);
    if (nums[idx] === 0) {
      foundZero = true;
      positiveIdx = idx;
      break;
    }
    if (nums[idx] > 0) {
      end = idx - 1;
    } else {
      start = idx + 1;
    }
  }

  if (!foundZero) positiveIdx = start;
  negativeIdx = positiveIdx - 1;
  const sorted = [];

  while (negativeIdx >= 0 && positiveIdx <= nums.length - 1) {
    const positiveIdxNum = Math.abs(nums[positiveIdx]);
    const negativeIdxNum = Math.abs(nums[negativeIdx]);
    if (positiveIdxNum < negativeIdxNum) {
      sorted.push(Math.pow(positiveIdxNum, 2));
      positiveIdx++;
    } else {
      sorted.push(Math.pow(negativeIdxNum, 2));
      negativeIdx--;
    }
  }
  while (positiveIdx <= nums.length - 1) {
    sorted.push(Math.pow(nums[positiveIdx], 2));
    positiveIdx++;
  }
  while (negativeIdx >= 0) {
    sorted.push(Math.pow(nums[negativeIdx], 2));
    negativeIdx--;
  }
  return sorted;
};
