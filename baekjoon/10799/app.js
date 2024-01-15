const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(path).toString().trim()

function solution(input){
  const stack =[];
  let total = 0;

  for(i=0; i<input.length;i++){
    if(input[i] ==='(') {
      stack.push('(')
    }else {
      stack.pop()
      if(input[i-1] === '('){
        total += stack.length;
      }else {
        total += 1
      }
    }
  }
  return total;
}

console.log(solution(input))