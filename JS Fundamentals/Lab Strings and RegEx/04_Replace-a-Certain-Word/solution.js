function solve() {
    let input = JSON.parse(document.getElementById('arr').value).filter(a => a !== '');
    let replaceWith = document.getElementById('str').value;
    let resultElement = document.getElementById('result');
    let word = input[0].split(' ')[2];

    for (let i = 0; i < input.length; i++) {
        let p = document.createElement('p');
        let re = new RegExp(word, 'gi');
        p.innerHTML = input[i].replace(re, replaceWith)
        resultElement.appendChild(p);
    }
}