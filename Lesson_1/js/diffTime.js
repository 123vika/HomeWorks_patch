import './switchTimer.js';
import './timer.js';

const counterTimer = document.querySelector('.counterTimer');
const startBtn = document.querySelector('.start');
const stopBtn = document.querySelector('.stop');
const timerMinutes = document.getElementById('timerMinutes');
const timerSeconds = document.getElementById('timerSeconds') ;
let minValue = 0;
let secValue = 0;


const showTimer = () => {
    if (secValue <= 0 && minValue <= 0 ) {

        return;  
    }else if(secValue <= 0 && minValue > 0){
        minValue = minValue - 1;
        secValue = 60;
 
    }
    secValue --;
    console.log(secValue, minValue);
    counterTimer.innerHTML = `${minValue} : ${secValue}`;
    
};

const startSetInterval = () => {
    
    minValue = timerMinutes.value;
    secValue = timerSeconds.value;

    setInterval(showTimer, 1000);
};

startBtn.addEventListener('click', startSetInterval);


