/**
 * @param {string} s
 * @return {string}
 */
// var reverseWords = function (s) {
//   const stringArray = s.split(' ');
//   console.log(stringArray);
//   for (const s of stringArray) {
//     let i = 0;
//     let j = s.length - 1;

//     while (i < j) {
//       let tmp = s[i];
//       s[i++] = s[j];
//       s[j--] = tmp;
//     }
//     console.log(s);
//   }

//   return stringArray.join(' ');
// };

var reverseWords = function (s) {
  let reversedString = [...s];
  let count = 0;
  let start = 0;
  let end = 0;

  for (let i = 0; i <= s.length; i++) {
    if (i === s.length) {
      while (start <= end - 1) {
        reversedString[count++] = s.charAt(end - 1);
        end--;
      }
    }
    if (s.charAt(i) !== ' ') {
      end++;
    } else {
      while (start <= end - 1) {
        reversedString[count++] = s.charAt(end - 1);
        end--;
      }
      reversedString[count++] = s.charAt(i);
      start = i + 1;
      end = i + 1;
    }
  }
  return reversedString.join('');
};

('abc def');
