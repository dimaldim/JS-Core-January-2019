function solve(input) {
    let rotations = input[input.length - 1];
    input.pop();
    for (let i = 1; i <= (+rotations % input.length); i++) {
        let last = input[input.length - 1];
        input.pop();
        input.unshift(last);
    }
    console.log(input.join(' '));
}