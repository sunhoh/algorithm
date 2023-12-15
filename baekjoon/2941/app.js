const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt'
const input = fs.readFileSync(filePath).toString().trim()

let croatia = ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="];

function solution(input) {

  for (let alpha of croatia) {
      input = input.replace(new RegExp(alpha, 'g'), "@");
      // input = input.split(alpha).join('@')
  }

  return input.length; 
}

console.log(solution(input));