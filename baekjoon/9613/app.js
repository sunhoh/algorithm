const path = process.platform === 'linux' ?  '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(path).toString().trim().split('\n');
const [n, ...testcase ] = input;

const getGCD = (a, b) => {
  if (a % b === 0) return b;
  return getGCD(b, a % b);
};

const getSum = (n, ...arr) => {
  let sum = 0;
  arr.sort((a, b) => b - a);
  arr.forEach((v, i) => {
    while (i < n-1) {
      sum += getGCD(v, arr[++i]);
    }
  });
  return sum;
};

const output = [];
testcase.forEach(v => {
  output.push(getSum(...v.split(' ').map(v => +v)));
});
console.log(output.join('\n'));