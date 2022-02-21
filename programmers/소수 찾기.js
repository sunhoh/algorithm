// 소수 찾기 에라토스테네스의 체
function solution(n) {
    let arr = Array(n + 1).fill(true).fill(false, 0, 2);
  
    // 0과 1은 소수가 아니므로 2부터 시작
    // 에라토스테네스의 체 공식에 대입하면 2~n 범위에서 2~n의 제곱근의 해당하는 소수의 배수를 제외하면 결국 소수만 남을 것이다.
    for (let i = 2; i * i <= n; i++) {
      // 예를들어 4는 2의 배수를 처리할때 처리되었으므로(false) 패스
      if (arr[i]) {
        // i의 배수를 false로 변경
        for (let j = i * i; j <= n; j += i) {
          arr[j] = false;
        }
      }
    }
    // true인 index만 남겨 개수를 반환한다.
    return arr.filter((el) => el).length;
  }
  
  solution(10);


// 에라토스터네스의 체 요약
// 소수란 1과 자기 자신으로만 나누어지는 수이다. 즉, 배수들은 소수가 아니라는 말
// ------- 모든 배수를 제외하면 나머지가 소수다. ------- //


// let arr = Array(n + 1).fill(true).fill(false, 0, 2);
// Array()는 길이만큼 생성하는데, 만약 n이 3이었다면, 3개의 인덱스를 가진 배열을 생성하기 때문
// 여기서 필요한건 이 인덱스를 숫자로 활용할 것이기 때문에 n+1의 길이로 생성해야 3까지 생성이 되기 때문이다.


//참고자료
//https://themarketer.tistory.com/73