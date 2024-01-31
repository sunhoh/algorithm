const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt'
const input = require('fs').readFileSync(path).toString().trim().split(' ').map(Number)
const [A,B] = input 

// 일반 반복문

function gcd(A,B){
  for(i=Math.min(A,B);i>=1;i--){
    if(A % i === 0 && B%i===0){
        return i 
    }
  }
}

function lcm(A,B){
  return A*B / gcd(A,B)
}

console.log(gcd(A,B),lcm(A,B))



// 유클리드 호제법

function GCD(a, b) {
  if (b === 0) {
      return a;
  } else {
      return GCD(b, a % b);
  }
}

// 최소 공배수(LCM) 계산 함수
function LCM(a, b) {
  return (a * b) / GCD(a, b);
}

console.log(GCD(A,B), LCM(A,B))