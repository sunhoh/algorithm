function solution(absolutes, signs) {
  let answer = 0

  if(absolutes.length !== signs.length){
    return false    
  } else {
    for(let i = 0; i<absolutes.length; i++){
        (signs[i] === false) 
        ? absolutes[i] = absolutes[i] * -1
        : absolutes[i]
    } 
  return answer = absolutes.reduce((e,x) => { return e + x })
  }
}
solution([1,2,3],[false,false,true])


// 다른 문제 풀이 1
// 본래 양수이면 true 음수이면 false를 이용한 로직인듯

// function solution(absolutes, signs) {
//  return absolutes.map((item,idx) => { 
//     return signs[idx] ? item : item * -1
//   }).reduce((acc,curr) => {
//     return acc + curr
//   })
// }
// solution([1,2,3],[false,false,true])


//다른 문제 풀이 2
//reduce 어렵...
// function solution(absolutes, signs) {
//     return absolutes.reduce((acc, val, i) => acc + (val * (signs[i] ? 1 : -1)), 0);
// }
