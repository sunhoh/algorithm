const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt'
const input = require('fs').readFileSync(path).toString().trim().split('\n')


// --------------------------------------------- 실패...
// 소문자, 대문자, 숫자, 공백 없으면 0
// let result = ''
// for(i=0;i<input.length;i++){
//   if(input[i] === '') continue;
//   const char = input[i].split('')
//   const arr = [0,0,0,0]

//   for(j=0;j<char.length;j++){
//     const ascii = char[j].charCodeAt(0)

//     if(ascii >= 97 && ascii <= 122){
//       arr[0]++
//     } else if(ascii >=65 && ascii <= 90 ){
//       arr[1]++
//     } else if(ascii === 32){
//       arr[3]++
//     } else {
//       arr[2]++
//     }
//   }
//   result += arr.join(' ') + '\n';
// }
// console.log(result.trim())


// ---------------------------------------------

const t = input.filter(str => str.length < 1)

if (t.length) {
  input.splice(input.indexOf(t[0]), 1)
}


input.forEach(str => {
  console.log(str,str.replace(/[a-z]/g, ''))
  const lower = str.length - str.replace(/[a-z]/g, '').length
  const upper = str.length - str.replace(/[A-Z]/g, '').length
  const num = str.length - str.replace(/[0-9]/g, '').length
  const blank = str.length - str.replace(/\ /g, '').length

  console.log(lower, upper, num, blank)
})