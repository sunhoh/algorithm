const array = [1, 5, 2, 6, 3, 7, 4]
const commands = [[2, 5, 3], [4, 4, 1], [1, 7, 3]]	

function solution(array, commands) {
  var answer = [];
  for(let i in commands){
    let newArr = array.slice(commands[i][0]-1,commands[i][1]).sort((a,b)=>{return a-b})
    
     answer.push(newArr[commands[i][2]-1])
  }
  return answer
}

solution(array, commands)