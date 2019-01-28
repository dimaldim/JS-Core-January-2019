function solve() {
    let input = JSON.parse(document.getElementById('arr').value);
    let resultElement = document.getElementById('result');

    let categories = {
        'BulgarianArmy': 0,
        'CivilProtection': 0,
        'Diplomatic': 0,
        'Foreigners': 0,
        'Transient': 0,
        'Sofia': 0,
        'Province': 0,
        'Other': 0
    };

    input.forEach((value) => {
        if (/BA [0-9]{3} [0-9]{3}/gm.test(value)) {
            categories['BulgarianArmy']++;
        } else if (/CP [0-9]{2} [0-9]{3}/gm.test(value)) {
            categories['CivilProtection']++;
        } else if (/^(C|CT) [0-9]{4}$/gm.test(value)) {
            categories['Diplomatic']++;
        } else if (/XX [0-9]{4}/gm.test(value)) {
            categories['Foreigners']++;
        } else if (/[0-9]{3} [A-Z] [0-9]{3}/gm.test(value)) {
            categories['Transient']++;
        } else if (/(C|CA|CB) [0-9]{4} [A-Z]{1,2}/gm.test(value)) {
            categories['Sofia']++;
        } else if (/(?![C|[CA]|[CB]])[A-Z]{1,2} [0-9]{4} [A-Z]{1,2}/gm.test(value)) {
            categories['Province']++;
        } else {
            categories['Other']++;
        }
    });
    let result = [];
    for (var category in categories) {
        result.push([category, categories[category]]);
    }
    result.sort((a, b) => {
        return b[1] - a[1] || a[0].localeCompare(b[0]);
    });
    result.forEach((value) => {
        let p = document.createElement('p');
        p.textContent = `${value[0]} -> ${value[1]}`;
        resultElement.appendChild(p);
    });
}