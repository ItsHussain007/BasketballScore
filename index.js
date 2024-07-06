let homeCount = document.getElementById("homeScoreboard");
let guestCount = document.getElementById("guestScoreboard");
let hcount = 0;
let gcount = 0;
let fcounth = 0;
let fcountg =0;
let foulCountH = document.getElementById("foulScoreH")
let foulCountG = document.getElementById("foulScoreG")

let timerInterval;
let timerRunning = false;
let minutes = 40;
let seconds = 0;

document.addEventListener("DOMContentLoaded", function() {
    startTimerIfNeeded(); // Start timer as soon as the page loads
});

function add1() {
    startTimerIfNeeded();
    hcount += 1;
    homeCount.innerText = hcount;
    updateColor();
}

function add2() {
    startTimerIfNeeded();
    hcount += 2;
    homeCount.innerText = hcount;
    updateColor();
}

function add3() {
    startTimerIfNeeded();
    hcount += 3;
    homeCount.innerText = hcount;
    updateColor();
}

function gadd1() {
    startTimerIfNeeded();
    gcount += 1;
    guestCount.innerText = gcount;
    updateColor();
}

function gadd2() {
    startTimerIfNeeded();
    gcount += 2;
    guestCount.innerText = gcount;
    updateColor();
}

function gadd3() {
    startTimerIfNeeded();
    gcount += 3;
    guestCount.innerText = gcount;
    updateColor();
}

function startTimerIfNeeded() {
    if (!timerRunning) {
        timerRunning = true;
        timerInterval = setInterval(updateTimer, 1000); // Update timer every second
    }
}

function updateTimer() {
    if (seconds > 0 || minutes > 0) {
        if (seconds === 0) {
            seconds = 59;
            minutes--;
        } else {
            seconds--;
        }

        let displaySeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
        let displayMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
        document.getElementById("timerDisplay").innerText = `${displayMinutes}:${displaySeconds}`;
    } else {
        // Timer has reached 00:00
        clearInterval(timerInterval);
        timerRunning = false;
        // You can add any additional logic here when the timer ends
    }
}

function resetTimer() {
    clearInterval(timerInterval);
    timerRunning = false;
    minutes = 40;
    seconds = 0;
    document.getElementById("timerDisplay").innerText = "40:00";
}

function updateColor() {
    if (hcount > gcount) {
        homeCount.style.color = "green";
        guestCount.style.color = "#F94F6D";
    } else if (gcount > hcount) {
        homeCount.style.color = "#F94F6D";
        guestCount.style.color = "green";
    }
}

function resetScore() {
    homeCount.innerText = 0;
    guestCount.innerText = 0;
    gcount = 0;
    hcount = 0;
    homeCount.style.color = "#F94F6D";
    guestCount.style.color = "#F94F6D";
    resetTimer();
    startTimerIfNeeded();
    resetfoul();
}

function foulh() {
    if (hcount > 0) {
        showText();
        hcount -= 1;
        homeCount.innerText = hcount;
        homefoul();
        if (hcount === 0) {
            homeCount.style.color = "#F94F6D";
        }
    }
}

function foulg() {
    if (gcount > 0) {
        showText();
        gcount -= 1;
        guestCount.innerText = gcount;
        Guestfoul();
        if (gcount == 0) {
            guestCount.style.color = "#F94F6D";
        }
    }
}

function showText() {
    const textContainer = document.getElementById('text-container');
    textContainer.classList.remove('hidden');
    textContainer.classList.add('visible');
    textContainer.style.display = 'block';

    setTimeout(() => {
        textContainer.classList.remove('visible');
        textContainer.classList.add('hidden');
        setTimeout(() => {
            textContainer.style.display = 'none';
        }, 500); // Delay to allow transition to complete
    }, 2000); // 2000 milliseconds = 2 seconds
}

function homefoul(){
    fcounth +=1
    foulCountH.innerText=fcounth

}

function Guestfoul(){
    fcountg +=1
    foulCountG.innerText=fcountg

}

function resetfoul()
{
    fcounth=0
    foulCountH.innerText=fcounth
    fcountg =0
    foulCountG.innerText=fcountg
}




