function solve() {
    var sentences = document.getElementById('input').innerText
        .split('.')
        .filter(item => item);

    for (i = 0; i < sentences.length; i++) {
        var p = document.createElement('p');
        p.textContent = sentences[i];
        document.getElementById('output').appendChild(p);
    }
}