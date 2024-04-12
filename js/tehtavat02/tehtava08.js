const strings = ['Johnny', 'DeeDee', 'Joey', 'Marky']

function concat(strings) {
  let concatenated = ''
  for (let i = 0; i < strings.length; i++) {
    concatenated += strings[i]
  }
  return concatenated
}

console.log(concat(strings))
