function solve(input) {
    let map = new Map();

    for (line of input) {
        let tokens = line.split(' | ');
        let town = tokens[0];
        let product = tokens[1];
        let price = Number(tokens[2]);

        if (!map.has(product)) {
            map.set(product, new Map());
        }

        map.get(product).set(town, price);
    }

    for (let [product, inMap] of map) {
        let lowestPrice = Number.POSITIVE_INFINITY;
        let lowestPricTown = '';
        for (let [town, price] of inMap) {
            if (price < lowestPrice) {
                lowestPrice = price;
                lowestPricTown = town;
            }
        }

        console.log(`${product} -> ${lowestPrice} (${lowestPricTown})`);
    }
}