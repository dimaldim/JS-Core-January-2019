function solve() {
    let input = JSON.parse(document.getElementById('arr').value);
    let resultElement = document.getElementById('result');

    var calc = (arr) => {
        for (i = 0; i < arr.length; i++) {
            let p = document.createElement('p');
            p.textContent = `${i} -> ${arr[i] * arr.length}`;
            resultElement.appendChild(p);
        }
    };

    calc(input);
}