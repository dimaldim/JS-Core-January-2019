function solve(arr, workouts) {
    let [sex, weight, height, age] = arr;
    let metabolism;
    let calories;
    let factor;
    switch (sex) {
        case 'm':
            metabolism = 66 + 13.8 * weight + 5 * height - 6.8 * age;
            break;
        case 'f':
            metabolism = 655 + 9.7 * weight + 1.85 * height - 4.7 * age;
            break;
    }
    if (workouts == 1 || workouts == 2) {
        factor = 1.375;
    } else if (workouts >= 3 && workouts <= 5) {
        factor = 1.55;
    } else if (workouts == 6 || workouts == 7) {
        factor = 1.725;
    } else if (workouts > 7) {
        factor = 1.90;
    } else {
        factor = 1.2;
    }

    calories = Math.round(metabolism * factor);

    console.log(calories);
}

solve(['f', 46, 157, 32], 5);