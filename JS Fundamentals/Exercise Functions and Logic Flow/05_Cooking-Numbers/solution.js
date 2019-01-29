(function () {
    let buttons = Array.from(document.getElementsByTagName('button'));
    let resultElement = document.getElementById('output');

    buttons.forEach((button) => {
        if (button.textContent === 'Chop') {
            button.addEventListener('click', divideNum);
        } else if (button.textContent === 'Dice') {
            button.addEventListener('click', squareNum);
        } else if (button.textContent === 'Spice') {
            button.addEventListener('click', addOneToNum);
        } else if (button.textContent === 'Bake') {
            button.addEventListener('click', multiplyNum);
        } else if (button.textContent === 'Fillet') {
            button.addEventListener('click', substractNum);
        }
    });

    function divideNum() {
        let number = Number(document.querySelector('#exercise input').value);
        if (resultElement.textContent) {
            resultElement.textContent /= 2;
        } else {
            resultElement.textContent = number / 2;
        }
    }

    function squareNum() {
        let number = Number(document.querySelector('#exercise input').value);
        if (resultElement.textContent) {
            resultElement.textContent = Math.sqrt(resultElement.textContent);
        } else {
            resultElement.textContent = Math.sqrt(number);
        }
    }

    function addOneToNum() {
        let number = Number(document.querySelector('#exercise input').value);
        if (resultElement.textContent) {
            resultElement.textContent = Number(resultElement.textContent) + 1;
        } else {
            resultElement.textContent = Number(number + 1);
        }
    }

    function multiplyNum() {
        let number = Number(document.querySelector('#exercise input').value);
        if (resultElement.textContent) {
            resultElement.textContent *= 3;
        } else {
            resultElement.textContent = number * 3;
        }
    }

    function substractNum() {
        let number = Number(document.querySelector('#exercise input').value);
        if (resultElement.textContent) {
            resultElement.textContent = Number(resultElement.textContent) * 0.8;
        } else {
            resultElement.textContent = number * 0.8;
        }
    }

})();

