const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(path).toString().trim().split('\n')
const [char, n,...testcases] = input;

const originStack = char.split('')
const newStack = [];

for(i=0;i<n;i++){
  const [cmd, value] = testcases[i].split(' ')
    switch (cmd) {
      case "L":
        if (originStack.length != 0) {
          newStack.push(originStack.pop());
        }
        break;
      case "D":
        if (newStack.length != 0) {
          originStack.push(newStack.pop());
        }
        break;
      case "B":
        if (originStack.length != 0) {
          originStack.pop();
        }
        break;
      case "P":
        originStack.push(value);
        break;
    } 
  }
  let result = originStack.concat(newStack.reverse()).join("");
  console.log(result);
