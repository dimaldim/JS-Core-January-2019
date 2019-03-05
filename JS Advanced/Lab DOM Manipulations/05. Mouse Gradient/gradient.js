function attachGradientEvents()
{
		let $gradient = $('#gradient');
		let $result = $('#result');

		$gradient.on('mousemove', (e) =>
		{
				let rectangle = e.target.getBoundingClientRect();

				let y = parseInt(e.offsetX);
				let x = parseInt(rectangle.left);
				let result = Math.floor((y - x) * 100 / 300);

				$result.text(`${result}%`);
		});
}