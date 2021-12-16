/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let start = 0;
  let end = 0;
  let maxWindow = 0;
  let lastCharLoc = {};
  let copy = [...s];
  while (end < copy.length) {
    if (!(copy[end] in lastCharLoc)) {
      lastCharLoc[copy[end]] = end;
    } else {
      const currWindow = end - start;
      if (currWindow > maxWindow) maxWindow = currWindow;

      const currentEnd = lastCharLoc[copy[end]];
      // for (let i = start; i < lastCharLoc[copy[end]] + 1; i++) {
      //   delete lastCharLoc[copy[i]];
      // }
      start = Math.max(start, currentEnd + 1);
      lastCharLoc[copy[end]] = end;
    }
    end++;
  }
  const endWindow = end - start;
  if (endWindow > maxWindow) maxWindow = endWindow;

  return maxWindow;
};

//"abcde"
