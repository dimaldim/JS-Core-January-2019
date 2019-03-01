function solution()
{
	let button = $('#fields button').on('click', add);

	function add()
	{
		let toyType = $('#toyType').val();
		let toyPrice = Number($('#toyPrice').val());
		let toyDescription = $('#toyDescription').val();

		if (toyType === '' || isNaN(toyPrice) || toyDescription === '' || toyDescription.length < 50)
		{
			return;
		}

		$('#christmasGiftShop')
			.append($('<div>').addClass('gift')
				.append($('<img>').attr('src', 'gift.png'))
				.append($('<h2>').text(`${toyType}`))
				.append($('<p>').text(toyDescription))
				.append($('<button>').text(`Buy it for $${toyPrice}`)
					.on('click', function ()
					{
						$(this).parent().remove();
					}
					))
			);

	}
}