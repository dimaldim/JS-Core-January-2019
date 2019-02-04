function solve() {
    const allTrucks = [];
    const allTires = [];
    let allFieldSets = document.querySelectorAll('fieldset');
    Array.from(document.getElementsByTagName("button")).forEach(el => {
        el.addEventListener("click", (e) => DoAction(e));
    });

    function DoAction(e) {

        let buttonName = e.target.innerHTML;

        switch (buttonName) {
            case "Add new truck":
                CreateTruck();
                break;
            case "Add new tires":
                CreateTyres();
                break;
            case "Go to work":
                Work();
                break;
            case "End of the shift":
                Report();
                break;
        }
    }

    function CreateTruck() {
        let plate = document.getElementById("newTruckPlateNumber").value;
        let truckTires = document.getElementById("newTruckTiresCondition").value.split(' ').filter(Boolean).map(Number);
        let newTruck = {
            "truckPlate": plate,
            "Tires": truckTires,
            "Miles": 0
        }
        allTrucks.push(newTruck);
        let trucksDiv = allFieldSets[4].getElementsByTagName('div')[0];
        let newTruckDiv = document.createElement("div");
        newTruckDiv.innerHTML = newTruck.truckPlate;
        newTruckDiv.setAttribute("class", "truck");
        trucksDiv.appendChild(newTruckDiv);
        console.log(newTruck.truckPlate);
    }

    function CreateTyres() {
        let newTyres = document.getElementById("newTiresCondition").value.split(' ').filter(Boolean).map(Number);
        allTires.push(newTyres);
        let tyresDiv = allFieldSets[3].getElementsByTagName('div')[0];
        let newTyreDiv = document.createElement("div");
        newTyreDiv.setAttribute("class", "tireSet");
        newTyreDiv.textContent = newTyres.join(" ");

        tyresDiv.appendChild(newTyreDiv);
    }

    function Work() {
        let distance = +document.getElementById("distance").value;
        let truckPlate = document.getElementById("workPlateNumber").value;
        let truck = allTrucks.reduce((prev, curr) => {
            return (curr.truckPlate === truckPlate) ? curr : prev;
        }, null);

        if (truck === null) {
            return;
        }
        let tyreExhaust = Math.floor(distance / 1000);
        let enoughTyresLeft = truck.Tires.every(x => x - tyreExhaust >= 0);
        if (enoughTyresLeft) {
            truck.Miles += distance;
            let newTyresLife = truck.Tires.map(x => x - tyreExhaust);
            truck.Tires = newTyresLife;
            return;
        }
        if (!allTires.length) {
            return;
        }
        let newTyreComplect = allTires.shift();
        let tyresDiv = allFieldSets[3].getElementsByTagName('div')[0];
        let divToRemove = document.getElementsByClassName("tireSet")[0];
        tyresDiv.removeChild(divToRemove);
        let refreshedTires = [];
        let count = 0;
        for (let tire of truck.Tires) {
            tire += newTyreComplect[count];
            refreshedTires.push(tire);
        }
        truck.Tires = refreshedTires;
        enoughTyresLeft = truck.Tires.every(x => x - tyreExhaust >= 0);
        if (enoughTyresLeft) {
            truck.Miles += distance;
            let newTyresLife = truck.Tires.map(x => x - tyreExhaust);
            truck.Tires = newTyresLife;
            return;
        }
    }

    function Report() {
        let report = "";
        let reportField = document.querySelector("section textarea");
        console.log("found the area");
        for (i = 0; i < allTrucks.length; i++) {
            report += `Truck ${allTrucks[i].truckPlate} has traveled ${allTrucks[i].Miles}.\n`
        }
        report += `You have ${allTires.length} sets of tires left.\n`;
        reportField.textContent = report;
    }
}