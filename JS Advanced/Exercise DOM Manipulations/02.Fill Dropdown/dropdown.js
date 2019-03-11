function addItem() {
    let text = $('#newItemText').val();
    let value = $('#newItemValue').val();

    let option = $('<option>');
    option.attr('value', value);
    option.text(text);

    $('#menu').append(option);

    $('#newItemText').val('');
    $('#newItemValue').val('');
}