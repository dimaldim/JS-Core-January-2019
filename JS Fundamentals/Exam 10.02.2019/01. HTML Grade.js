function solve(examPoints, homeworkCompleted, totalHomework) {
    const maxPoints = 100;
    const maxExamPoints = 400;
    let totalPoints = 0;
    let bonus = 0;
    let grade = 0;

    if (examPoints === maxExamPoints) {
        console.log('6.00');
        return;
    }
    bonus = (homeworkCompleted / totalHomework) * 10;

    totalPoints += ((Number(examPoints) / maxExamPoints) * 0.9 * 100);
    totalPoints += bonus;

    grade = 3 + 2 * (totalPoints - maxPoints / 5) / (maxPoints / 2);

    if (grade >= 3.00 && grade <= 6.00) {
        console.log(grade.toFixed(2));
    } else if (grade < 3.00) {
        console.log('2.00');
    } else if (grade > 6.00) {
        console.log('6.00');
    }

}

solve(399, 10, 10);