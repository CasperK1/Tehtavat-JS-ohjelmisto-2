const tehtavat = document.querySelector('#tehtavat')


const userInput = parseInt(prompt('Number of dice rolls?'))
let rollCount = 0
let rollSum = 0
while (rollCount < userInput) {
  rollSum += Math.floor(Math.random() * 6) + 1
  rollCount++
}
tehtavat.textContent = `Sum of the dice rolls: ${rollSum}`