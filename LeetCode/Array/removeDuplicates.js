// Remove Duplicates from Sorted Array
// Given a sorted array nums, remove the duplicates in-place such that each element appears only once and returns the number of unique elements.

// Example 1:
// Input: nums = [1,1,2]
// Output: 2, nums = [1,2,_]
// Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.

const removeDuplicates = (nums) => {
  let i = 0;
  for (let j = 1; j < nums.length; j++) {
    if (nums[i] !== nums[j]) {
      i++;
      nums[i] = nums[j];
    }
  }
  return i + 1;
}

console.log(removeDuplicates([1, 1, 2]));
