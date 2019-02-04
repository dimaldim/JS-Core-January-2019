function solve() {
    let addNewTruckBtn = Array.from(document.querySelectorAll('button'))[0];
    let trucks = [];
    let trucksElement = Array.from(document.querySelectorAll('fieldset'))[4].children[1];

    console.log(trucksElement);

    addNewTruckBtn.addEventListener('click', addTruck);
    
    function addTruck() {
        let div = document.createElement('div');
        div.setAttribute('class', 'truck');
        div.innerHTML = document.getElementById('newTruckPlateNumber').value;
        trucksElement.appendChild(div);
    }
}