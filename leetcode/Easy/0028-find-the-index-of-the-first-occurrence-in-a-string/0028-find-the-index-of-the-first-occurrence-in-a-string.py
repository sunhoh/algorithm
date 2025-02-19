class Solution:
    def strStr(self, haystack: str, needle: str) -> int:
        # return haystack.find(needle)
        index=0
        while index <= len(haystack) - len(needle):
            try:
                if haystack[index: index + len(needle)] == needle:
                    return index
                index += 1
            except:
                break

        return -1
        