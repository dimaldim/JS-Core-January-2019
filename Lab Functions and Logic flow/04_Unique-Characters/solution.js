function solve() {
    let string = document.getElementById('string').value;
    let uniqueChars = '';
    let resultElement = document.getElementById('result');

    function isCharWhiteSpace(i) {
        if (string[i] === ' ') {
            uniqueChars += string[i];
        }
    }

    function isCharUnique(i) {
        if (uniqueChars.indexOf(string[i]) === -1) {
            uniqueChars += string[i];
        }
    }

    function findUniqueChars(string) {
        for (let i = 0; i < string.length; i++) {
            isCharWhiteSpace(i);
            isCharUnique(i);
        }
    }

    findUniqueChars(string);
    resultElement.innerHTML = uniqueChars;
}