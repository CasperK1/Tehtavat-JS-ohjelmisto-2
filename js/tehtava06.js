const tehtavat = document.querySelector('#tehtavat')

const confirmation = confirm("Should I calculate the square root?")

if (confirmation === true) {
  const number = parseInt(prompt('Number:'))

  if (number === false) {
    tehtavat.textContent = `The square root of a negative number is not defined`
  } else {
    tehtavat.innerHTML = `Square root of ${number} is ${Math.sqrt(number)}`
  }
}