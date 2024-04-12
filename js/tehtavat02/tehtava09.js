let nums = [1, 2, 3, 4]

function even(nums) {
  let evenNums = []
  for (i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0) {
      evenNums.push(nums[i])
    }
  }
  return evenNums
}

console.log(even(nums))
