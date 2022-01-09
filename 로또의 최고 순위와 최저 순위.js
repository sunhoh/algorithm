const lottos = [44, 1, 0, 0, 31, 25]
const win_nums = [31, 10, 45, 1, 6, 19]

function solution(lottos, win_nums) {
  var answer = [];
  let count = 0;
  const rank = [6, 6, 5, 4, 3, 2, 1];
  
  const zeroCount = lottos.filter( e => e === 0 ).length;
  
  lottos.forEach( e => {
    const index = win_nums.indexOf(e);
    console.log(index)
    
      if( index !== -1 ) {
          count++;
          win_nums.splice(index, 1);
        }
    });
    
    
    return [rank[count + zeroCount], rank[count]];
}
solution(lottos, win_nums)