function solve() {
    let str = document.getElementById('str').value;
    let text = document.getElementById('text').value;
    let resultElement = document.getElementById('result');

    let pattern = /(north|east)[\s\S]*?(\d{2})[^,]*?,[^,]*?(\d{6})/gmi;
    let match = pattern.exec(text);
    let north = '';
    let east = '';

    while (match) {
        if (match[1].toLowerCase() === 'north') {
            north = `${match[2]}.${match[3]} N`;
        } else {
            east = `${match[2]}.${match[3]} E`;

        }

        match = pattern.exec(text);
    }

    let messageRegex = new RegExp(`${str}(.*?)${str}`, 'gim');
    let message = `Message: ${messageRegex.exec(text)[1]}`;

    let firstPElement = document.createElement('p');
    firstPElement.textContent = north;
    let secondPElement = document.createElement('p');
    secondPElement.textContent = east;
    let thirdPElement = document.createElement('p');
    thirdPElement.textContent = message;

    resultElement.appendChild(firstPElement);
    resultElement.appendChild(secondPElement);
    resultElement.appendChild(thirdPElement);
}