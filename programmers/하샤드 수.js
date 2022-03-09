function solution(x) {
  	let sum = ''
  	const arr = String(x).split('')
    
    for(i in arr) {
      sum += Number(arr[i])
    }
		console.log(sum)
  
  return (x % sum === 0 ) ?  true : false
}

solution(10)


// function solution(x) {
//   var answer = true;
//   let sumEachNum = (x + '').split('').reduce((prev, curr) => +prev + +curr, 0);

//   answer = x % sumEachNum === 0 ? true : false;

//   return answer;
// }