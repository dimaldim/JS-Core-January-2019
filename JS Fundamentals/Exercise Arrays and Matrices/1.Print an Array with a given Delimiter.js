function solve(input) {
    let delimiter = input[input.length - 1];
    let result = '';
    input.pop();
    for (let i = 0; i < input.length; i++) {
        if (i === 0) {
            result += input[i];
        } else {
            result += delimiter + input[i];
        }
    }
    console.log(result);
}