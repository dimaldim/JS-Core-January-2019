function solve(steps, footLength, speed) {
    distance = steps * footLength;
    distanceKm = distance / 1000;
    relaxInMins = Math.floor(distance / 500);
    timeInSeconds = Math.ceil((distanceKm / speed) * 60 * 60) + (relaxInMins * 60);

    hours = Math.floor(timeInSeconds / 3600);
    mins = Math.floor(timeInSeconds / 60);
    timeInSeconds -= mins * 60;

    totalTime = ('0' + hours).slice(-2) + ':' + ('0' + mins).slice(-2) + ':' + ('0' + timeInSeconds).slice(-2);

    return totalTime;
}

console.log(solve(4000, 0.60, 5));