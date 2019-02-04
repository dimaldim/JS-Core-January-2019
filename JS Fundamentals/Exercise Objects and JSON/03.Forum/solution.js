function solve() {
    let submitBtn = Array.from(document.querySelectorAll('form > button'))[0];
    submitBtn.addEventListener('click', addUser);
    let searchBtn = Array.from(document.querySelectorAll('button'))[1];
    searchBtn.addEventListener('click', search);

    let table = document.querySelector('table tbody');

    function search() {
        let searchFor = Array.from(document.getElementsByTagName('input'))[7].value;
        let rows = document.querySelectorAll('tbody td');

        if (searchFor.length > 0) {
            for (let i = 0; i < rows.length; i++) {
                if (rows[i].textContent.toLowerCase().includes(searchFor.toLowerCase()) === true) {
                    rows[i].parentNode.style.visibility = 'visible';
                } else {
                    rows[i].parentNode.style.visibility = 'hidden';
                }
            }
        }
    }

    function addUser(e) {
        e.preventDefault();

        let inputs = Array.from(document.querySelectorAll('.user-info > input'));
        let username = inputs[0].value;
        let password = inputs[1].value;
        let email = inputs[2].value;
        let topics = [];
        let checkedTopics = Array.from(document.querySelectorAll('input:checked'));
        checkedTopics.forEach(item => topics.push(item.value));

        let userData = {
            'username': username,
            'password': password,
            'email': email,
            'topics': topics.join(' '),
        };

        let row = table.insertRow();
        row.style.visibility = 'visible';
        let cell1 = row.insertCell();
        let cell2 = row.insertCell();
        let cell3 = row.insertCell();
        cell1.innerHTML = username;
        cell2.innerHTML = email;
        cell3.innerHTML = topics.join(' ');

        console.log(users);
    }
}