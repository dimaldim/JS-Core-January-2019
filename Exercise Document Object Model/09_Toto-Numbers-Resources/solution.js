function solve() {
    let numbers = document.querySelector('input');
    let button = document.querySelector('button');
    let resultDiv = document.getElementById('allNumbers');

    button.addEventListener('click', show);

    function show() {
        let nums = numbers.value.trim().split(' ');
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] < 1 || nums[i] > 49) {
                return;
            }
        }
        if (nums.length === 6) {
            for (i = 1; i <= 49; i++) {
                let newDiv = document.createElement('div');
                newDiv.textContent = i;
                newDiv.className = 'numbers';
                if (nums.includes(String(i))) {
                    newDiv.style.backgroundColor = 'orange';
                }
                resultDiv.appendChild(newDiv);
            }
            numbers.disabled = 'true';
            button.disabled = 'true';
        }
    }
}