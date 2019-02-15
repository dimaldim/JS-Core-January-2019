function currencyFormatter(separator, symbol, symbolFirst, value) {
    let result = Math.trunc(value) + separator;
    result += value.toFixed(2).substr(-2, 2);
    if (symbolFirst) return symbol + ' ' + result;
    else return result + ' ' + symbol;
}

function solve(currencyFormatter) {
    function dollarFormatter(value) {
        return currencyFormatter(',', '$', true, value);
    }

    return dollarFormatter;
}

let dollarFormatter = solve(currencyFormatter);
console.log(dollarFormatter(100));