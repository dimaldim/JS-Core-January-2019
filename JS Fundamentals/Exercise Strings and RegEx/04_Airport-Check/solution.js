function solve() {
    let input = document.getElementById('str').value.split(', ').filter(x => x !== '');
    let str = input[0];
    let info = input[1];

    let namePattern = /(?: )([A-Z][A-Za-z]*-[A-Z][A-Za-z]*\.-[A-Z][A-Za-z]*)|([A-Z][A-Za-z]*-[A-Z][A-Za-z]*)(?: )/g;
    let airportPattern = /(?: )(([A-Z]{3})\/([A-Z]{3}))(?: )/g;
    let flightPattern = /(?: )([A-Z]{1,3}[\d]{1,5})(?: )/g;
    let companyPattern = /(?: )([A-Z][A-Za-z]*\*[A-Z][A-Za-z]*)(?: )/g;

    let nameMatch = str.match(namePattern);
    let name = nameMatch.toString().replace(/\-/g, ' ').trim();

    let airportMatch = airportPattern.exec(str);
    let fromAirport = airportMatch[2];
    let toAirport = airportMatch[3];

    let flightMatch = flightPattern.exec(str);
    let flight = flightMatch[1].trim();

    let companyMatch = companyPattern.exec(str);
    let company = companyMatch[1].toString().replace(/\-/g, '').replace('*', ' ').trim();

    let resultElement = document.getElementById('result');
    switch (info) {
        case 'name':
            resultElement.textContent = `Mr/Ms, ${name}, have a nice flight!`;
            break;
        case 'flight':
            resultElement.textContent = `Your flight number ${flight} is from ${fromAirport} to ${toAirport}.`;
            break;
        case 'company':
            resultElement.textContent = `Have a nice flight with ${company}.`;
            break;
        case 'all':
            resultElement.textContent = `Mr/Ms, ${name}, your flight number ${flight} is from ${fromAirport} to ${toAirport}. Have a nice flight with ${company}.`;
            break;
    }
}