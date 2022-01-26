function solution(answers) {

    let answer = [];
    let supoja = [
        [1, 2, 3, 4, 5],
        [2, 1, 2, 3, 2, 4, 2, 5],
        [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
    ];

    let score = [];
    for (let i = 0; i < supoja.length; i++) {
        score[i] = answers.filter(
            (e, idx) => e === supoja[i][idx % supoja[i].length],
        ).length;
    }

    let max = Math.max(...score);

    if (score[0] === max) answer.push(1);
    if (score[1] === max) answer.push(2);
    if (score[2] === max) answer.push(3);

    return answer;
}


// 다른 문제 풀이 1

// function solution(answers) {
//     var answer = [];
    
//     // 수포자들의 반복되는 규칙의 수를 배열로 저장
//     let p1 = [1,2,3,4,5];
//     let p2 = [2,1,2,3,2,4,2,5];
//     let p3 = [3,3,1,1,2,2,4,4,5,5];
    
//     // filter를 사용하여 answers를 탐색하면서 수포자들의 번호와 비교(완전탐색)
//     let s1 = answers.filter( (a, i) => a === p1[i%5] ).length;
//     let s2 = answers.filter( (a, i) => a === p2[i%8] ).length;
//     let s3 = answers.filter( (a, i) => a === p3[i%10] ).length;
    
//     // 세 사람의 점수 중 최대값 구하기
//     let max = Math.max(s1, s2, s3);
    
//     // 최대값과 일치한 점수를 가지면 answer에 저장
//     if(s1 === max) answer.push(1);
//     if(s2 === max) answer.push(2);
//     if(s3 === max) answer.push(3);
    
//     return answer;
// }