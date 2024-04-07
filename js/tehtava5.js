const tehtavat = document.querySelector('#tehtavat')
const year = parseInt(prompt('Year:'))


if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
  tehtavat.textContent = `${year} is a leap year`

} else {
  tehtavat.textContent = `${year} is not a leap year`
}
