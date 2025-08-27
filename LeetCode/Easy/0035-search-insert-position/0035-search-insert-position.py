class Solution:
    def searchInsert(self, nums: List[int], target: int) -> int:
        def findTarget(index):
            if index >= len(nums) or nums[index] >= target:
                return index
            return findTarget(index + 1)
            
        return findTarget(0)
        