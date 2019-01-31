function solve() {
    let expressionElement = document.getElementById('expressionOutput');
    let resultElement = document.getElementById('resultOutput');
    let expression = '';

    Array.from(document.querySelectorAll('button')).forEach(b => {
        b.addEventListener('click', function () {
            if (b.textContent === '=') {
                let parts = expression.split(' ');
                let leftOperand = Number(parts[0]);
                let operator = parts[1];
                let rightOperand = Number(parts[2]);

                if (!leftOperand || !operator || !rightOperand) {
                    resultElement.textContent = 'NaN';
                } else {
                    let result = eval(`${leftOperand} ${operator} ${rightOperand}`);
                    resultElement.textContent = result;
                    return;
                }
            }

            if (!isNaN(b.textContent) || b.textContent === ".") {
                expression += b.textContent;
            } else if (b.textContent === 'Clear') {
                expression = '';
                resultElement.textContent = '';
                expressionElement.textContent = '';
            } else {
                expression += ` ${b.textContent} `;
            }

            expressionElement.textContent = expression;
        });
    });
}