const numbers = [1,2,3,4,6,7,8,0]

function solution(numbers) {
  var answer = 0;
  for(let i=0; i<10; i++){
    // !numbers.includes(i) ? answer += i : ''
    numbers.indexOf(i) === -1 ? answer += i : ''
  } 
    return answer;
}
solution(numbers)

