function solve() {
//[{"name": "Sofa", "img": "https://res.cloudinary.com/maisonsdumonde/image/upload/q_auto,f_auto/w_200/img/grey-3-seater-sofa-bed-200-13-0-175521_9.jpg", "price": 150, "decFactor": 1.2}]

    let outputElement = document.getElementById('furniture-list');
    let generateBtn = Array.from(document.querySelectorAll('button'))[0];
    let buyBtn = Array.from(document.querySelectorAll('button'))[1];
    let resultElement = Array.from(document.querySelectorAll('textarea'))[1];

    generateBtn.addEventListener('click', generate);
    buyBtn.addEventListener('click', buy);

    function buy() {
        let checked = Array.from(document.querySelectorAll("input:checked"));
        let furnitures = [];
        let totalSum = 0;
        let avgFactor = 0;

        checked.forEach(item => {
            furnitures.push(item.parentNode.children[0].textContent.split('Name: ').filter(x => x !== '')[0]);
            totalSum += Number(item.parentNode.children[2].textContent.split('Price: ').filter(x => x !== '')[0]);
            avgFactor += Number(item.parentNode.children[3].textContent.split('Decoration factor: ').filter(x => x !== '')[0]);
        });
        let avgResult = avgFactor / furnitures.length;


        resultElement.textContent = `Bought furniture: ${furnitures.join(', ')}\n`;
        resultElement.textContent += `Total price: ${totalSum.toFixed(2)}\n`;
        resultElement.textContent += `Average decoration factor: ${avgResult}\n`;
    }

    function generate() {
        let input = document.querySelector('textarea').value;
        let objects = JSON.parse(input);

        for (obj of objects) {
            let div = document.createElement('div');
            let pName = document.createElement('p');
            let pPrice = document.createElement('p');
            let pFactor = document.createElement('p');
            let img = document.createElement('img');
            let checkbox = document.createElement('input');

            div.setAttribute('class', 'furniture');
            pName.innerHTML = `Name: ${obj.name}`;
            pPrice.innerHTML = `Price: ${obj.price}`;
            pFactor.innerHTML = `Decoration factor: ${obj.decFactor}`;
            img.src = obj.img;
            checkbox.type = 'checkbox';

            div.appendChild(pName);
            div.appendChild(img);
            div.appendChild(pPrice);
            div.appendChild(pFactor);
            div.appendChild(checkbox);

            outputElement.appendChild(div);
        }
    }

}