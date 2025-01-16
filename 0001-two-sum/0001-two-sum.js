/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
     for(let i = 0; nums.length > i; i++) {
        for(let j = 0; nums.length > j; j++) {
            if(i !== j) {
                if(nums[i] + nums[j] === target) return [i,j]
            }
        }
    }
};