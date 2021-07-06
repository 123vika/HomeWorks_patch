// import './switchTimerDate.js';
// import './timer.js';

export const counterTimer = document.querySelector('.counterTimer');
export const startBtn = document.querySelector('.start');
export const stopBtn = document.querySelector('.stop');

let minValue = 0;
let secValue = 0;
let intervalId = 0;

export const showTimer = () => {
    if (secValue <= 0 && minValue <= 0 ) {
        stopTimer();
        return;  
    }else if(secValue <= 0 && minValue > 0){
        minValue = minValue - 1;
        secValue = 60;
 
    }
    secValue --;
    console.log(minValue, secValue);
    counterTimer.innerHTML = `${minValue} : ${secValue}`;
};

export const startSetInterval = () => {
    const timerMinutes = document.getElementById('timerMinutes');
    const timerSeconds = document.getElementById('timerSeconds') ;
    if(intervalId){
        stopTimer();
        console.log('clean interval');
    }
    if(!minValue && !secValue){
        minValue = timerMinutes.value;
        secValue = timerSeconds.value; 
    }
   
    intervalId = setInterval(showTimer, 1000);
};

startBtn.addEventListener('click', startSetInterval);

export const stopTimer = () => {
    clearInterval(intervalId);
    intervalId = 0;
};

stopBtn.addEventListener('click', stopTimer);

