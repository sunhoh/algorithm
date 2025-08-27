/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    // for (i = 0; i < nums.length; i++) {
    //     for (j = 1; j < nums.length; j++) {
    //     if (nums[i] + nums[j] === target) return [i, j];
    //     }
    // }
    const obj = {};
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        if (target - num in obj) {
        return [i, obj[target - num]];
        }
        obj[num] = i;
    }
};