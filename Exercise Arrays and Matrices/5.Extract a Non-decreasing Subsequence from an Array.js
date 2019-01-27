function solve(input) {
    let biggestNumber = -Infinity;
    let result = [];

    input.filter((value) => {
        if (value >= biggestNumber) {
            biggestNumber = value;
            result.push(value);
        }
    });

    console.log(result.join('\n'));
}