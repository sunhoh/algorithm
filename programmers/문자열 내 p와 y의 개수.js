function solution(s) {
    var answer = false;
    let pCount = 0;
    let yCount = 0;
    let newString = s.toUpperCase();
  
    for (let i = 0; i < s.length; i++) {
      if (newString[i] === 'P') {
        pCount++;
      } else if (newString[i] === 'Y') {
        yCount++;
      }
    }
  
    if (pCount === yCount) answer = true;
  
    return answer;
  }