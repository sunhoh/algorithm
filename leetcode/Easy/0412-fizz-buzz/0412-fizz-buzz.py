class Solution:
    def fizzBuzz(self, n: int) -> List[str]:
        # arr = []
        # for i in range(1, n+1):
        #     if i % 3 == 0 and i % 5 == 0:
        #         arr.append("FizzBuzz")
        #     elif i % 3 == 0:
        #         arr.append("Fizz")
        #     elif i % 5 == 0:
        #         arr.append("Buzz")
        #     else:
        #         arr.append(str(i))
        # return arr
        return  ["FizzBuzz" if i % 3 == 0 and i % 5 == 0 else "Fizz" if i % 3==0 else "Buzz" if i%5==0 else str(i) for i in range(1,n+1)]

