function solve(input) {
    let cars = {};

    let commands = {
        create: (str) => {
            let parts = str.split(' ').filter(x => x !== '');
            let name = parts[1];
            if (parts.length > 2) {
                cars[name] = Object.create(cars[parts[3]]);
            } else {
                cars[name] = {};
            }
        },
        set: (str) => {
            let parts = str.split(' ').filter(x => x !== '');
            let name = parts[1];
            let key = parts[2];
            let value = parts[3];

            cars[name][key] = value;
        },
        print: (str) => {
            let parts = str.split(' ');
            let name = parts[1];

            let result = [];
            let currentCar = cars[name];

            for (let key in currentCar) {
                result.push(`${key}:${currentCar[key]}`);
            }

            console.log(result.join(', '));
        }
    };

    for (let str of input) {
        let command = str.split(' ')[0];
        commands[command](str);
    }
}