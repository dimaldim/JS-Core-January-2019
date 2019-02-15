function solve(input) {
    let result = (function () {
        let str = '';
        return {
            append: (s) => str += s,
            removeStart: (n) => str = str.substring(n),
            removeEnd: (n) => str = str.substring(0, str.length - n),
            print: () => console.log(str),
        }
    })();

    for (let st of input) {
        let [comm, value] = st.split(' ');
        result[comm](value);
    }
}