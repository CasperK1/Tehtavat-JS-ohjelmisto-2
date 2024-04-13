const form = document.getElementById('source');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const fName = document.querySelector('input[name=firstname]').value;
    const lName = document.querySelector('input[name=lastname]').value;
    document.getElementById('target').innerHTML = `Your name is ${fName} ${lName}`
});