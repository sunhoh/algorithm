function solution(nums) {

    const limit = nums.length / 2
    // console.log(limit)
  
    const sort = nums.sort()
    let mapping = nums.filter((e,idx) => nums[idx+1] != e );
    // console.log(mapping)

    return mapping.length > limit ? limit : mapping.length
    
}
  
  solution([3,1,2,3])



// 다른 문제 풀이 1

  function solution(nums) {
 
    const limit = nums.length / 2
    // console.log(limit)
    
    const mapping = [...new Set(nums)].length
    // console.log(mapping)
    
    return mapping > limit ? limit : mapping 
    
  }
  
  solution([3,1,2,3])