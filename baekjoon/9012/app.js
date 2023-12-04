const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt'
const input = fs.readFileSync(filePath).toString().trim().split('\n')

const len = input.shift();

function isValid(ps) {  
  const stack = [];

    for (const p of ps) {
      if (p === "(") {
        stack.push(')');
      } else if (!stack.length || stack.pop() !== p) {
        return false;
      }
    }
    return stack.length === 0;
}

const results =input.map(s => isValid(s) ? 'YES' : 'NO');
console.log(results.join('\n'))

// ------------------------------------------------

const result =[]

for (let i = 0; i < len; i++) {
    let cnt = 0;
    for (let s of input[i]) {
        cnt += s === "(" ? 1 : -1;
        if (cnt < 0) break;
    }
    
    result.push(cnt === 0 ? 'YES' : "NO");
}

console.log(result.join('\n'))