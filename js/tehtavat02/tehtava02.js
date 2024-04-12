const tehtavat = document.querySelector('#tehtava2-2')
const participantNmbr = parseInt(prompt('Number of participants?'))
let names = []
for (i = participantNmbr; i > 0; i--) {
  let nameInput = prompt('Participants')
  names.push(nameInput)
}

names.sort()
for (i = 0; i < names.length; i++) {
  let li = document.createElement('li')
  li.textContent = names[i]
  tehtavat.append(li)
}