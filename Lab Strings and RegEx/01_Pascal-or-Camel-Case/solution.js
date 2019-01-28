function solve() {
    let input = document.getElementById('str1').value;
    let convert = document.getElementById('str2').value;
    let output = '';
    let resultElement = document.getElementById('result');

    let split = input.toLowerCase().split(' ').filter(a => a !== '');

    if (convert === 'Camel Case') {
        for (let word of split) {
            if (word[0] !== word[0].toUpperCase()) {
                word = word.replace(word[0], word[0].toUpperCase());
            }
            output += word;
        }
        output = output.replace(output[0], output[0].toLowerCase());
    } else if (convert === 'Pascal Case') {
        for (let word of split) {
            if (word[0] !== word[0].toUpperCase()) {
                word = word.replace(word[0], word[0].toUpperCase());
            }
            output += word;
        }
    } else {
        output = 'Error!';
    }
    resultElement.innerHTML = output;
}