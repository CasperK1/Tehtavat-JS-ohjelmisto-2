const btn = document.getElementById('start');

btn.addEventListener('click', () => {
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;

    switch (document.getElementById('operation').value) {
        case 'add':
            document.getElementById('result').textContent = `${num1} + ${num2} = ${parseInt(num1) + parseInt(num2)}`;
            break;
        case 'sub':
            document.getElementById('result').textContent = `${num1} - ${num2} = ${parseInt(num1) - parseInt(num2)}`;
            break;
        case 'multi':
            document.getElementById('result').textContent = `${num1} * ${num2} = ${parseInt(num1) * parseInt(num2)}`;
            break;
        case 'div':
            document.getElementById('result').textContent = `${num1} / ${num2} = ${parseInt(num1) / parseInt(num2)}`;
            break;
    }
});