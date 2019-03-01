function timer()
{
	let startTimer = $('#start-timer');
	let pauseTimer = $('#stop-timer');
	let hours = $('#hours');
	let minutes = $('#minutes');
	let seconds = $('#seconds');

	let timer = 0, intervalId, running = false;

	startTimer.on('click', function ()
	{
		if (!running)
		{
			intervalId = setInterval(incrementTime, 1000);
			running = true;
		}
	});

	pauseTimer.on('click', function ()
	{
		clearInterval(intervalId);
		running = false;
	});

	function incrementTime()
	{
		timer++;
		hours.text(("0" + Math.trunc(timer / 3600)).slice(-2));
		minutes.text(("0" + Math.trunc((timer / 60) % 60)).slice(-2));
		seconds.text(("0" + Math.trunc(timer % 60)).slice(-2));
	}
}