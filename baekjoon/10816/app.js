const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt'
const input = fs.readFileSync(filePath).toString().trim().split('\n')

const [N, A, M, B] = input.map(v => v.split(" ").map(x => Number(x)));

// const hash = A.reduce((acc, v) => (acc[v] = (acc[v] || 0) + 1, acc), {});
// const result = B.map(v=> hash[v] ? hash[v] : 0).join(' ');
// console.log(result);

let map = new Map();
A.forEach(el => {
  if(map.has(el)) map.set(el,map.get(el)+1);
  else map.set(el,1);
});

const result = B.map(v=> map.get(v) || 0).join(' ')
console.log(result)

