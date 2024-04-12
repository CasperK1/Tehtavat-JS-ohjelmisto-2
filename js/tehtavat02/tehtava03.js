let ul = document.querySelector('#tehtava8')

let dogs = []

for (i = 1; i <= 6; i++) {
  dogs.push(prompt(`Name of the dog ${i}?`))
}
let dogsReversed = dogs.slice()
dogsReversed.sort().reverse()

for (i = 0; i< dogsReversed.length; i++) {
  let li = document.createElement('li')
  li.textContent = dogsReversed[i]
  ul.append(li)
}
