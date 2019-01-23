function solve() {
    let string = document.getElementById('string').value;
    let char = document.getElementById('character').value;
    let result = '';
    let charCount = 0;
    let resultElement = document.getElementById('result');

    function findCharOccurences(string, char) {
        for (let i = 0; i < string.length; i++) {
            if (string[i] === char) {
                charCount++;
            }
        }
    }

    function evenOrOdd() {
        if (charCount % 2 === 0) {
            result = `Count of ${char} is even.`;
        } else {
            result = `Count of ${char} is odd.`;
        }
    }

    findCharOccurences(string, char);
    evenOrOdd();
    resultElement.innerHTML = result;

}