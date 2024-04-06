const tehtavat = document.querySelector('#tehtavat')

const classes = ['Gryffindor', 'Slytherin', 'Hufflepuff', 'Ravenclaw']
const choice = classes[Math.floor(Math.random() * 4)];
const name = prompt('Name:')
tehtavat.textContent = `${name} you're ${choice}`

