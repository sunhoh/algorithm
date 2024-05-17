def solution(order):
    obj={
        'americano': 4500,
        'cafelatte': 5000,
    } 
    
    for i in range(len(order)):
        print(order[i].contains(obj[order[i]]))

print(solution(["cafelatte", "americanoice", "hotcafelatte", "anything"]))