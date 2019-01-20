function solve(string1, string2, string3) {
    let lengthSum = string1.length + string2.length + string3.length;
    let avgLengthSum = (string1.length + string2.length + string3.length) / 3;

    console.log(lengthSum);
    console.log(Math.floor(avgLengthSum));
}

solve('chocolate', 'ice cream', 'cake');