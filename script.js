const  startingMinutes = 0.1;
let time = startingMinutes*60;

const timerEL = document.getElementById('timer');

var interval = setInterval(updateTimer, 1000);
var timeupsound;

function preload() {
    timeupsound = loadSound("timeup.mp3");
}

function updateTimer() {
    if (time <= 0) {
        timeupsound.play();
        clearInterval(interval);
        time = 0;

    const minutes = Math.floor(time / 60);

    let seconds = time % 60;

    //minutes = minutes < 10 ? '0' + minutes: minutes;
    seconds = seconds < 10 ? '0' + seconds: seconds;

    timerEL.innerHTML = `${minutes} : ${seconds}`;
    time--;


    }
}