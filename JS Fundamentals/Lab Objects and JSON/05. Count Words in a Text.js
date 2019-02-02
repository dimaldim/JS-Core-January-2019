function solve([input]) {
    let words = input.split(/\W+/).filter(x => x !== '');
    let obj = {};

    for (let word of words) {
        if (!obj.hasOwnProperty(word)) {
            obj[word] = 1;
        } else {
            obj[word]++;
        }
    }

    console.log(JSON.stringify(obj));
}