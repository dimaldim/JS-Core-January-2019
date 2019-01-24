function solve() {
    let button = document.querySelector('#exercise button');
    button.addEventListener('click', addToDb);

    function addToDb() {
        let name = document.getElementsByTagName('input')[0].value;

        let listParent = document.querySelector('ol');
        let itemsArray = Array.prototype.slice.call(listParent.children);

        itemsArray.sort((a, b) => {
            if (a.innerText < b.innerText) return -1;
            if (a.innerText > b.innerText) return 1;
            return 0;
        });

        itemsArray.forEach(function (item) {
            // one by one move to the end in correct order
            listParent.appendChild(item);
        });

        console.log(itemsArray);
    }
}
