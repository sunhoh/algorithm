const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(path).toString().trim().split('\n')
const [n, ...testcase] = input
const [postfix, ...numbers] = testcase

function solution(postfix,numbers){
  const stack = []

  for(i=0;i<postfix.length;i++){
    if(isEnglish(postfix[i])) {
      
      stack.push(numbers[postfix[i].charCodeAt(0) - 'A'.charCodeAt(0)])
    } else {  
      // 여기서 연산해줘야 할듯?
      const back = stack.pop()
      const front = stack.pop()
      stack.push(calculator(front, back, postfix[i]))
    }
  }
  return stack[0].toFixed(2)
}

function calculator(a,b,sign){
  switch(sign){
    case '+' : return a+b;
    case '-' : return a-b;
    case '*' : return a*b;
    case '/' : return a/b;
    default: console.log('error')
  }
}

function isEnglish(char){
  return /[A-Z]/.test(char)
}

console.log(solution(postfix,numbers.map(Number)))
