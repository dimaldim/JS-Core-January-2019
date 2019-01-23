function solve() {
    let number = Number(document.getElementById('num1').value);
    let multiplier = Number(document.getElementById('num2').value);

    let divResult = document.getElementById('result');

    function getWrongInput(num, multiplier) {
        if (num > multiplier) {
            divResult.innerHTML = 'Try with other numbers.';
        }
    }

    function printResult(num, multiplier) {
        for (let i = num; i <= multiplier; i++) {
            let result = multiplier * i;
            let p = document.createElement('p');
            p.innerHTML = `${i} * ${multiplier} = ${result}`;
            divResult.appendChild(p);
        }
    }

    divResult.innerHTML = '';

    getWrongInput(number, multiplier);
    printResult(number, multiplier);
}