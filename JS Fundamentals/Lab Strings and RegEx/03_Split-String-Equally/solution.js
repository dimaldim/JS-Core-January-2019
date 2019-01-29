function solve() {
    let input = document.getElementById('str').value;
    let num = Number(document.getElementById('num').value);

    let arr = [];
    let index = 0;

    if (input.length % num !== 0) {
        let len = input.length;
        let symbols = 0;

        while (len % num !== 0) {
            len %= num;
            len++;
            symbols++;
        }

        for (let i = 0; i < symbols; i++) {
            input += input[index];
            index++;
        }
    }
    for (let i = 0; i < input.length; i += num) {
        arr.push(input.substr(i, num));
    }
    document.getElementById('result').innerHTML = arr.join(' ');
}