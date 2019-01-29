function solve(fruit, qt, price) {
    let kg = (qt / 1000);
    let moneyNeeded = price * kg;
    console.log(`I need ${moneyNeeded.toFixed(2)} leva to buy ${kg.toFixed(2)} kilograms ${fruit}.`)
}

solve('orange', 2500, 1.80);