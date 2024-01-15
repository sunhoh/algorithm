const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(path).toString().trim().split('\n')
const [n,...testcase] = input
// const testcase = [...input[1].split(' ')].map(Number);
console.log(testcase)
