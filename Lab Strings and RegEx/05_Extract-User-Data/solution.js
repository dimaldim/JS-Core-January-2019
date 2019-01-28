function solve() {
    //let input = JSON.parse(document.getElementById('arr').value).filter(x => x !== '');
    let input = [
        "Test Testov +359 2 123 456 goSho@abv.bg",
        "T T +359-5-759-684 valid@gmail.com",
        "Pesho +359-5 789 654 pesho@abv.bg"
    ];
    input.forEach( (value) => {
        console.log(value.split(' '));
    })
}
solve();