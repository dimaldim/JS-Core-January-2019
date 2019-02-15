function add(num) {
    let sum = num;

    function sumNum(num2) {
        sum += num2;
        return sumNum;
    }

    sumNum.toString = function () {
        return sum;
    };

    return sumNum;
}