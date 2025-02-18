/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  let arr = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      arr.push(nums[i]);
    }
  }

  nums.splice(0, nums.length, ...arr.sort());

  return arr.length;
};