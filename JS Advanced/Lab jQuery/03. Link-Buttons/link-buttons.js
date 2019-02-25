function attachEvents() {
    $('a').on('click', function () {
        $('a').removeClass('selected');
        $(this).addClass('selected');

    });
}