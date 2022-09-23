function timeToWalk(steps, footprint, speed) {
    let distanceInMeters = steps * footprint;
    let speedMetersInSeconds = speed / 3.6;
    let minutesForRest = Math.floor(distanceInMeters / 500);
    let time = distanceInMeters / speedMetersInSeconds;

    let timeInMin = Math.floor(time / 60);
    let timeInSeconds = Number((time - (timeInMin * 60)).toFixed(0));
    let timeInH = Math.floor(time / 3600);
    
    timeInMin += minutesForRest;
    timeInH += Math.floor(timeInMin / 60);
    timeInMin = timeInMin % 60;

    let formattedH = timeInH < 10 ? `0${timeInH}` : `${timeInH}`;
    let formattedMin = timeInMin < 10 ? `0${timeInMin}` : `${timeInMin}`;
    let formattedSec = timeInSeconds < 10 ? `0${timeInSeconds}` : `${timeInSeconds}`;
    
    console.log(`${formattedH}:${formattedMin}:${formattedSec}`);
}

timeToWalk(4000, 0.60, 5);