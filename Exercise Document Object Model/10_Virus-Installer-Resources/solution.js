function solve() {
    let nextBtn = document.getElementById("buttons").children[0];
    let cancelBtn = document.getElementById("buttons").children[1];
    let agreeCheck = document.getElementsByName('license');
    let firstPage = true;
    let secondPage = false;
    let thirdPage = false;
    nextBtn.addEventListener('click', event);
    cancelBtn.addEventListener('click', cancelEvent);

    function event() {
        if (firstPage) {
            firstEvent();
        } else if (agreeCheck[0].checked && secondPage) {
            secondEvent();
        } else if (thirdPage) {
            thirdEvent();
        }
    }

    function firstEvent() {
        document.getElementById("content").style.backgroundImage = 'none';
        document.getElementById("firstStep").style.display = 'block';
        firstPage = false;
        secondPage = true;
    }

    function secondEvent() {
        document.getElementById("firstStep").style.display = 'none';
        document.getElementById("secondStep").style.display = 'block';
        nextBtn.style.display = "none";
        secondPage = false;
        thirdPage = true;
        setTimeout(function () {
            nextBtn.style.display = "block";
        }, 3000);
    }

    function thirdEvent() {
        document.getElementById("secondStep").style.display = 'none';
        document.getElementById("thirdStep").style.display = 'block';
        nextBtn.style.display = "none";
        cancelBtn.textContent = 'Finish';
    }

    function cancelEvent() {
        document.getElementsByTagName('section')[0].style.display = 'none';
    }
}