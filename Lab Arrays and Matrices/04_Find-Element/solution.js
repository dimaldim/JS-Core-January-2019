function solve() {
    let searched = parseInt(document.getElementById('num').value);
    let arr = JSON.parse(document.getElementById('arr').value);
    let resultElement = document.getElementById('result');
    let answer = [];

    function findElement(search, input) {
        for (let element of input) {
            let result = element.includes(search);
            let index = element.indexOf(search);
            answer.push(result + ' -&gt; ' + index);
        }
        return answer;
    }

    let result = findElement(searched, arr);

    resultElement.innerHTML = result;
}