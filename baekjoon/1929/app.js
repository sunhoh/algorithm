const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt'
const input = require('fs').readFileSync(path).toString().trim().split(' ').map(Number)
const [m,n] = input

function isPrime(num) {
  if (num < 2) return false

  for (let i = 2; i <= Math.ceil(Math.sqrt(num)); i++) {
      if (num % i === 0) return false;
  }
  return true;
}

const arr = [];
for(i=m;i<=n;i++){
  if(isPrime(i)){
    arr.push(i)
  }
}
console.log(arr.join('\n'))
