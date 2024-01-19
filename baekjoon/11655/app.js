const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(path).toString().trim()

// function rot13(str){
//   return str.replace(/[a-zA-z]/g,(char) => {
//     const offset = char.toUpperCase() === char ? 65 : 97;
//     const ascii = char.charCodeAt(0) - offset
//     return String.fromCharCode((ascii + 13) % 26 + offset) 
//   })
// }

// console.log(rot13(input))

let result = []

for(i=0;i<input.length;i++){
  const char = input[i]

    if(/[a-zA-z]/g.test(char)){
      const offset = char <= 'Z' ? 65 : 97;
      const ascii = char.charCodeAt(0) - offset
        result.push(String.fromCharCode((ascii + 13) % 26 + offset)) 
    } else {
      result.push(char)  
    }
}

console.log(result.join(''))