function solution(x) {
    var answer = true;
    let sumEachNum = (x + '').split('').reduce((prev, curr) => +prev + +curr, 0);
  
    answer = x % sumEachNum === 0 ? true : false;
  
return answer


solution(10)