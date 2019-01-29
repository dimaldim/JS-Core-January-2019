function greatestCD() {
    let resultElement = document.getElementById('result');
    let num1 = Number(document.getElementById('num1').value);
    let num2 = Number(document.getElementById('num2').value);

    resultElement.innerHTML = gcd(num1, num2);

    function gcd(a, b) {
        if (!b) {
            return a;
        }
        return gcd(b, a % b);
    }
}