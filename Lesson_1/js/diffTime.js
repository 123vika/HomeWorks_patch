import * as diffTime from "./timer";
// import {Howl, Howler} from 'howler';

export const counterTimer = document.querySelector('.counterTimer');
export const startBtn = document.querySelector('.start');
export const pauseBtn = document.querySelector('.pause');
export const stopBtn = document.querySelector('.stop');

let minValue = 0;
let secValue = 0;
let intervalId = 0;

export const showTimer = () => {
    if (secValue <= 0 && minValue <= 0 ) {
        pauseTimer();
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
        pauseTimer();
        console.log('clean interval');
    }
    if(!minValue && !secValue){
        minValue = timerMinutes.value;
        secValue = timerSeconds.value; 
    }
   
    intervalId = setInterval(showTimer, 1000);
};
startBtn.addEventListener('click', startSetInterval);

export const pauseTimer = () => {
    clearInterval(intervalId);
    intervalId = 0;
};
pauseBtn.addEventListener('click', pauseTimer);


export const stopTime = ()=>{
    clearInterval(intervalId);
    // const sound = new Howl({
    //     src: ['sound.webm', 'sound.mp3']
    // });
    // Howler.volume(1.0);
    // sound.play();

    minValue = secValue = 0;
    console.log('inside stopTimer');
    // const sound = new Howl({
    //     src: ['sound.mp3']
    //   });
      
    // sound.play();
};
stopBtn.addEventListener('click', stopTime);
