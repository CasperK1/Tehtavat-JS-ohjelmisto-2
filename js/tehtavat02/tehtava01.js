let nums = []
let reversed = []
for (i=0; i < 5; i++) {
  let num = parseInt(prompt('Value'))
  nums.push(num)
}

for (i = nums.length - 1; i>=0;i--){
  reversed.push(nums[i])
}
console.log(reversed)