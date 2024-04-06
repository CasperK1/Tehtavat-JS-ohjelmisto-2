const tehtavat = document.querySelector('#tehtavat')
const year = parseInt(prompt('Year:'))


if (year % 400 === 0) {
  tehtavat.textContent = 'Year is leap year'
} else if (year % 100 === 0) {
  tehtavat.textContent = `${year} is not a leap year`

} else if (year % 4 === 0) {
  tehtavat.textContent = `${year} is a leap year`

} else {
  tehtavat.textContent = `${year} is not a leap year`
}
