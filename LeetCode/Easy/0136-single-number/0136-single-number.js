/**
 * @param {number[]} nums
 * @return {number}
 */
const singleNumber = function (nums) {
  const hash = {};
  for (const key of nums) {
    hash[key] = (hash[key] ?? 0) + 1;
  }
  let result = "";
  for (const key in hash) {
    if (hash[key] === 1) {
      result += key;
    }
  }
  return Number(result);
};