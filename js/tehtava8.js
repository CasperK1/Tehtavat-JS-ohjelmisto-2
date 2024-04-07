const tehtavat = document.querySelector('#tehtavat')
const leapYearUl = document.querySelector('#tehtava8')

const startYear = parseInt(prompt('Start year:'), 10)
const endYear = parseInt(prompt('End year:'), 10)
let yearCheck = startYear

if (isNaN(startYear) || isNaN(endYear) || startYear > endYear) {
  tehtavat.textContent = 'Please enter valid years.'
} else {
  while (yearCheck <= endYear) {
    if (yearCheck % 400 === 0 || (yearCheck % 4 === 0 && yearCheck % 100 !== 0)) {
      const li = document.createElement('li')
      li.textContent = yearCheck;
      leapYearUl.appendChild(li)
    }
    yearCheck++
  }
  tehtavat.textContent = `Leap years between ${startYear} and ${endYear}:`
  tehtavat.appendChild(leapYearUl)
}
