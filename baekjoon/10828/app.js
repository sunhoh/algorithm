const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt'
const input = fs.readFileSync(filePath).toString().trim().split('\n')

const len = input.shift();

const stack = [];
const cmd = {
  push: (ele) => stack.push(ele),
  pop: () => stack.pop() || -1,
  size: () => stack.length,
  empty: () => stack[0] ? 0 : 1,
  top: () => stack.at(-1) || -1,
}

const result = [];

for(let i=0; i<len; i++){
  const [command, n] =input[i].split(' ')

  switch(command){
    case 'push':
      cmd.push(parseInt(n));
      break
    case 'pop':
      result.push(cmd.pop());
      break
    case 'size':
      result.push(cmd.size());
      break
    case 'empty':
      result.push(cmd.empty());
      break
    case 'top':
      result.push(cmd.top());
      break
    default:
      break;
  }
}

console.log(result.join('\n'))
