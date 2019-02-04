function solve() {
    let filterPosBtn = document.querySelector('#filter > button');
    filterPosBtn.addEventListener('click', filterPos);
    let sortBtn = document.querySelector('#sort > button');
    sortBtn.addEventListener('click', sort);
    let rotateBtn = document.querySelector('#rotate > button');
    rotateBtn.addEventListener('click', rotate);
    let getBtn = document.querySelector('#get > button');
    getBtn.addEventListener('click', get);

    let output = '';
    let resultElement = document.getElementById('output').children[0];

    function get() {
        let input = document.getElementById('input').value;
        let position = Number(document.getElementById('getPosition').value);

        resultElement.innerHTML += input.split('')[position - 1];
    }

    function rotate() {
        let input = document.getElementById('input').value;
        let times = Number(document.getElementById('rotateSecondaryCmd').value);
        let rotatePosition = Number(document.getElementById('rotatePosition').value);
        let array = input.split('');

        let rotatedArray = rotateArray(array, times);

        resultElement.innerHTML += rotatedArray[rotatePosition - 1];
    }

    function sort() {
        let input = document.getElementById('input').value;
        let sortType = document.getElementById('sortSecondaryCmd').value;
        let sortPosition = Number(document.getElementById('sortPosition').value);
        let result = '';
        switch (sortType) {
            case 'A':
                result = input.split('').sort()[sortPosition - 1];
                break;
            case 'Z':
                result = input.split('').sort((a, b) => b.localeCompare(a))[sortPosition - 1];
                break;
        }
        resultElement.innerHTML += result;
    }

    function filterPos() {
        let input = document.getElementById('input').value;
        let filterCommand = document.getElementById('filterSecondaryCmd').value;
        let filterPosition = Number(document.getElementById('filterPosition').value);
        let result = '';
        switch (filterCommand) {
            case 'uppercase':
                result = input.split('').filter(x => isNaN(x) && x === x.toUpperCase())[filterPosition - 1];
                break;
            case 'lowercase':
                result = input.split('').filter(x => isNaN(x) && x === x.toLowerCase())[filterPosition - 1];
                break;
            case 'nums':
                result = input.split('').filter(x => {
                    return /^\d+$/.test(x);
                })[filterPosition - 1];
                break;
        }
        resultElement.innerHTML += result;
    }

    function rotateArray(arr, count) {
        let length = arr.length;
        while (count--) {
            arr.unshift(arr.pop());
        }

        return arr;
    }
}