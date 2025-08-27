/**
 * @param {string[]} strs
 * @return {string}
 */

// 수평 스캐닝
var longestCommonPrefix = function (strs) {
  if (!strs.length) return "";

  let prefix = strs[0];

  for (let i = 1; i < strs.length; i++) {
    while (strs[i].indexOf(prefix) !== 0) {
      prefix = prefix.slice(0, -1);
      if (prefix === "") return "";
    }
  }

  return prefix;
};

// 수직 스캐닝
// var longestCommonPrefix = function (strs) {
//   let output = "";
//   for (let i = 0; i < strs[0].length; i++) {
//     if (strs.every((str) => str[i] === strs[0][i])) output += strs[0][i];
//     else break;
//   }
//   return output;
// };
