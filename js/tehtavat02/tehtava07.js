let ul = document.querySelector('#tehtava8')
let roll = 0
const diceSides = parseInt(prompt('Number of sides?'))

function diceRoll(sides) {
  return Math.floor(Math.random() * sides) + 1
}

while (roll != diceSides) {
  roll = diceRoll(diceSides)
  let li = document.createElement('li')
  li.textContent = `Dice roll: ${roll}`
  ul.appendChild(li)
}