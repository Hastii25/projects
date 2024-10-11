let startTime, updatedTime, difference, tInterval;
let running = false;
let time = 0;
let lapCount = 1;

const display = document.getElementById('display');
const lapList = document.getElementById('lap-list');
const startButton = document.getElementById('start');
const pauseButton = document.getElementById('pause');
const resetButton = document.getElementById('reset');
const lapButton = document.getElementById('lap');

function startTimer() {
    if (!running) {
        startTime = new Date().getTime();
        tInterval = setInterval(getShowTime, 1);
        running = true;
    }
}

function getShowTime() {
    updatedTime = new Date().getTime();
    difference = updatedTime - startTime;
    time = new Date(difference);
    let minutes = time.getUTCMinutes();
    let seconds = time.getUTCSeconds();
    let milliseconds = Math.floor(time.getUTCMilliseconds() / 10);

    minutes = (minutes < 10) ? '0' + minutes : minutes;
    seconds = (seconds < 10) ? '0' + seconds : seconds;
    milliseconds = (milliseconds < 10) ? '0' + milliseconds : milliseconds;
    console.log("hello")
    display.innerHTML = minutes + ':' + seconds + ':' + milliseconds;
    console.log("hii");
}

function pauseTimer() {
    clearInterval(tInterval);
    running = false;
}

function resetTimer() {
    clearInterval(tInterval);
    display.innerHTML = '00:00:00';
    time = 0;
    running = false;
    lapList.innerHTML = '';
    lapCount = 1;
}

function recordLap() {
    if (running) {
        let lapTime = display.innerHTML;
        let lapItem = document.createElement('li');
        lapItem.textContent = `Lap ${lapCount++}: ${lapTime}`;
        lapList.appendChild(lapItem);
    }
}

startButton.addEventListener('click', startTimer);
pauseButton.addEventListener('click', pauseTimer);
resetButton.addEventListener('click', resetTimer);
lapButton.addEventListener('click', recordLap);