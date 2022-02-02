function solution(a, b) {
    let answer = 0;
    if(a.length === b.length){
     for(i in a) { 
      answer += a[i]*b[i]
      }  
      return answer
    }
  }
  solution(a, b)

// 다른 문제 풀이
//   function solution(a, b) {
//     var answer = a.reduce((acc, cur, idx) => acc += cur*b[idx], 0)
//     return answer;
// }

// 이런 문제는 reduce를 이용해서 풀면 간단
// arr.reduce(callback[, initialValue])
// callback함수로 받을수 있는 인자
// 누산기 (acc), 현재 값 (cur), 현재 인덱스 (idx), 원본 배열 (src)


