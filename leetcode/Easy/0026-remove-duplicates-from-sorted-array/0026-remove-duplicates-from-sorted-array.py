class Solution:
    def removeDuplicates(self, nums: List[int]) -> int:
        unique = [nums[0]]  

        for i in range(1, len(nums)):
            if nums[i] != nums[i - 1]:
                unique.append(nums[i])

        nums[:] = unique
        return len(unique)