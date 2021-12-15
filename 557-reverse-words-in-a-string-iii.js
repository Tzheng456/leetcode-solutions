/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  const stringArray = s.split(' ');
  console.log(stringArray);
  for (const s of stringArray) {
    let i = 0;
    let j = s.length - 1;

    while (i < j) {
      let tmp = s[i];
      s[i++] = s[j];
      s[j--] = tmp;
    }
    console.log(s);
  }

  return stringArray.join(' ');
};
