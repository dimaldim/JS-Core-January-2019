function solve() {
    let args = argumentInfo.arguments;
    let objects = {};

    for (let item of args) {
        let type = typeof (item);
        if (!objects.hasOwnProperty(type)) {
            objects[type] = 0;
        }
        objects[type]++;

        console.log(`${type}: ${item}`);
    }

    Object.keys(objects).sort((a, b) => {
        return objects[b] - objects[a];
    }).forEach(x => {
        console.log(`${x} = ${objects[x]}`);
    });
}