/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let index = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1]) {
      nums[index] = nums[i];
      index++;
    }
  }
  return index;
};

// function removeDuplicates(nums) {
//   let unique = [nums[0]];

//   for (let i = 1; i < nums.length; i++) {
//     if (nums[i] !== nums[i - 1]) {
//       unique.push(nums[i]);
//     }
//   }

//   nums.splice(0, nums.length, ...unique);
//   return unique.length;
// }
