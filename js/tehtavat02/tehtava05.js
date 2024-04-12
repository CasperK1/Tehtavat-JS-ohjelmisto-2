let numbers = []
while (true) {
  let x = parseInt(prompt('Input a number'))
  if (numbers.includes(x)){
    break
  }
  else{
    numbers.push(x)
  }
}
numbers.sort((a,b) => {return a - b})
for (i = 0; i < numbers.length; i++) {
  console.log(numbers[i])
}
