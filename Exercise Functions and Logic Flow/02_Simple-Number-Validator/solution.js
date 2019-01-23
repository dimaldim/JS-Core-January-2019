(function () {
    let button = document.querySelector('#exercise button');
    let weightPosition = [2, 4, 8, 5, 10, 9, 7, 3, 6];

    button.addEventListener('click', checkNumber);

    function checkNumber() {
        let number = document.getElementsByTagName('input')[0];
        let lastDigit = () => Number(number.value) % 10;
        let weightNums = () => {
            let sum = 0;
            for (let i = 0; i < number.value.length - 1; i++) {
                sum += Number(number.value[i]) * weightPosition[i];
            }
            return sum;
        };
        let sumNums = () => weightNums() % 11 === 10 ? 0 : weightNums() % 11;

        if (lastDigit() === sumNums()) {
            document.getElementById('response').textContent = 'This number is Valid!';
        } else {
            document.getElementById('response').textContent = 'This number is NOT Valid!';
        }
    }
})();