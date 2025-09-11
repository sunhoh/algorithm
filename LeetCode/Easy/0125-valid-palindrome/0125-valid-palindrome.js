/**
 * @param {string} s
 * @return {boolean}
 */

var isPalindrome = function (s) {
  const char = s.toLowerCase().replace(/[^a-z0-9]/g, "");

  let left = 0,
    right = char.length - 1;
  for (let i = 0; i < char.length; i++) {
    if (char[left] !== char[right]) return false;
    left++;
    right--;
  }
  return true;
};