

const minutesEl = document.querySelector("#minutes");
const secondsEl = document.querySelector("#seconds");
const millisecondsEl = document.querySelector("#milliseconds");
const startBtn = document.querySelector("#startBtn");
const pauseBtn = document.querySelector("#pauseBtn");
const resumeBtn = document.querySelector("#resumeBtn");
const resetBtn = document.querySelector("#resetBtn");

let interval;

let minutes = 0;
let seconds = 0;
let milliseconds = 0;

let isPaused = false;

//Chama a função do botão de começar
startBtn.addEventListener("click", startTimer);

//Chama a função do botão de pausar
pauseBtn.addEventListener("click", pauseTimer);

//Chama a função do botão continuar
resumeBtn.addEventListener("click", resumeTimer);

//Chama a função do botão reset
resetBtn.addEventListener("click", resetTimer);


//função para começar a rodar o cronometro 
function startTimer() {

    interval = setInterval(() => {

        if (!isPaused) {

            milliseconds += 10;

            if (milliseconds === 1000) {
                seconds++;
                milliseconds = 0;
            }

            if (seconds === 60) {
                minutes++;
                seconds = 0;
            }

            minutesEl.textContent = formatTime(minutes);
            secondsEl.textContent = formatTime(seconds);
            millisecondsEl.textContent = milliseconds;
        }
    }, 10);

    startBtn.style.display = "none";
    pauseBtn.style.display = "block";

}


//Usa a variavel isPalsed pra ver se é verdadeiro e assim pausar o timer, 
//pois se isPaused for true as variaveis do Crono param de fazer incrementação
function pauseTimer() {
    isPaused = true;

    pauseBtn.style.display = "none";

    resumeBtn.style.display = "block";
}


function resumeTimer() {
    isPaused = false;

    pauseBtn.style.display = "block";

    resumeBtn.style.display = "none";
}


function resetTimer() {
    clearInterval(interval);

    minutes = 0;
    seconds = 0;
    milliseconds = 0;

    minutesEl.textContent = "00";
    secondsEl.textContent = "00";
    millisecondsEl.textContent = "00";

    startBtn.style.display = "block";
    pauseBtn.style.display = "none";
    resumeBtn.style.display = "none";
}







//formata os números dos minutos e dos segundos
function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

//formata os números dos milisegundos
function formatMilliseconds(time) {
    return time < 100 ? `${time}`.padStart(3, "0") : time;
}