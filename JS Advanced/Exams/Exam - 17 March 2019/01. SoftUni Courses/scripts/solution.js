function solve() {
    let btn = $('button');
    let courses = [];
    let totalPrice = 0;
    let availableCourses = {
        'js-fundamentals': 170,
        'js-advanced': 180,
        'js-applications': 190,
        'js-web': 490,
        'HTML and CSS': 0
    };
    btn.on('click', () => {
        let coursesPicked = Array.from($('input[type=checkbox]:checked'));
        let form = $('input[name=educationForm]:checked').val();
        coursesPicked.forEach((checkbox) => {
            courses.push(checkbox.value);
        });
        if (courses.includes('js-fundamentals') && courses.includes('js-advanced')) {
            availableCourses['js-advanced'] -= availableCourses['js-advanced'] * 0.1;
        }
        if (courses.includes('js-fundamentals') && courses.includes('js-advanced') && courses.includes('js-applications')) {
            console.log(availableCourses);
            availableCourses['js-applications'] = (availableCourses['js-fundamentals'] + availableCourses['js-advanced'] + 190) - (availableCourses['js-fundamentals'] + availableCourses['js-advanced'] + 190) * 0.06;
            availableCourses['js-fundamentals'] = 0;
            availableCourses['js-advanced'] = 0;
        }
        if (courses.includes('js-fundamentals') && courses.includes('js-advanced') &&
            courses.includes('js-applications') && courses.includes('js-web')) {
            courses.push('HTML and CSS');
        }
        courses.forEach((course) => {
            totalPrice += availableCourses[course];
            if (course === 'js-fundamentals') {
                course = 'JS-Fundamentals';
            } else if (course === 'js-advanced') {
                course = 'JS-Advanced';
            } else if (course === 'js-applications') {
                course = 'JS-Applications';
            } else if (course === 'js-web') {
                course = 'JS-Web';
            }
            let courseBody = $('#myCourses .courseBody ul');
            courseBody.append($(`<li>${course}</li>`));
        });
        if (form === 'online') {
            totalPrice -= totalPrice * 0.06;
        }
        $('.courseFoot > p').text(`Cost: ${Math.floor(totalPrice).toFixed(2)} BGN`);
    });
}

solve();