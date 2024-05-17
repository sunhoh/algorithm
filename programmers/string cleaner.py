def solution(str1, str2):
    # result = []
    answer = ''

    for s1,s2 in zip(str1, str2):
        answer += s1+s2
        print(answer)
    
    # for i in range(len(str1)):        
    #     # result.append(list(str1)[i])
    #     # result.append(list(str2)[i])
    #     # answer2 = ''.join(result)
    #     answer  = answer + str1[i] + str2[i]
    # return answer 

solution('aaaaa','bbbbb')