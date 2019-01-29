function solve() {
    let search = document.getElementById('searchField');
    let button = document.getElementById('searchBtn');
    let selected = document.getElementsByClassName('select');

    let rows = document.querySelectorAll('tbody td');

    button.addEventListener('click', doSearch);

    function doSearch() {
        if (search.value.length > 0) {
            for (let j = 0; j < rows.length; j++) {
                if (rows[j].textContent.toLowerCase().includes(search.value.toLowerCase()) === true) {
                    rows[j].parentNode.className = 'select';
                }
            }
            search.value = '';
        }
    }
}