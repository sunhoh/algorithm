const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt'
const [n,...input] = fs.readFileSync(filePath).toString().split('\n')

const queue = [];

const cmd = {
  push: (x) => queue.push(x),
  pop: () => queue.length ? queue.shift() : -1,  // 비었을 경우 -1 반환
  size: () => queue.length,                      // 큐의 크기 반환
  empty: () => (queue.length === 0 ? 1 : 0),     // 비어있으면 1, 아니면 0 반환
  front: () => queue.length ? queue[0] : -1,     // 큐의 첫 번째 요소 반환, 없으면 -1
  back: () => queue.length ? queue.at(-1) : -1   // 큐의 마지막 요소 반환, 없으면 -1
};

const output = [];  // 결과를 저장할 배열

for (let i = 0; i < n; i++) {
  const [commend, num] = input[i]?.split(' ');

  if (commend === 'push') {
    cmd.push(parseInt(num));           
  } else if (commend === 'pop') {
    output.push(cmd.pop());            
  } else if (commend === 'size') {
    output.push(cmd.size());           
  } else if (commend === 'empty') {
    output.push(cmd.empty());          
  } else if (commend === 'front') {
    output.push(cmd.front());          
  } else if (commend === 'back') {
    output.push(cmd.back());           
  }
}

console.log(output.join('\n')); 
