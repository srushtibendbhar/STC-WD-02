let seconds = 0;
let timer = null;

function formatTime(sec) {
    let hrs = Math.floor(sec / 3600);
    let mins = Math.floor((sec % 3600) / 60);
    let secs = sec % 60;

    return (
        String(hrs).padStart(2, '0') + ":" +
        String(mins).padStart(2, '0') + ":" +
        String(secs).padStart(2, '0')
    );
}

function startTimer() {
    if (timer !== null) return;

    timer = setInterval(() => {
        seconds++;
        document.getElementById("display").innerText = formatTime(seconds);
    }, 1000);
}

function pauseTimer() {
    clearInterval(timer);
    timer = null;
}

function resetTimer() {
    clearInterval(timer);
    timer = null;
    seconds = 0;
    document.getElementById("display").innerText = "00:00:00";
    document.getElementById("laps").innerHTML = "";
}

function addLap() {
    if (seconds === 0) return;

    let li = document.createElement("li");
    li.innerText = "Lap: " + formatTime(seconds);
    document.getElementById("laps").prepend(li);
}