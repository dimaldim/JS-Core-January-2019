function solve() {
    let buttons = Array.from(document.querySelectorAll('button.seat'));
    let sumBtn = document.querySelector('#summary>button');
    let output = document.getElementById('output');
    let resultElement = document.querySelector('#summary>span');
    let totalSum = 0;
    let fans = 0;

    buttons.forEach(x => x.addEventListener('click', add));

    sumBtn.addEventListener('click', summary);

    function summary() {
        resultElement.textContent = `${totalSum} leva, ${fans} fans.`;
    }

    function add(e) {
        let button = e.target;
        let buttonIndex = buttons.indexOf(button);
        let parent = button.parentElement.parentElement.parentElement.parentElement.parentElement.className;
        //let titles = e.path[5].children[0].textContent;
        let sector = () => {
            if (buttonIndex % 3 === 0) {
                return 'A';
            } else if (buttonIndex % 3 === 1) {
                return 'B';
            } else {
                return 'C';
            }
        };
        if (button.getAttribute('available') !== 'none') {
            button.style.backgroundColor = 'rgb(255, 0, 0)';
            button.setAttribute('available', 'none');
            if (parent === 'Levski' || parent === 'Litex') {
                if (sector() === 'A') {
                    totalSum += 10;
                } else if (sector() === 'B') {
                    totalSum += 7;
                } else {
                    totalSum += 5;
                }
            } else {
                if (sector() === 'A') {
                    totalSum += 25;
                } else if (sector() === 'B') {
                    totalSum += 15;
                } else {
                    totalSum += 10;
                }
            }
            fans++;
            output.textContent += ` Seat ${button.textContent} in zone ${parent} sector ${sector()} was taken.\n`;
        } else {
            output.textContent += ` Seat ${button.textContent} in zone ${parent} sector ${sector()} is unavailable.\n`;
        }
    }
}