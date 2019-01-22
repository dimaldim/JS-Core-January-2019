function solve() {
    let selectMenu = document.getElementById('selectMenuTo');
    let result = document.getElementById('result');
    let button = document.getElementsByTagName('button')[0];
    button.addEventListener('click', convert);

    let num = document.getElementById('input');
    let option = document.createElement('option');

    option.text = 'binary';
    selectMenu.add(option);
    option = document.createElement('option');
    option.text = 'hexadecimal';
    selectMenu.add(option);

    function convert() {
        if (num.value.length > 0 && selectMenu.value !== '') {
            if (selectMenu.value === 'binary') {
                result.value = dec2bin(num.value);
            } else {
                result.value = dec2hex(num.value);
            }
        }
    }

    function dec2bin(dec) {
        return (dec >>> 0).toString(2);
    }

    function dec2hex(number) {
        return parseInt(number).toString(16).toUpperCase();
    }
}