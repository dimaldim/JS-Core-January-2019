function increment(selector)
{
    let container = $(selector);
    let fragment = document.createDocumentFragment();
    let textArea = $('<textarea>');
    let incrBtn = $('<button>Increment</button>');
    let addBtn = $('<button>Add</button>');
    let list = $('<ul>');

    textArea.addClass('counter');
    textArea.val('0');
    textArea.attr('disabled', 'true');

    incrBtn.addClass('btn');
    incrBtn.attr('id', 'incrementBtn');

    addBtn.addClass('btn');
    addBtn.attr('id', 'addBtn');

    list.addClass('results');

    $(incrBtn).on('click', function ()
    {
        textArea.val(+textArea.val() + 1);
    });

    (addBtn).on('click', function ()
    {
        let li = $(`<li>${textArea.val()}</li>`);
        li.appendTo(list);
    });


    textArea.appendTo(fragment);
    incrBtn.appendTo(fragment);
    addBtn.appendTo(fragment);
    list.appendTo(fragment);

    container.append(fragment);
}
