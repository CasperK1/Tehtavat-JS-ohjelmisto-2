'use strict';
const names = ['John', 'Paul', 'Jones'];
let ul = document.getElementById('target')

for (let i = 0; i < names.length; i++) {
  let li = document.createElement('li');
  li.innerHTML =names[i];
  ul.appendChild(li);
}