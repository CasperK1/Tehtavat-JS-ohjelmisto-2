const h1 = document.createElement('h1')

async function chuckJoke() {

    try {
        const response = await fetch('https://api.chucknorris.io/jokes/random');
        const json = await response.json();
        h1.textContent = json.value
        document.body.appendChild(h1)

    } catch (error) {
        console.log(error);
    }
}
chuckJoke()