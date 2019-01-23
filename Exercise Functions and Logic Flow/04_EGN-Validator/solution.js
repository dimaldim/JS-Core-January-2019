(function () {
    let button = document.querySelector('#exercise button');
    button.addEventListener('click', generateEGN);

    function generateEGN() {
        let year = document.getElementById('year');
        let month = document.getElementById('month');
        let day = document.getElementById('date');
        let region = document.getElementById('region');
        let sex = document.getElementById('male').checked ? 1 : ((document.getElementById('female').checked) ? (2) : undefined);
        let weights = [2, 4, 8, 5, 10, 9, 7, 3, 6];
        let egn;

        let validYear = Number(year.value) >= 1900 && Number(year.value) <= 2100;
        let validRegion = Number(region.value) >= 43 && Number(region.value) <= 999;

        if (validYear && month.value && day.value && validRegion && sex) {

            let gregion = String(region.value.slice(0, 2)) + random(0, 9);

            if (sex === 1 && (gregion % 2 !== 0)) {
                gregion--;
            } else if (sex === 2 && (gregion % 2 === 0)) {
                gregion++;
            }
            let lastDigit;
            egn = year.value.slice(-2) + getMonth(month.value) + (day.value < 10 ? '0' + day.value : day.value) + gregion;
            let weightSum = () => {
                let sum = 0;
                for (i = 0; i < egn.length; i++) {
                    sum += Number(egn[i]) * weights[i];
                }
                return sum;
            };
            let checkNum = weightSum() % 11;
            if (checkNum === 10) {
                egn += '0';
            } else {
                egn += checkNum;
            }
            document.getElementById('egn').textContent = `Your EGN is: ${egn}`;

            year.value = '';
            month.value = '';
            day.value = '';
            region.value = '';

        }
    }

    function random(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    function getMonth(name) {
        let month;
        switch (name) {
            case 'January':
                month = '01';
                break;
            case 'February':
                month = '02';
                break;
            case 'March':
                month = '03';
                break;
            case 'April':
                month = '04';
                break;
            case 'May':
                month = '05';
                break;
            case 'June':
                month = '06';
                break;
            case 'July':
                month = '07';
                break;
            case 'August':
                month = '08';
                break;
            case 'September':
                month = '09';
                break;
            case 'October':
                month = '10';
                break;
            case 'November':
                month = '11';
                break;
            case 'December':
                month = '12';
                break;
        }
        return month;
    }
})();