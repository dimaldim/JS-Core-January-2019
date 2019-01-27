function solve(input) {
    let result = [];
    let initNum = 1;
    for (let i = 0; i < input.length; i++) {
        let command = input[i];
        if (command === 'add') {
            result.push(initNum);
        } else if (command === 'remove') {
            result.pop();
        }
        initNum++;
    }
    if (result.length === 0) {
        console.log('Empty');
    } else {
        for (let j = 0; j < result.length; j++) {
            console.log(result[j]);
        }
    }
}