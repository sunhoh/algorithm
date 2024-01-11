const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(path).toString().trim().split('\n')

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

// const result =[]

// for (let i = 0; i < len; i++) {
//     let cnt = 0;
//     for (let s of input[i]) {
//         cnt += s === "(" ? 1 : -1;
//         if (cnt < 0) break;
//     }
    
//     result.push(cnt === 0 ? 'YES' : "NO");
// }

// console.log(result.join('\n'))


// ------------------------------------------------

// function isValid(s) {
//   const stack = [];
//   const brackets = { ')': '(', '}': '{', ']': '[' };

//   for (const char of s) {
//     // !== undefined
//       if (!!brackets[char]) {
//           if (!stack.length || stack.pop() !== brackets[char]) {
//               return false;
//           }
//       } else {
//           stack.push(char);
//       }
//   }

//   return stack.length === 0;
// }

// ------------------------------------------------

// const result = [];

// function removeStr(str) {
//   const resultStr = str.replace(/\(\)/g, '');

//   if (str.length !== resultStr.length) {
//     return removeStr(resultStr);
//   }

//   return str[0] === ")" || str[str.length-1] === "(" ? "NO" : "YES";
// }

// for (let i = 0; i < len; i++) {
//   result.push( removeStr(input[i]) );
// }

// console.log(result.join('\n'));



// const [n, ...testcases] = input;


// function isVPS(str) {
//   const stack = [];

//   for (let char of str) {
//     if (char === '(') {
//       stack.push('(');
//     } else {
//       if (!stack.length) {222
//         return 'NO'; // 여는 괄호가 없는데 닫는 괄호가 나온 경우
//       }
//       stack.pop(); // 짝이 맞는 괄호 제거
//     }
//   }

//   return stack.length === 0 ? 'YES' : 'NO'; // 스택이 비어있으면 YES, 아니면 NO
// }

// // 각 테스트 케이스에 대해 결과 출력
// for (let i = 0; i < n; i++) {
//   // console.log(testcases[i])
//   console.log(isVPS(testcases[i]));
// }
