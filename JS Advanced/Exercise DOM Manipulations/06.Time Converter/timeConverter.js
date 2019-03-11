function attachEventsListeners()
{
	const hoursPerDay = 24;
	const minutesPerHour = 60;
	const secondsPerMinute = 60;

	$('#daysBtn').on('click', () =>
	{
		let days = Number($('#days').val());

		let hours = days * hoursPerDay;
		let minutes = hours * minutesPerHour;
		let seconds = minutes * secondsPerMinute;

		$('#hours').val(hours);
		$('#minutes').val(minutes);
		$('#seconds').val(seconds);
	});

	$('#hoursBtn').on('click', () =>
	{
		let hours = Number($('#hours').val());

		let days = hours / hoursPerDay;
		let minutes = hours * minutesPerHour;
		let seconds = minutes * secondsPerMinute;

		$('#days').val(days);
		$('#minutes').val(minutes);
		$('#seconds').val(seconds);
	});

	$('#minutesBtn').on('click', () =>
	{
		let minutes = Number($('#minutes').val());

		let hours = minutes / minutesPerHour;
		let days = hours / hoursPerDay;
		let seconds = minutes * secondsPerMinute;

		$('#days').val(days);
		$('#hours').val(hours);
		$('#seconds').val(seconds);
	});

	$('#secondsBtn').on('click', () =>
	{
		let seconds = Number($('#seconds').val());

		let minutes = seconds / secondsPerMinute;
		let hours = minutes / minutesPerHour;
		let days = hours / hoursPerDay;

		$('#days').val(days);
		$('#hours').val(hours);
		$('#minutes').val(minutes);
	});
}