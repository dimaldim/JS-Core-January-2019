function solve(matrixRows) {
    let matrix = matrixRows.map(
        row => row.split(' ').map(Number));

    let sumFirstDiagonal = 0;
    for (var i = 0; i < matrix.length; i++) {
        sumFirstDiagonal = sumFirstDiagonal + matrix[i][i];
    }
    let sumSecondDiagonal = 0;
    for (var j = 0; j < matrix.length; j++) {
        sumSecondDiagonal = sumSecondDiagonal + matrix[j][matrix.length - 1 - j];
    }

    if (sumFirstDiagonal == sumSecondDiagonal) {
        for (var q = 0; q < matrix.length; q++) {
            for (var z = 0; z < matrix.length; z++) {
                if (q != z && q != matrix.length - 1 - z) {
                    matrix[q][z] = sumFirstDiagonal;
                }
            }
        }
        printMatrix(matrix);
    } else {
        printMatrix(matrix);
    }

    function printMatrix(matrix) {
        for (var i = 0; i < matrix.length; i++) {
            console.log(matrix[i].join(' '))
        }
    }
}