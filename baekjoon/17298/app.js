const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(path).toString().trim().split('\n')
const testcase = [...input[1].split(' ')].map(Number);

// 완전 탐색 실패
// function findNGE(arr) {
//   const result = new Array(arr.length).fill(-1);

//   for (let i = 0; i < arr.length; i++) {
//       for (let j = i + 1; j < arr.length; j++) {
//           if (arr[j] > arr[i]) {
//               result[i] = arr[j];       
//           }
//       }
//   }

//   return result;
// }
// console.log(findNGE(testcase))

function findNGE(arr) {
    let tmp = [];
let result = new Array(input.length).fill(-1);

for (let i = 0; i < input.length; i++) {
  while (tmp.length && input[tmp[tmp.length - 1]] < input[i]) {
    result[tmp.pop()] = input[i];
  }
  tmp.push(i);
}
console.log(result.join(" "));
}


findNGE(testcase)