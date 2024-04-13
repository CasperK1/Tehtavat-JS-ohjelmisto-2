const btn = document.getElementById('start');


btn.addEventListener('click', () => {
    const str = document.getElementById('calculation').value;
    let nums;

    if (str.includes('+')) {
        nums = str.split('+');
        document.getElementById('result').textContent = `${nums[0]} + ${nums[1]} = ${parseInt(nums[0]) + parseInt(nums[1])}`;
    } else if (str.includes('-')) {
        nums = str.split('-');
        document.getElementById('result').textContent = `${nums[0]} - ${nums[1]} = ${parseInt(nums[0]) - parseInt(nums[1])}`;
    } else if (str.includes('*')) {
        nums = str.split('*');
        document.getElementById('result').textContent = `${nums[0]} * ${nums[1]} = ${parseInt(nums[0]) * parseInt(nums[1])}`;
    } else if (str.includes('/')) {
        nums = str.split('/');
        document.getElementById('result').textContent = `${nums[0]} / ${nums[1]} = ${parseInt(nums[0]) / parseInt(nums[1])}`;
    } else {
        document.getElementById('result').textContent = 'Not a calculation (+, -, *, /).';
    }
});
