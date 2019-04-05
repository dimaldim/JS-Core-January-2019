$(() =>
{
	render();

	function render()
	{
		const source = $('#monkey-template').html();
		const template = Handlebars.compile(source);
		const html = template({monkeys});

		$('.monkeys').html(html);

		$('button').on('click', function (e)
		{
			let btn = $(e.target);
			let p = btn.next();
			if (p.attr('style'))
			{
				p.removeAttr('style');
				btn.text('Hide info');
			} else
			{
				p.css('display', 'none');
				btn.text('Info');
			}
		})
	}
});
