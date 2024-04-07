const tehtavat = document.querySelector('#tehtavat')

const diceAmount = parseInt((prompt('Number of dice:')))
const eyeSum = parseInt(prompt('Sum of the'))
let matches = 0

for (let i = 0; i <= 10000; i++) {
  let throwsSum = 0
  for (let j = 0; j < diceAmount; j++) {
    throwsSum += Math.floor(Math.random() * 6) + 1
  }
  if (throwsSum === eyeSum) {
    matches++
  }
}

tehtavat.textContent = `Probability for the sum: ${((matches / 10000) * 100).toFixed(2)}%`