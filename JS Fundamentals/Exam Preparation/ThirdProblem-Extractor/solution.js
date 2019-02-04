function solve() {
    let btn = Array.from(document.getElementsByTagName('button'))[0];
    btn.addEventListener('click', extract);
    let output = document.getElementById('output');

    function extract() {

        let input = document.getElementById('input').value;
        let matchNum = input.match(/[0-9]+/);
        let number = +matchNum[0];
        input = input.replace(matchNum[0], '');

        let text = input.substring(0, number);

        let split = text.split(text[text.length - 1]);
        let pattern = split.shift();
        let fullPattern = `[${pattern}]+`;
        let regex = new RegExp(fullPattern, 'g');

        let result = split[0].split(regex).join(``).replace(/#/g, ' ').toString();

        output.textContent = result;

    }
}