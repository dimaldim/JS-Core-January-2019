function solve(input) {
    let map = new Map();
    let towns = [];

    for (let objects of input) {
        if (!map.has(objects.town)) {
            map.set(objects.town, new Map());
        }
        if (!map.get(objects.town).has(objects.model)) {
            map.get(objects.town).set(objects.model, new Map());
        }

        map.get(objects.town).get(objects.model).set(objects.regNumber, objects.price);
    }
    for (let [town, model] of map) {
        let townProfit = 0;
        let townBrands = {};
        for (let [model, reg] of map.get(town)) {
            for (let [reg, profit] of map.get(town).get(model)) {
                townProfit += profit;
                townBrands = [{ brand: model, reg: reg, profit: profit }];
            }
        }
        towns.push({
            town: town,
            profit: townProfit,
            vignettes: townBrands,

        });
    }
    console.log(towns);
}

solve([{model: 'BMW', regNumber: 'B1234SM', town: 'Varna', price: 2},
    {model: 'BMW', regNumber: 'C5959CZ', town: 'Sofia', price: 8},
    {model: 'Tesla', regNumber: 'NIKOLA', town: 'Burgas', price: 9},
    {model: 'BMW', regNumber: 'A3423SM', town: 'Varna', price: 3},
    {model: 'Lada', regNumber: 'SJSCA', town: 'Sofia', price: 3}]
);