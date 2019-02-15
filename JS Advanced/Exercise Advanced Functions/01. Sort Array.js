function solve(array, method) {
    let sortAscending = (a, b) => a - b;
    let sortDescending = (a, b) => b - a;

    let sortMethod = {
        'asc': sortAscending,
        'desc': sortDescending
    };

    return array.sort(sortMethod[method]);
}