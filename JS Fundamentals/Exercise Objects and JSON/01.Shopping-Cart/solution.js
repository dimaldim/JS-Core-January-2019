function solve() {
    let cart = [];

    let buttons = Array.from(document.querySelectorAll('.product button'));
    let buyBtn = document.querySelectorAll('#exercise button')[3];

    buttons.forEach(button => {
        button.addEventListener('click', addProduct);
    });

    buyBtn.addEventListener('click', buy);

    function buy() {
        let list = new Set();
        let cartSum = 0;

        for (let item of cart) {
            cartSum += Number(item['price']);
            list.add(item['product']);
        }

        document.getElementsByTagName('textarea')[0].value += `You bought ${Array.from(list.keys()).join(', ')} for ${cartSum.toFixed(2)}.\n`;

    }

    function addProduct(e) {
        let product = e.target.parentNode.children[1].textContent;
        let price = Number(e.target.parentNode.children[2].textContent.split(': ')[1]);

        cart.push({'product': product, 'price': price});

        console.log(cart);
        document.getElementsByTagName('textarea')[0].value += `Added ${product} for ${price.toFixed(2)} to the cart.\n`
    }
}