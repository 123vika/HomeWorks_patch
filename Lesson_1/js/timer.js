import * as timer from "./diffTime.js";

export const startBtn = document.querySelector('.start');
export const stopBtn = document.querySelector('.stop');

export const startTimer = () => {
    stopBtn.classList.remove('checkout-button');
    startBtn.classList.add('checkout-button');
};
startBtn.addEventListener('click', startTimer);


export const stopTimer = () => {
    startBtn.classList.remove('checkout-button');
    stopBtn.classList.add('checkout-button');
};
stopBtn.addEventListener('click', stopTimer);