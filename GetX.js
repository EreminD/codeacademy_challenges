function getX(x, nums) {
  // Write your code here
  if (x > nums.length) { return 0 }
  if (x === 0) { return 0 }
  
  nums.sort((a,b) => a-b)[x-1]
  return nums[x-1]
}

// Leave this so we can test your code:
module.exports = getX;
