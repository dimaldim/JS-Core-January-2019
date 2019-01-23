(function () {
    let button = document.querySelector('#exercise button');
    button.addEventListener('click', checkDate);
    let validMonths = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September',
        'October', 'November', 'December'];

    function checkDate() {
        let year = Number(document.getElementById('year').value);
        let month = document.getElementById('month').value;
        let day = Number(document.getElementById('day').value);
        day = day < 10 ? '0' + day : day;

        let checkYear = () => {
            return year > 0 && year <= 9999
        };

        let checkMonth = () => {
            return validMonths.includes(month);
        };

        let checkDay = () => {
            return day > 0 && day < 32
        };

        let monthNumber = validMonths.indexOf(month) + 1;
        monthNumber = monthNumber < 10 ? '0' + monthNumber : monthNumber;

        if (checkYear() && checkDay() && checkMonth()) {
            let p = document.createElement('p');
            p.textContent = `Date: ${year}-${monthNumber}-${day} is valid`;
            document.getElementById('output').appendChild(p);
        } else {
            let p = document.createElement('p');
            p.textContent = `Date: ${year}-${month}-${day} is not valid`;
            document.getElementById('output').appendChild(p);
        }
    }

})();