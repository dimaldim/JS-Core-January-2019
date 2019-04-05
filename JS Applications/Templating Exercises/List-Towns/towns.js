function attachEvents()
{
	$('#btnLoadTowns').on('click', function ()
	{
		let towns = $('#towns').val()
		.split(', ')
		.filter(x => x)
		.map(x =>
		{
			return {name: x}
		});

		const source = $('#towns-template').html();
		const template = Handlebars.compile(source);
		const html = template({towns});

		$('#root').html(html);
	});

}
