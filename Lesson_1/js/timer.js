import "./diffTime.js";

const startBtn = document.querySelector('.start');
const stopBtn = document.querySelector('.stop');

const startTimer = () => {
    stopBtn.classList.remove('checkout-button');
    startBtn.classList.add('checkout-button');
};
startBtn.addEventListener('click', startTimer);


const stopTimer = () => {
    startBtn.classList.remove('checkout-button');
    stopBtn.classList.add('checkout-button');
};
stopBtn.addEventListener('click', stopTimer);