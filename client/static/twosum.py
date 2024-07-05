def two_sum(nums, target):
    num_dict = {}
    for i, num in enumerate(nums):
        complement = target - num
        if complement in num_dict:
            return [num_dict[complement], i]
        num_dict[num] = i
num_dict = [1, 2, 3, 4, 5]  
target = 7
print(two_sum(num_dict, target)
