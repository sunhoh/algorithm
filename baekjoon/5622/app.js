const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt'
const input = fs.readFileSync(filePath).toString().trim()

const dial ={
  ABC:2,
  DEF:3,
  GHI:4,
  JKL:5,
  MNO:6,
  PQRS:7,
  TUV:8,
  WXYZ:9
}
let result = 0;
for(let value of input){
  for(let key in dial){
    const word = key.split('')
    if(word.includes(value)){
      result += dial[key] + 1
    }
  }
}

console.log(result)
