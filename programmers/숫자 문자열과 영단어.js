function solution(s) {  
    var answer = 0;
    
    const obj = {
      0 : 'zero',
      1 : 'one',
      2 : 'two', 
      3 : 'three',
      4 : 'four',
      5 : 'five',
      6 : 'six',
      7 : 'seven',
      8 : 'eight',
      9 : 'nine',
    }

  for(let i=0; i < Object.keys(obj).length; i++){ 
      let numKey = Object.keys(obj)[i]
      let numValue = Object.values(obj)[i]
      let letter = new RegExp(numValue, "gi");
      
      if (s.includes(numValue)){
        s = s.replace(letter, numKey) 
      }
    }
    answer = parseInt(s);  
    return answer;
  }
  solution("23four5six7")



// 다른 문제 풀이 1

// function solution(s) {
//   var answer = 0;
//   s = s.replace(/one/g,'1');
//   s = s.replace(/two/g,'2');
//   s = s.replace(/three/g,'3');
//   s = s.replace(/four/g,'4');
//   s = s.replace(/five/g,'5');
//   s = s.replace(/six/g,'6');
//   s = s.replace(/seven/g,'7');
//   s = s.replace(/eight/g,'8');
//   s = s.replace(/nine/g,'9');
//   s = s.replace(/zero/g,'0');
//   console.log(s);
//   s = Number(s);
//   return s;
// }
// solution("one4seveneight")


// 다른 문제 풀이 2

// function solution(s) {
//   let numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
//   var answer = s;

//   for(let i=0; i< numbers.length; i++) {
//       let arr = answer.split(numbers[i]);
//       answer = arr.join(i);

//   }
//   return Number(answer);
// }
// solution("one4sevennine")

