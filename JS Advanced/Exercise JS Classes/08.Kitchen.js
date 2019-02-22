class Kitchen {

    constructor(budget) {
        this.budget = budget;

        this.menu = {};
        this.productsInStock = {};
        this.actionsHistory = [];
    }

    loadProducts(products) {
        products.forEach((val) => {
            let tokens = val.split(' ');
            let productName = tokens[0];
            let productQuantity = tokens[1];
            let productPrice = tokens[2];

            if (this.budget >= productPrice) {
                if (!this.productsInStock.hasOwnProperty(productName)) {
                    this.productsInStock[productName] = +productQuantity;
                } else {
                    this.productsInStock[productName] += +productQuantity;
                }
                this.budget -= productPrice;
                this.actionsHistory.push(`Successfully loaded ${productQuantity} ${productName}`);
            } else {
                this.actionsHistory.push(`There was not enough money to load ${productQuantity} ${productName}`);
            }
        });

        return this.actionsHistory.join('\n').trim();
    }

    addToMenu(meal, neededProducts, price) {
        if (!this.menu.hasOwnProperty(meal)) {
            this.menu[meal] = {
                products: neededProducts,
                price: price
            };
            return `Great idea! Now with the ${meal} we have ${Object.keys(this.menu).length} meals in the menu, other ideas?`;
        } else {
            return `The ${meal} is already in our menu, try something different.`;
        }

    }

    showTheMenu() {
        let str = '';
        if (Object.keys(this.menu).length === 0) {
            return 'Our menu is not ready yet, please come later...';
        } else {
            for (let key in this.menu) {
                str += `${key} - $ ${this.menu[key].price}\n`;
            }
        }
        return str.trim() + '\n';
    }

    makeTheOrder(meal) {
        let result = '';
        if (this.menu.hasOwnProperty(meal)) {
            let mealProducts = this.menu[meal].products;
            let allProductsAvailable = true;
            mealProducts.forEach((val) => {
                let tokens = val.split(' ');
                let product = tokens[0];
                let qty = tokens[1];
                if (!this.productsInStock.hasOwnProperty(product)) {
                    allProductsAvailable = false;
                } else {
                    this.productsInStock[product] -= qty;
                }
            });
            if (allProductsAvailable === false) {
                result = `For the time being, we cannot complete your order (${meal}), we are very sorry...`;
            }
            this.budget += this.menu[meal].price;
        } else {
            result = `There is not ${meal} yet in our menu, do you want to order something else?`;
        }

        return result;
    }
}

let kitchen = new Kitchen(1000);

console.log(kitchen.loadProducts(['Banana 10 5', 'Banana 20 10', 'Strawberries 50 30', 'Yogurt 10 10', 'Yogurt 500 1500', 'Honey 5 50']));

console.log(kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99));
console.log(kitchen.addToMenu('Pizza', ['Flour 0.5', 'Oil 0.2', 'Yeast 0.5', 'Salt 0.1', 'Sugar 0.1', 'Tomato sauce 0.5', 'Pepperoni 1', 'Cheese 1.5'], 15.55));

console.log(kitchen.makeTheOrder('Pizza'));

console.log(kitchen.showTheMenu());