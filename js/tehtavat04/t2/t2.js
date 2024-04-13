const queryField = document.getElementById('query')
const search = document.getElementById('search')


let searchResult = ''
search.addEventListener('click', ()=> {
  searchResult=queryField.value
})






async function tvFetch(search){
  const response = await fetch(`https://api.tvmaze.com/search/shows?q=${search}`)
  const json = await response.json()
  console.log(json)
}

tvFetch(searchResult)