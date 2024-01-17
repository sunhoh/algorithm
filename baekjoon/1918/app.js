const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(path).toString().trim().split('')

function solution(input) {
	const stack =[];
	let answer = '';

	for(i=0;i<input.length;i++){
		const char = input[i]
		if(/[A-Z]/.test(char)){
			answer += char

		} else if(char === '(') {
			stack.push(char)
		} else if(char === ')') {
			while(stack.length && stack.at(-1) !== '('){
				answer += stack.pop();
			}
			stack.pop()

		} else if(char === '*' || char === '/') {
			while (stack.length && stack.at(-1) === '*' || stack.at(-1) === '/') {
				answer += stack.pop()
			}
			stack.push(char)
		} else if(char === '+' || char === '-'){
			while (stack.length && stack.at(-1) !== '(') {
				answer += stack.pop()
			}
			stack.push(char)
		} 
	}

	while(stack.length > 0){
		answer += stack.pop()
	}
	
	// console.log(stack,'answer',answer)
	return answer
}


console.log(solution(input))
