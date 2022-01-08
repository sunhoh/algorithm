function solution(participant,completion) {
    let result = '';

    participant.sort()
    completion.sort()
    
    for(let i in participant){
       if(participant[i] !== completion[i])
        return result = participant[i]
    }
  }
  solution(["leo", "kiki", "eden"],["eden", "kiki"])