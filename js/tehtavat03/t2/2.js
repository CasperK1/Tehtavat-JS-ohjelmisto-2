let ul = document.getElementById('target')

let t2li1 = document.createElement('li')
t2li1.textContent = 'First item'
ul.appendChild(t2li1)

let t2li2 = document.createElement('li')
t2li2.textContent = 'Second item'
t2li2.classList.add('my-item')
ul.appendChild(t2li2)

let t2li3 = document.createElement('li')
t2li3.textContent = 'Third item'
ul.appendChild(t2li3)
