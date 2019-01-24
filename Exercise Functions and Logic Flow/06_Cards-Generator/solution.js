(function () {
    let button = document.querySelector('#exercise button');
    button.addEventListener('click', generateCards);

    function generateCards() {
        let from = document.getElementById('from').value;
        let to = document.getElementById('to').value;
        let suit = Array.from(document.getElementsByTagName('select'))[0].value.slice(0, -2);
        if (from.length > 0 && to.length > 0) {
            if (from === 'J') {
                from = 11;
            } else if (from === 'Q') {
                from = 12;
            } else if (from === 'K') {
                from = 13;
            } else if (from === 'A') {
                from = 14;
            }

            if (to === 'J') {
                to = 11;
            } else if (to === 'Q') {
                to = 12;
            } else if (to === 'K') {
                to = 13;
            } else if (to === 'A') {
                to = 14;
            }

            for (let i = from; i <= to; i++) {
                let card = i;
                let code;
                if (i === 11) {
                    card = 'J';
                } else if (i === 12) {
                    card = 'Q';
                } else if (i === 13) {
                    card = 'K';
                } else if (i === 14) {
                    card = 'A';
                }
                switch (suit) {
                    case 'Hearts':
                        code = '&hearts;';
                        break;
                    case 'Spades':
                        code = '&spades;';
                        break;
                    case 'Diamonds':
                        code = '&diamond;';
                        break;
                    case 'Clubs':
                        code = '&clubs;';
                        break;

                }
                let div = document.createElement('div');
                div.setAttribute('class', 'card');
                let leftP = document.createElement('p');
                let middleP = document.createElement('p');
                let rightP = document.createElement('p');
                leftP.innerHTML = code;
                middleP.textContent = card;
                rightP.innerHTML = code;
                div.appendChild(leftP);
                div.appendChild(middleP);
                div.appendChild(rightP);
                document.getElementById('cards').appendChild(div);
            }
        }
    }
})();