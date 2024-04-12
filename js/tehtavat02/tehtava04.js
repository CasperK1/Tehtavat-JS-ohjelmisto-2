let nums = []
while (true) {
  let x = parseInt(prompt('Input value, 0 exits'))
  nums.push(x)
  if (x === 0) {
    break
  }
}
nums.sort((a, b) => {
  return a - b
})
for (i = 0; i < nums.length; i++) {
  console.log(nums[i])
}
