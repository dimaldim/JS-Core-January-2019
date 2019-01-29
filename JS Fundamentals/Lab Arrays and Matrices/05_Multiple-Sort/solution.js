function solve() {
    let input = JSON.parse(document.getElementById('arr').value);
    let resultElement = document.getElementById('result');
    resultElement.textContent = '';
    let sortAsc = [];
    let sortAlphabet = [];

    function sort(arr) {
        let div1 = document.createElement('div');
        let div2 = document.createElement('div');

        sortAsc = arr.sort((a, b) => a - b)
        div1.textContent = sortAsc.join(', ');
        resultElement.appendChild(div1);

        sortAlphabet = arr.sort((a, b) => a.localeCompare(b));
        div2.textContent = sortAlphabet.join(', ');
        resultElement.appendChild(div2);
    }

    sort(input);
}