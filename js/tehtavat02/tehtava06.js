let ul = document.querySelector('#tehtava8')
let roll = 0
function diceRoll() {
  return Math.floor(Math.random() * 6) + 1
}

while (roll != 6) {
  roll = diceRoll()
  let li = document.createElement('li')
  li.textContent = `Dice roll: ${roll}`
  ul.appendChild(li)
}