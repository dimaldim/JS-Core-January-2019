function solve(name, age, weight, height) {
    let person = {};
    person.name = name;
    person.personalInfo = {};
    person.personalInfo.age = age;
    person.personalInfo.weight = weight;
    person.personalInfo.height = height;

    let bmi = weight / Math.pow((height / 100), 2);

    person.BMI = Math.round(bmi);
    person.status = getStatus(bmi);

    if (getStatus(bmi) === 'obese') {
        person.recommendation = 'admission required';
    }

    return person;

    function getStatus(bmi) {
        if (bmi < 18.5) {
            return 'underweight';
        } else if (bmi >= 18.5 && bmi < 25) {
            return 'normal';
        } else if (bmi >= 25 && bmi < 30) {
            return 'overweight';
        } else {
            return 'obese';
        }
    }
}