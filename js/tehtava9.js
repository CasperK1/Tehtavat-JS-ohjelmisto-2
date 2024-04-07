const tehtavat = document.querySelector('#tehtavat')

const prime = parseInt(prompt('Check if number is prime number:'))

if (prime <= 1) {
  tehtavat.textContent = `${prime} is not a prime number`
} else {
  let isPrime = true
  for (let i = 2; i < prime; i++) {
    if (prime % i === 0) {
      isPrime = false
      tehtavat.textContent = `${prime} is not a prime number`
      break
    }
  }
  if (isPrime) {
    tehtavat.textContent = `${prime} is a prime number`
  }
}
