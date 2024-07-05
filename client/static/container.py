def maxArea(height):
    left = 0
    right = len(height) - 1
    maxArea = 0

    while left < right:
        currentArea = min(height[left], height[right]) * (right - left+1)
        maxArea = max(maxArea, currentArea)

        right -= 1

    return maxArea

height = [4, 3, 2, 1, 4]
print(maxArea(height))

