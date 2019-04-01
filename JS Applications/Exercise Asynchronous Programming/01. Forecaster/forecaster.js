function attachEvents() {
    var url = 'https://judgetests.firebaseio.com/locations.json';
    var urlToday = 'https://judgetests.firebaseio.com/forecast/today/';
    var urlUpcoming = 'https://judgetests.firebaseio.com/forecast/upcoming/';
    let conditions = {
        Rain: '&#x2614;',
        Sunny: '&#x2600;',
        Partlysunny: '&#x26C5;',
        Overcast: '&#x2601;',
        Degrees: '&#176;'
    };

    var btn = $('#submit');
    btn.on('click', showWeather);

    async function showWeather() {
        try {
            let towns = await $.ajax({
                url: url,
                method: 'GET'
            });
            let location = $('#location');
            let town = towns.filter(x => x.name === location.val())[0];
            if (town) {
                let todayWeather = await $.ajax({
                    url: `${urlToday}${town.code}.json`,
                    method: 'GET'
                });
                let upcomingWeather = await $.ajax({
                    url: `${urlUpcoming}${town.code}.json`,
                    method: 'GET'
                });
                display(town, todayWeather, upcomingWeather);
            } else {
                location.val('');
            }
        } catch (err) {
            console.log(err);
        }
    }

    function display(town, weatherToday, weatherUpcoming) {
        $('#forecast').css('display', 'block');

        let current = $('#current');
        console.log(weatherUpcoming);
        let conditionSymbol = $('<span>').addClass('condition symbol').html(`${conditions[weatherToday.forecast.condition.split(' ').join('')]}`);
        current.append(conditionSymbol);

        let conditionSpan = $('<span>').addClass('condition');
        current.append(conditionSpan);
        conditionSpan
            .append($('<span>').addClass('forecast-data').text(weatherToday.name))
            .append($('<span>').addClass('forecast-data').html(`${weatherToday.forecast.low}${conditions.Degrees}/${weatherToday.forecast.high}${conditions.Degrees}`))
            .append($('<span>').addClass('forecast-data').text(weatherToday.forecast.condition))
        let upcoming = $('#upcoming');
        for (let item of weatherUpcoming.forecast) {
            let spanUpcoming = $('<span>').addClass('upcoming');
            spanUpcoming
                .append($('<span>').addClass('symbol').html(conditions[item.condition.split(' ').join('')]))
                .append($('<span>').addClass('forecast-data').html(`${item.low}${conditions.Degrees}/${item.high}${conditions.Degrees}`))
                .append($('<span>').addClass('forecast-data').text(`${item.condition}`));
            upcoming.append(spanUpcoming);
        }
    }
}