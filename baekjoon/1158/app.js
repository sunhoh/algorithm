const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt'
const input = fs.readFileSync(filePath).toString().trim().split(' ').map(Number)

const [n,k]= input

const queue = Array.from({length:n},(_,index)=> index+1 )
const answer =[]
let count =1;

while(queue.length){
  const shiftItem = queue.shift()
  if(count % k === 0){
    answer.push(shiftItem)
  }else {
    queue.push(shiftItem)
  }
  count +=1;
}

console.log(`<${answer.join(', ')}>`)
