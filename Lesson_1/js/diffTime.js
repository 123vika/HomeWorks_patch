import * as diffTime from "./timer";
// import {Howl, Howler} from 'howler';

export let counterTimer = document.querySelector('.counterTimer');
export const startBtn = document.querySelector('.start');
export const pauseBtn = document.querySelector('.pause');
export const stopBtn = document.querySelector('.stop');

let minutesValue = 0;
let secondsValue = 0;
let intervalId = 0;
// let innerTime = counterTimer.innerHTML = `
//             <span>
//                 ${minutesValue} minute 
//                 ${secondsValue} secunds
//             </span>
//         `;

export const showTimer = () => {
    if (secondsValue <= 0 && minutesValue <= 0 ) {
        pauseTimer();
        counterTimer.innerHTML = `<strong>End Time</strong>`;
        startBtn.classList.remove('checkout-button');
        stopBtn.classList.add('checkout-button');
        return;  
    }else if(secondsValue <= 0 && minutesValue > 0){
        minutesValue = minutesValue - 1;
        secondsValue = 60;
    }
    secondsValue --;
    console.log(minutesValue, secondsValue);
    counterTimer.innerHTML = `
            <span>
                ${minutesValue} minute 
                ${secondsValue} seconds
            </span>
        `;
};

export const startSetInterval = () => {
    const timerMinutes = document.getElementById('timerMinutes');
    const timerSeconds = document.getElementById('timerSeconds') ;
    if(intervalId){
        pauseTimer();
        console.log('clean interval');
    }
    if(!minutesValue && !secondsValue){
        counterTimer.innerTime = counterTimer.innerHTML = `
            <span>
                ${minutesValue} minute 
                ${secondsValue} seconds
            </span>
        `;
        minutesValue = timerMinutes.value;
        secondsValue = timerSeconds.value; 

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

    minutesValue = secondsValue = 0;
    counterTimer.innerHTML = `<strong>End Time</strong>`;
    console.log('inside stopTimer');
    // const sound = new Howl({
    //     src: ['sound.mp3']
    //   });
      
    // sound.play();
};
stopBtn.addEventListener('click', stopTime);
