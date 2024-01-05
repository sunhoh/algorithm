const path = process.platform === "linux" ? "/dev/stdin" : "input.txt"; 
const input = require("fs").readFileSync(path).toString().trim().split("\n").map(Number);

const [n, ...testcases] = input;

// 그니까 문제가 
// 1부터 n까지 배열에 push 하는데 
// 주어진 값(testcases)이랑 스택에 넣는 값이랑 일치하면 pop하라는거자나

const stack = [];
const answer = [];
let count = 0;

for(i=1;i<=n;i++){
	stack.push(i)
	answer.push('+')

	while(stack[stack.length-1] === testcases[count]){
		stack.pop()
		answer.push('-')
		count++;
		if(count === n) break;
	}
}

console.log(stack.length !== 0 ? 'NO' : answer.join('\n'))