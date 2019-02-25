function initializeTable() {

    $('#createLink').on('click', addCountry);

    function addRow(country, capital) {
        let tr = $('<tr>')
            .append($('<td>').text(country))
            .append($('<td>').text(capital))
            .append($('<td>')
                .append($('<a href="#">[Up]</a>').on('click', moveUp))
                .append($('<a href="#">[Down]</a>').on('click', moveDown))
                .append($('<a href="#">[Delete]</a>').on('click', deleteRow)));

        tr.appendTo($('#countriesTable'));
    }

    addRow('Bulgaria', 'Sofia');
    addRow('Germany', 'Berlin');
    addRow('Russia', 'Moscow');

    function addCountry() {
        let country = $('#newCountryText').val();
        let capital = $('#newCapitalText').val();

        addRow(country, capital);

        $('#newCountryText').val("");
        $('#newCapitalText').val("");
    }

    function moveUp() {
        let row = $(this).parent().parent();
        row.fadeOut(function () {
            row.prev().before(row);
            row.fadeIn();
        });
    }

    function moveDown() {
        let row = $(this).parent().parent();
        row.fadeOut(function () {
            row.next().after(row);
            row.fadeIn();
        });
    }

    function deleteRow() {

        $(this).parent().parent().fadeOut(function () {
            this.remove();
        });

    }


}