// const lottos = [44, 1, 0, 0, 31, 25]
// const win_nums = [31, 10, 45, 1, 6, 19]

// function solution(lottos, win_nums) {
//   let count = 0;
//   const rank = [6, 6, 5, 4, 3, 2, 1];
  
//   const zeroCount = lottos.filter( e => e === 0 ).length;
  
//   lottos.forEach( e => {
//     const index = win_nums.indexOf(e);
//     console.log(index)
    
//       if( index !== -1 ) {
//           count++;
//           win_nums.splice(index, 1);
//         }
//     });
    
    
//     return [rank[count + zeroCount], rank[count]];
// }
// solution(lottos, win_nums)


// 다른 문제 풀이 

const lottos = [44, 1, 0, 0, 31, 25]
const win_nums = [31, 10, 45, 1, 6, 19]

function solution(lottos, win_nums) {
  const rank = [6, 6, 5, 4, 3, 2, 1];
  
  let min = lottos.filter(e => win_nums.includes(e)).length
  let zero = lottos.filter(e => !e).length
  const max = min + zero

  return [rank[max], rank[min]]
}
solution(lottos, win_nums)