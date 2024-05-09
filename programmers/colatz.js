// Lv.1
function solution(num) {
    let answer = 0;
    for (i=0;i<500;i++){
        if(num != 1){
            num = num%2 == 0? num / 2 : num * 3 + 1;
        }else{
            return answer = i;
        }
    }
    console.log(answer)
    return answer = -1;
}

solution(6)