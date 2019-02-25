function getFibonator() {
    let sum, first = 0;
    let second = 1;

    return () => {
        sum = first + second;
        first = second;
        second = sum;
        return first;
    }
}