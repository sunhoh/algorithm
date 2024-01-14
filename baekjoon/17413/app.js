const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(path).toString().trim()

let answer = '';
const regExp = /<[a-z\s]+>|[a-z0-9]+/g;

answer = input.replace(regExp, (word) => {
  console.log(word)
  return word.startsWith("<") ? word : word.split("").reverse().join("");
});

// console.log(answer)

// const re = /(<.+?>|\s)/g; 
// const testcase = input.split(re); 

// let result = [];

// for(i=0;i<testcase.length;i++){
//   if(re.test(testcase[i])){
//     result += testcase[i]
//   }else {
//     result += testcase[i].split('').reverse().join('')
//   }
// }

// console.log(result);