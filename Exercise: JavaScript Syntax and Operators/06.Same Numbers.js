function solve(number) {
    let arr = String(number).split('');
    let sum = 0;
    arr.forEach(function (value) {
        sum += Number(value);
    });
    if (/^([0-9])\1*$/.test(number)) {
        console.log("true");
    } else {
        console.log("false");
    }
    console.log(sum);
}

solve(1234)
