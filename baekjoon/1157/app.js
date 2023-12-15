const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt'
const input = fs.readFileSync(filePath).toString().trim().toLowerCase()

const hash = input.split('').reduce((acc, char) => {
  if (acc[char]) {
    acc[char] += 1;
  } else {
    acc[char] = 1; 
  }
  return acc
}, {})

const max = Math.max(...Object.values(hash));
const result =[]


for(let key in hash){
  if(hash[key] === max) result.push(key) 
}

console.log(result.length === 1 ?result[0] : '?')
