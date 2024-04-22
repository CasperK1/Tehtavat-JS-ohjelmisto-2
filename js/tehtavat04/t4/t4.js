
const form = document.querySelector('form');
let article = document.createElement('article')


async function tvFetch(input) {
  let json;
  try {
    const response = await fetch(`https://api.tvmaze.com/search/shows?q=${input}`);
    json = await response.json();
    console.log(json);
  } catch (e) {
    console.error(e)
  } finally {
    article.innerHTML = ''
    for (let i = 0; i < json.length; i++) {
      let h2 = document.createElement('h2');
      h2.textContent = `${json[i].show.name}`
      article.appendChild(h2)

      let img = document.createElement('img');
      if (json[i].show.image?.medium) {
        img.src = `${json[i].show.image.medium}`;
      } else {
        img.src = 'https://via.placeholder.com/210x295?text=Not%20Found';
      }
      img.alt = 'No image';
      article.appendChild(img);

      let a = document.createElement('a')
      a.style.display = 'block';
      a.href = `${json[i].show.url}`
      a.target = '_blank'
      a.textContent = 'Show Link'
      article.appendChild(a)

      let summary = document.createElement('div');
      if (json[i].show.summary) {
        summary.innerHTML = `${json[i].show.summary}`;
      } else {
        summary.textContent = 'No summary available';
      }
      article.appendChild(summary);
      form.appendChild(article)
    }
  }
}

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const input = document.getElementById('query').value;
  await tvFetch(input);
});




