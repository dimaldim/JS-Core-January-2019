function attachEventsListeners()
{
	const kmInM = 1000;
	const mInM = 1;
	const cmInM = 0.01;
	const mmInM = 0.001;
	const miInM = 1609.34;
	const yrdInM = 0.9144;
	const ftInM = 0.3048;
	const inInM = 0.0254;

	let $input = $('#inputDistance');

	$('#convert').on('click', () =>
	{
		let inputDistance = Number($input.val());
		let inputUnit = $('#inputUnits').val();
		let outputUnit = $('#outputUnits').val();

		let inputDistanceInMeters = getMetersFromInputUnits(inputDistance, inputUnit);
		let distance = convertDistance(inputDistanceInMeters, outputUnit);
		$('#outputDistance').val(distance);
	});

	function getMetersFromInputUnits(distance, inputUnit)
	{
		switch (inputUnit)
		{
			case 'km':
				return distance * kmInM;
			case 'm':
				return distance * mInM;
			case 'cm':
				return distance * cmInM;
			case 'mm':
				return distance * mmInM;
			case 'mi':
				return distance * miInM;
			case 'yrd':
				return distance * yrdInM;
			case 'ft':
				return distance * ftInM;
			case 'in':
				return distance * inInM;
		}
	}

	function convertDistance(inputDistanceInMeters, outputUnit)
	{
		switch (outputUnit)
		{
			case 'km':
				return inputDistanceInMeters / kmInM;
			case 'm':
				return inputDistanceInMeters / mInM;
			case 'cm':
				return inputDistanceInMeters / cmInM;
			case 'mm':
				return inputDistanceInMeters / mmInM;
			case 'mi':
				return inputDistanceInMeters / miInM;
			case 'yrd':
				return inputDistanceInMeters / yrdInM;
			case 'ft':
				return inputDistanceInMeters / ftInM;
			case 'in':
				return inputDistanceInMeters / inInM;
		}
	}
}