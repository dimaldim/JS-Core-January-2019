function solve(arr, command) {
    let com = command.split(/\W+/);
    if (com[0] === 'sort') {
        let sortBy = com[1];
        let column = arr[0].indexOf(sortBy);
        let newArr = arr.sort((a, b) => b[1] - a[1]);
        newArr.forEach(value => {
            console.log(value.join(' | '));
        })
    } else if (com[0] === 'hide') {
        let deleteColumn = com[1];
        let indexHide = arr[0].indexOf(deleteColumn);
        arr.forEach(x => x.splice(indexHide, 1));
        arr.forEach(x => console.log(x.join(' | ')));
    } else if (com[0] === 'filter') {
        let column = com[1];
        let filterBy = com[2];
        let columnIndex = arr[0].indexOf(column);
        console.log(arr[0].join(' | '));
        arr.forEach(val => {
            if (val[columnIndex] === filterBy) {
                console.log(val.join(' | '));
            }
        });
    }
}

solve([['firstName', 'age', 'grade', 'course'],
        ['Peter', '25', '5.00', 'JS-Core'],
        ['George', '34', '6.00', 'Tech'],
        ['Marry', '28', '5.49', 'Ruby']],
    'sort grade'
);