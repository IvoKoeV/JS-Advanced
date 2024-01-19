function timeToWalk(stepsToUni,feetSize,speed){
    let distance = stepsToUni * feetSize;
    let speedInMeterInSec = speed / 3.6;
    let time = distance / speedInMeterInSec;
    let rest = Math.floor(distance/500);

    time += rest * 60;
    let sec = Math.round(time % 60);
    let min = Math.floor(time / 60);
    let hours = Math.floor(min/60);
    min -= hours*60;
    let hourstoPrint= hours < 10 ? `0${hours}` : `${hours}`;
    let minToPrint = min < 10 ? `0${min}` : `${min}`;
    let secToPrint = sec < 10 ? `0${sec}` : `${sec}`;

    console.log(`${hourstoPrint}:${minToPrint}:${secToPrint}`);
}
timeToWalk(4000, 0.60, 5);
timeToWalk(2564, 0.70, 5.5);