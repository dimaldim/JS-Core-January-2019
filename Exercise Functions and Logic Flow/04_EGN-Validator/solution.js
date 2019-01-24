(function () {
    let button = document.querySelector('#exercise button');
    button.addEventListener('click', generateEGN);

    function generateEGN() {
        let egn;
        let weights = [2, 4, 8, 5, 10, 9, 7, 3, 6];
        var getYear = () => document.getElementById('year').value;
        var getMonth = () => {
            months = {
                January: '01',
                February: '02',
                March: '03',
                April: '04',
                May: '05',
                June: '06',
                July: '07',
                August: '08',
                September: '09',
                October: '10',
                November: '11',
                December: '12',
            };
            return months[document.getElementById('month').value];
        };
        var getDay = () => ('0' + (document.getElementById('date').value)).slice(-2);
        var getGender = () => {
            return document.getElementById('male').checked ? 1 :
                ((document.getElementById('female').checked) ? (2) : undefined);
        };
        var getRegion = () => ('0' + (document.getElementById('region').value)).slice(-3);

        var regionAndGender = (region, gender) => {
            region = region.slice(0, 2);
            for (let i = 1; i <= 9; i++) {
                if (gender === 1 && i % 2 === 0) {
                    return region + i;
                } else if (gender === 2 && i % 2 !== 0) {
                    return region + i;
                }
            }

        };

        if (getYear() && getMonth() && getDay() && getGender() && getRegion() &&
            getYear() >= 1900 && getYear() <= 2100 && getRegion() >= 43 && getRegion() <= 999) {

            egn = (getYear()).slice(2) + getMonth() + getDay() + regionAndGender(getRegion(), getGender());

            let egnSum = 0;
            for (let i = 0; i < 9; i++) {
                egnSum += egn[i] * weights[i];
            }
            let validChecksum = egnSum % 11 === 10 ? 0 : egnSum % 11;

            egn += validChecksum;

            document.getElementById('egn').textContent = `Your EGN is: ${egn}`;
            document.getElementById('year').value = '';
            document.getElementById('date').value = '';
            document.getElementById('region').value = '';
            document.getElementById('month').selectedIndex = 0;
            document.getElementById('male').checked = false;
            document.getElementById('female').checked = false;
        }
    }
})();