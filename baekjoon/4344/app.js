const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt'
const input = fs.readFileSync(filePath).toString().split('\n')

function parseInput(input) {
    const testCases = [];
    for (let i = 1; i <= input[0]; i++) { 
        const arr = input[i].split(' ').map(e => +e);
        arr.shift();
        testCases.push(arr);
    }
    return testCases; 
}

const testCases = parseInput(input);
solution(testCases);

function solution(testCases) {  
  for(let i = 0; i < testCases.length; i++){
    const all_student = testCases[i].length
    const average = Math.trunc(testCases[i].reduce((acc,cur)=> acc + cur,0)/testCases[i].length)
    const high_score_student = testCases[i].filter(v => v > average).length
    const ratio = ((high_score_student/all_student) * 100).toFixed(3) 
    
    console.log(ratio + '%')
  }
}