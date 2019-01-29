function solve() {
    let input = JSON.parse(document.getElementById('arr').value);
    let resultElement = document.getElementById('result');
    let result = [];

    var findEven = (arr) => {
        arr.forEach((element, index) => {
            if (index % 2 === 0) {
                result.push(element);
            }
        });
    };

    findEven(input);
    resultElement.innerHTML = result.join(' x ');
}