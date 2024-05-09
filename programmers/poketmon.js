// Lv.1
function solution(nums) {
    const limit = nums.length / 2

    const obj = {}
    for(i=0;i<nums.length;i++){
      const cur = nums[i]
      obj[cur] = !obj[cur] ? 1 : obj[cur] + 1 
    }
    
    return Object.keys(obj).length > limit ? limit : Object.keys(obj).length
  }
  
  solution([3,2,1,3])

  