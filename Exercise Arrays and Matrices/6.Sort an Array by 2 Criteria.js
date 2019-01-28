function solve(input) {
    input.sort((a, b) => {
        if (a.length === b.length) {
            return a < b ? -1 : 1;
        }
        return a.length - b.length;
    })
    console.log(input.join('\n'));
}