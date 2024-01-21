const path = process.platform === "linux" ? "/dev/stdin" : "input.txt"; 
const input = require("fs").readFileSync(path).toString().trim().split("\n");
const [n, ...testcases] = input;

for (let i = 0; i < n; i++) {
  let words = testcases[i].split(" ");
  let answer = words.map((word) => word.split("").reverse().join("")).join(" ");
  console.log(answer);
}


// const result = testcases.map((char) => {
//   const offset = char.split(' ');
//   let answer = '';
//   for (let key of offset) {
//     answer += key.split('').reverse().join('') + ' ';
//   }
//   return answer.trim();
// });
// console.log(result.join('\n'));
