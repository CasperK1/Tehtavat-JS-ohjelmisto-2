const form = document.querySelector('form');

async function tvFetch(input) {
  const response = await fetch(`https://api.tvmaze.com/search/shows?q=${input}`);
  const json = await response.json();
  console.log(json);
}

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const input = document.getElementById('query').value;
  await tvFetch(input);
});





