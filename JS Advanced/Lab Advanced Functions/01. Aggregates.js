function solve(input) {
    console.log('Sum = ' + input.reduce((a, b) => a + b));
    console.log('Min = ' + input.reduce((a, b) => Math.min(a, b)));
    console.log('Max = ' + input.reduce((a, b) => Math.max(a, b)));
    console.log('Product = ' + input.reduce((a, b) => a * b));
    console.log('Join = ' + input.reduce((a, b) => '' + a + b));
}

solve([2, 3, 10, 5]);