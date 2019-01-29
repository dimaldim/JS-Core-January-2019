function solve() {
    let input = JSON.parse(document.getElementById('arr').value);
    let resultElement = document.getElementById('result');


    function reverse(arr) {
        arr.forEach((element, index) => {
            arr[index] = element.split('').reverse().join('');
        });

        arr.forEach((element, index) => {
            arr[index] = element.charAt(0).toUpperCase().concat(element.slice(1));
        });

        return arr.join(' ');
    }

    let result = reverse(input);
    resultElement.innerHTML = result;


}