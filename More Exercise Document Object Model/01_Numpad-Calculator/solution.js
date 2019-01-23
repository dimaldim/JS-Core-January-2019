function solve() {
    let buttons = Array.from(document.getElementsByTagName('button'));
    let exprField = document.getElementById('expressionOutput');
    let result = document.getElementById('resultOutput');

    buttons.forEach((button) => {
        if (button.textContent === '=') {
            button.addEventListener('click', showResult);
        } else if (button.textContent === 'Clear') {
            button.addEventListener('click', clearContent);
        } else {
            button.addEventListener('click', add);
        }
    });

    function showResult() {


    }

    function clearContent() {
        exprField.textContent = '';
        result.textContent = '';
    }

    function add(e) {
        exprField.textContent += e.target.textContent;
    }

}