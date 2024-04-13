const btn = document.getElementById('start');

btn.addEventListener('click', () => {
  let num1= document.getElementById('num1').value;
  console.log(num1);
  let num2 = document.getElementById('num2').value;
  console.log(parseInt(num2) + parseInt(num1));
});