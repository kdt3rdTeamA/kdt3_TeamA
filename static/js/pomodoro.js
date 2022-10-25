let body = document.querySelector('body');

let startBtn = document.querySelector('.start');
let resetBtn = document.querySelector('.reset');
let stopBtn = document.querySelector('.stop');

let minSection = document.querySelector('.minute');
let secSection = document.querySelector('.second');
let alertSection = document.querySelector('.alert-section');

let runInterval;

let session = 0;
let savdTime = 0;
let time = 0;
// start button function
startBtn.addEventListener('click', () => {
    if (time <= 0) {
        start();
    }
    else {
        restart();
    }
});

function start() {
    time = 30 * 60;
    startBtn.disabled = true;
    runInterval = setInterval(() => {
        let min = parseInt(time / 60);
        let sec = time % 60;
        minSection.innerText = min;
        secSection.innerText = sec;
        time -= 1;
        if (time == 5 * 60 -1) {
            body.classList.remove('run-mode');
            body.classList.add('break-mode');
            alertSection.innerText = `Break Time!`;
        }
        else if (time == -1) {
            session += 1;
            alertSection.innerText = `session ${session} clear!`;
            startBtn.disabled = false;
            body.classList.remove('break-mode');
            body.classList.add('run-mode');
            clearInterval(runInterval);
        }
    }, 1000);
}

function restart() {
    time = savdTime;
    startBtn.disabled = true;
    runInterval = setInterval(() => {
        let min = parseInt(time / 60);
        let sec = time % 60;
        minSection.innerText = min;
        secSection.innerText = sec;
        time -= 1;
        if (time == 5 * 60 -1) {
            body.classList.remove('run-mode');
            body.classList.add('break-mode');
            alertSection.innerText = `Break Time!`;
        }
        else if (time == -1) {
            session += 1;
            alertSection.innerText = `session ${session} clear!`;
            startBtn.disabled = false;
            body.classList.remove('break-mode');
            body.classList.add('run-mode');
            clearInterval(runInterval);
        }
    }, 1000);
}


stopBtn.addEventListener('click', () => {
    clearInterval(runInterval);
    startBtn.disabled = false;
    savdTime = time;
})

// reset button function
resetBtn.addEventListener('click', () => {
    clearInterval(runInterval);
    savdTime = -1;
    time = -1;
    minSection.innerText = 0;
    secSection.innerText = 0;
    startBtn.disabled = false;
    body.classList.remove('break-mode');
    body.classList.add('run-mode');    
});