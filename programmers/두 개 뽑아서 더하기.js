// function solution(numbers) {
//     const result = []
    
//     for(let i = 0; i < numbers.length - 1; i++){
//         for(let j = i+1; j < numbers.length; j++){
//             const sum = numbers[i] + numbers[j]
//             if(result.indexOf(sum) < 0){
//                 result.push(sum)
//             }
//         }    
//     }
    
//     result.sort((a,b)=>a-b)
//     return result
// }



// 다른 문제 풀이

function solution(numbers) {
    
    const answer = []
    const sort = numbers.sort((a,b)=>a-b)
    console.log(sort)
    
    for(let i=0; i<numbers.length; i++){
      // console.log(numbers[i])
      for(let j=i+1; j<numbers.length; j++){
        // console.log(numbers[j])
        answer.push(numbers[i]+numbers[j])
        // console.log(answer)
      }
    }
    const result = [...new Set(answer)]
    // console.log(result)
    
    return result
  }
  solution([2,1,3,4,1])