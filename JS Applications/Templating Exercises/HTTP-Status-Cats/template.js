$(() =>
{
	renderCatTemplate();

	function renderCatTemplate()
	{
		const source = $('#cat-template').html();
		const template = Handlebars.compile(source);

		const html = template({cats});
		$('#allCats').html(html);

		$("button").on("click", function (e)
		{
			let btn = $(e.target);
			let div = btn.next();
			if (div.attr('style'))
			{
				btn.text('Hide status Code');
				div.removeAttr('style');
			} else
			{
				btn.text('Show status code');
				div.attr('style', 'display: none')
			}
		});
	}
});
