function solution(array, commands) {
    let result = [];
      
    for(i=0;i<commands.length;i++){
        
      const cmd = commands[i];
        
      const newArr = array.slice(cmd[0]-1, cmd[1]).sort((a,b)=>a-b);
      
      result.push(newArr[cmd[2]-1])
    }  
    
    return result
  }
  
  solution([1, 5, 2, 6, 3, 7, 4],[[2, 5, 3], [4, 4, 1], [1, 7, 3]])
  