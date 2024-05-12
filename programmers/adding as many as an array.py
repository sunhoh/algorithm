def solution(arr):
    answer = []
    for i in range(len(arr)):
        for _ in range(arr[i]):
            answer.append(arr[i])
    return answer

    # return [x for x in arr for _ in range(x)]

print(solution([5,1,4]))
