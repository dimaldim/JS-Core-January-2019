function showDetails(id)
{
	$(`#${id}`).toggle();
}

$(() =>
{
	render();

	async function render()
	{
		const source = await $.get('./template.html');
		const template = Handlebars.compile(source);
		const html = template({contacts});

		$('.contacts').html(html);
	}
});
