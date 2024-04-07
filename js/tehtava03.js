const tehtavat = document.querySelector('#tehtavat')
const numbers = [];
let sum= 0
let product = 1
let average = 0

for (let i = 1; i <= 3; i++) {
    let num = prompt(`Number ${i}`);
    numbers.push(parseInt(num));
}
for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i]
}

for (let i = 0; i < numbers.length; i++) {
    product *= numbers[i]
}

for (let i = 0; i < numbers.length; i++) {
    average += numbers[i]
}
average= average / numbers.length

tehtavat.innerHTML = `Sum: ${sum} <br> Product: ${product} <br> Average: ${average}`;