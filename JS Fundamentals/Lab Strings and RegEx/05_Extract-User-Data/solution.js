function solve() {
    let arr = JSON.parse(document.getElementById("arr").value);
    let result = document.getElementById('result');

    function userData(arr) {

        let pattern = /^([A-Z][a-z]* [A-Z][a-z]*) (\+359 [0-9] [0-9]{3} [0-9]{3}|\+359-[0-9]-[0-9]{3}-[0-9]{3}) ([a-z0-9]+@[a-z]+\.[a-z]{2,3})$/;
        let match;

        for (let data of arr) {

            match = pattern.exec(data);

            if (match) {

                let firstParagraph = document.createElement('p');
                firstParagraph.textContent = `Name: ${match[1]}`;
                result.appendChild(firstParagraph);
                let secondParagraph = document.createElement('p');
                secondParagraph.textContent = `Phone Number: ${match[2]}`;
                result.appendChild(secondParagraph);
                let thirdParagraph = document.createElement('p');
                thirdParagraph.textContent = `Email: ${match[3]}`;
                result.appendChild(thirdParagraph);
            } else {

                let errorParagraph = document.createElement('p');
                errorParagraph.textContent = 'Invalid data';
                result.appendChild(errorParagraph);

            }

            let dashes = document.createElement('p');

            dashes.textContent = '- - -';
            result.appendChild(dashes);
        }
    }

    userData(arr);
}