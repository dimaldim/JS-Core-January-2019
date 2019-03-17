function solve() {
    let buildKingdomBtn = $('#kingdom button');
    let joinBtn = $('#characters button');
    let warBtn = $('#actions button');
    let validKingdoms = [
        'castle',
        'dungeon',
        'fortress',
        'inferno',
        'necropolis',
        'rampart',
        'stronghold',
        'tower',
        'conflux'
    ];
    let kingdoms = [];

    warBtn.on('click', () => {
        let attacker = $('#actions input')[0].value.toLowerCase();
        let defender = $('#actions input')[1].value.toLowerCase();
        let attackerPts = 0;
        let defenderPts = 0;
        if (kingdoms.indexOf(attacker) === -1) {
            $('#actions input')[0].value = '';
        }
        if (kingdoms.indexOf(defender) === -1) {
            $('#actions input')[1].value = '';
        }
        if (kingdoms.indexOf(attacker) !== -1 && kingdoms.indexOf(defender) !== -1) {
            let attackerTanks = Number($('#' + attacker + ' p')[0].textContent.match(/(\d+)/)[0]) * 20;
            let attackerFighters = Number($('#' + attacker + ' p')[1].textContent.match(/(\d+)/)[0]) * 50;
            let attackerMages = Number($('#' + attacker + ' p')[2].textContent.match(/(\d+)/)[0]) * 70;

            let defenderTanks = Number($('#' + defender + ' p')[0].textContent.match(/(\d+)/)[0]) * 80;
            let defenderFighters = Number($('#' + defender + ' p')[1].textContent.match(/(\d+)/)[0]) * 50;
            let defenderMages = Number($('#' + defender + ' p')[2].textContent.match(/(\d+)/)[0]) * 30;

            attackerPts = attackerTanks + attackerFighters + attackerMages;
            defenderPts = defenderTanks + defenderFighters + defenderMages;

            if (attackerPts > defenderPts) {
                $('#' + defender + ' h2')[0].textContent = $('#' + attacker + ' h2')[0].textContent;
            }
        }
    });

    joinBtn.on('click', () => {
        let kingdomToJoin = $('#characters input[type=text]')[1].value.toLowerCase();
        let characterName = $('#characters input[type=text]')[0].value;
        let characterType = $('#characters input[type=radio]:checked')[0].value;
        if (kingdoms.indexOf(kingdomToJoin) === -1) {
            $('#characters input[type=text]')[1].value = '';
        }
        if (kingdoms.indexOf(kingdomToJoin !== -1) && characterType) {
            let tanksNum = Number($('#' + kingdomToJoin + ' p')[0].textContent.match(/(\d+)/)[0]);
            let fightersNum = Number($('#' + kingdomToJoin + ' p')[1].textContent.match(/(\d+)/)[0]);
            let magesNum = Number($('#' + kingdomToJoin + ' p')[2].textContent.match(/(\d+)/)[0]);
            if (characterType === 'fighter') {
                fightersNum++;
                $('#' + kingdomToJoin + ' p')[1].textContent = `FIGHTERS - ${fightersNum}`;
            }
            if (characterType === 'mage') {
                magesNum++;
                $('#' + kingdomToJoin + ' p')[2].textContent = `MAGES - ${magesNum}`;
            }
            if (characterType === 'tank') {
                tanksNum++;
                $('#' + kingdomToJoin + ' p')[0].textContent = `TANKS - ${tanksNum}`;
            }
            $('#' + kingdomToJoin + ' .armyOutput')[0].innerHTML += characterName + ' ';
        }
    });

    buildKingdomBtn.on('click', () => {
        let kingdomName = $('#kingdom input')[0].value.toLowerCase();
        let kingName = $('#kingdom input')[1].value;
        if (kingName.length < 2) {
            $('#kingdom input')[1].value = '';
        }
        if (validKingdoms.indexOf(kingdomName) === -1) {
            $('#kingdom input')[0].value = '';
        }
        if (kingName.length >= 2 && validKingdoms.indexOf(kingdomName) !== -1) {
            let element = $('#' + kingdomName);
            element.css('display', 'inline-block');
            element.append($('<h1>').text(kingdomName.toUpperCase()));
            element.append($('<div>').addClass('castle'));
            element.append($('<h2>').text(kingName.toUpperCase()));
            element.append($('<fieldset>')
                .append($('<legend>').text('Army'))
                .append($('<p>').text('TANKS - 0'))
                .append($('<p>').text('FIGHTERS - 0'))
                .append($('<p>').text('MAGES - 0'))
                .append($('<div>').addClass('armyOutput')));
            kingdoms.push(kingdomName);
        }
    });
}

solve();



