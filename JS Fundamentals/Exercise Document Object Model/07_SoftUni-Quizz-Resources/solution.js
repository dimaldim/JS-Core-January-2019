function solve() {
    let allQuestionsElements = document.querySelectorAll('#exercise section');
    let questionCounter = 0;
    let rightAnswers = ['2013', 'Pesho', 'Nakov'];
    let answersGiven = [];

    for (let questionElement of allQuestionsElements) {
        let button = questionElement.querySelector('button');
        button.addEventListener('click', () => SolveQuestion(questionElement));
    }

    function GetResult() {
        let rightAnswersCounter = 0;
        for (let i = 0; i < rightAnswers.length; i++) {
            if (rightAnswers[i] === answersGiven[i]) {
                rightAnswersCounter++;
            }
        }

        let resultDivElement = document.getElementById('result');

        if (rightAnswersCounter === rightAnswers.length) {
            resultDivElement.textContent = 'You are recognized as top SoftUni fan!';
        } else {
            resultDivElement.textContent = `You have ${rightAnswersCounter} right answers`;
        }
    }

    function SolveQuestion(questionElement) {
        let radioChoices = questionElement.querySelectorAll('input');

        for (let radio of radioChoices) {
            if (radio.checked) {
                answersGiven[questionCounter] = radio.value;
                break;
            }
        }
        questionCounter++;

        if (questionCounter >= allQuestionsElements.length) {
            GetResult();
            return;
        }

        allQuestionsElements[questionCounter].removeAttribute('class');
    }
}