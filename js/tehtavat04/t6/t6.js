const form = document.querySelector('form');

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    let joke;
    const article = document.createElement('article');
    try {
        const input = document.getElementById('query').value;
        const response = await fetch(`https://api.chucknorris.io/jokes/search?query=${input}`);
        joke = await response.json();
    } catch (e) {
        console.log(e);
    } finally {
        for (let i = 0; i < joke.result.length; i++) {
            let p = document.createElement('p')
            p.textContent = joke.result[i].value
            article.appendChild(p)
        }
        form.appendChild(article);
    }

});