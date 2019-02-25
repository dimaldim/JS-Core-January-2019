function solve() {
    let firstNum, secondNum, result;
    return {
        init: (firstSelect, secondSelect, resultSelector) => {
            firstNum = $(firstSelect);
            secondNum = $(secondSelect);
            result = $(resultSelector);
        },
        add: () => {
            let firstValue = +firstNum.val();
            let secondValue = +secondNum.val();
            result.val(firstValue + secondValue);
        },
        subtract: () => {
            let firstValue = +firstNum.val();
            let secondValue = +secondNum.val();
            result.val(firstValue - secondValue);
        }
    }
}