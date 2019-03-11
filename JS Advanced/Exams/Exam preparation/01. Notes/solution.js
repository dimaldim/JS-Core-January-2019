function addSticker()
{
	let title = $("input.title").val();
	let text = $("input.content").val();

	if (title && text)
	{
		let li = $('<li>');
		li.attr('class', 'note-content');

		let close = $('<a>');
		close.attr('class', 'button');
		close.text('x');
		close.on('click', () =>
		{
			li.remove();
		});
		li.append(close);

		li.append(`<h2>${title}</h2>`)
			.append(`<hr>`)
			.append(`<p>${text}</p>`);

		$('#sticker-list').append(li);

		$("input.title").val('');
		$("input.content").val('');
	}
}