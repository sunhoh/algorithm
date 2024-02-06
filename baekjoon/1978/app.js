const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt'
const input = require('fs').readFileSync(path).toString().trim().split('\n')
const [n, testcase] = input

const isPrime = (n) => {
  if (n == 1) {
    return false;
  }
  // i * i <= x
  // i <= Math.sqrt(n);
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
}

console.log(testcase.split(" ").filter(v => isPrime(v)).length);