const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt'
const input = require('fs').readFileSync(path).toString().trim().toLocaleLowerCase()

let ans = new Array(26).fill(0);

for(let alpha of input){
  let alpha2Ascii = alpha.charCodeAt(0);
  ans[alpha2Ascii - 97] += 1;
}

const alphbet = Array.from({length:26},(_,index)=> String.fromCharCode(index + 97))
const hash = alphbet.reduce((acc,v)=>(acc[v]=acc[v] || 0,acc),{})

for(let key of input){
  if(hash.hasOwnProperty(key)){
    hash[key]++
  }
}