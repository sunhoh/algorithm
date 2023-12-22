const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt'
const input = fs.readFileSync(filePath).toString().trim()

// function fibonacci(n){
//   if(n === 0) return 0
//   else if(n === 1) return 1
//   else return fibonacci(n-1) + fibonacci(n-2)
// }

// console.log(fibonacci(input))



function fibonacci(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;

  let prev1 = 0;
  let prev2 = 1;
  let result = 0;

  for (let i = 2; i <= n; i++) {
    result = prev1 + prev2;
    prev1 = prev2;
    prev2 = result;
  }

  return result;
}
console.log(fibonacci(input));
