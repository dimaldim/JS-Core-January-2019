function printDeckOfCards(cards) {
    function makeCard(face, suit) {
        const faces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        const suits = {
            'S': '\u2660',
            'H': '\u2665',
            'D': '\u2666',
            'C': '\u2663',
        }

        if (!faces.includes(face)) {
            throw new Error(`${face}${suit}`);
        }

        if (!suits.hasOwnProperty(suit)) {
            throw new Error(`${face}${suit}`);
        }

        return `${face}${suits[suit]}`;
    }

    try {
        let result = cards.map(c => {
            let face = c.substr(0, c.length - 1);
            let suit = c.substr(c.length - 1, 1);

            return makeCard(face, suit);
        });

        console.log(result.join(' '));
    } catch (error) {
        console.log(`Invalid card: ${error.message}`);
    }
}