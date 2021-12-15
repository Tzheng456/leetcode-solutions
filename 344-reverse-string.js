/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  const stringArray = s.split(' ');
  const reversedStrings = stringArray.map((s) => {
    let reversed = s.split('');
    let i = 0;
    let j = reversed.length - 1;

    while (i < j) {
      let tmp = reversed[i];
      reversed[i++] = reversed[j];
      reversed[j--] = tmp;
    }
    return reversed.join('');
  });

  return reversedStrings.join(' ');
};
