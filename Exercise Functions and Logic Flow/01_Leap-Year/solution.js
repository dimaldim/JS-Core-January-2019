(function () {
    let button = document.getElementsByTagName('button')[0];
    let divResult = document.querySelectorAll('#exercise div')[1];
    let hResult = document.querySelector('#exercise h2');
    let result = '';

    button.addEventListener('click', checkLeapYear);

    function checkLeapYear() {
        let year = Number(document.querySelector('#exercise input').value);
        let isLeap = ((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0);
        if (isLeap) {
            result = 'Leap Year';
        } else {
            result = 'Not Leap Year';
        }

        hResult.textContent = result;
        divResult.textContent = year;
        document.querySelector('#exercise input').value = '';
    }
})();