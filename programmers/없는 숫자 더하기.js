function solution(numbers) {
    let answer = 0 ;
    
    for(let i=0; i<10; i++){
      if(!numbers.includes(i)) answer += i
    }
    return answer
  }
  solution([1,2,3,4,6,7,8,0])

// 다른 문제 풀이
//   function solution(numbers) {
//     return 45 - numbers.reduce((cur, acc) => cur + acc, 0);
  
// }

// let numbers = [5,8,4,0,6,7,9];
// console.log(solution(numbers)); // 6
