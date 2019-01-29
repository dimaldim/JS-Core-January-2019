(function () {
    let button = document.querySelector('#exercise button');
    button.addEventListener('click', generateCards);

    function generateCards() {
        let from = document.getElementById('from').value;
        let to = document.getElementById('to').value;
        let suitChoosen = document.querySelector('#exercise select').selectedIndex;
        let unicode = getSuit(suitChoosen);
        let resultElement = document.getElementById('cards');

        let numbers = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        let cards = [];

        if (numbers.indexOf(from) !== -1 && numbers.indexOf(to) !== -1) {
            for (let i = numbers.indexOf(from); i <= numbers.indexOf(to); i++) {
                let card = {
                    suit: unicode,
                    value: numbers[i]
                };
                cards.push(card);
            }
            for (let card of cards) {
                let div = document.createElement('div');
                let leftP = document.createElement('p');
                let middleP = document.createElement('p');
                let rightP = document.createElement('p');
                div.setAttribute('class', 'card');
                div.appendChild(leftP);
                div.appendChild(middleP);
                div.appendChild(rightP);
                leftP.innerHTML = card.suit;
                middleP.innerHTML = card.value;
                rightP.innerHTML = card.suit;
                resultElement.appendChild(div);
            }

        }
    }

    function getSuit(suitChoosen) {
        switch (suitChoosen) {
            case 0:
                unicode = '&hearts;';
                break;
            case 1:
                unicode = '&spades;';
                break;
            case 2:
                unicode = '&diamond;';
                break;
            case 3:
                unicode = '&clubs;';
                break;
        }

        return unicode;
    }
})();