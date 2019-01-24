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
        var getGender = () => document.getElementById('male').checked ? 2 : 1;
        var getRegion = () => document.getElementById('region').value;


        if (getYear() && getMonth() && getDay() && getGender() && getRegion() &&
            getYear() >= 1900 && getYear() <= 2100 && getRegion() >= 43 && getRegion() <= 999) {

            egn = (getYear()).slice(2) + getMonth() + getDay() + (getRegion()).slice(0, 2) + getGender();

            let egnSum = 0;
            for (let i = 0; i < 9; i++) {
                if (egn[i] !== 0) {
                    egnSum += (Number(egn[i]) * Number(weights[i]));
                }
            }
            let validChecksum = egnSum % 11 > 9 ? 0 : egnSum % 11;

            egn += validChecksum;

            document.getElementById('egn').textContent = `Your EGN is: ${egn}`;

            document.getElementById('year').value = '';
            document.getElementById('date').value = '';
            document.getElementById('region').value = '';
            document.getElementById('month').value = '';
            document.getElementById('male').checked = false;
            document.getElementById('female').checked = false;
        }
    }
})();