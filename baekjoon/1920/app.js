const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt'
const input = fs.readFileSync(filePath).toString().trim().split('\n')

const [N, A, M, B] = input.map(v => v.split(" ").map(x => Number(x)));
A.sort((a, b) => a - b);

function binarySearch(array, target) {
  let start =0
  let end = array.length -1;

  while(start <= end){
    let mid = parseInt((start+end)/2)

    if(array[mid] < target) {
      start = mid + 1  
    } else if(array[mid] > target){
      end = mid - 1
    }else {
      return 1
    }
  }
  return 0
}

const answer = B.map((v) => {
  return binarySearch(A, v);
});

console.log(answer.join('\n'))