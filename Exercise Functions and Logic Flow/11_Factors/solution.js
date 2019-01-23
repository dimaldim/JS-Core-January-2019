function solve() {
    let number = Number(document.getElementById('num').value);
    let resultElement = document.getElementById('result');
    let func = number => [...Array(number + 1).keys()]
        .filter(i => number % i === 0)

    let factors = func(number).join(' ');

    resultElement.innerHTML = factors;
}