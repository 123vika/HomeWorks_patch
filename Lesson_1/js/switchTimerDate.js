const switchToTimer = document.getElementById('switchToTimer');
const switchToDateCalc = document.getElementById('switchToDateCalc'); 
const timerBlock = document.getElementById('timerBlock');
const dateCalcForm = document.getElementById('datecalc');

dateCalcForm.classList.add('hide');

const showDateCalc = () => {

    dateCalcForm.classList.remove('hide');
    dateCalcForm.classList.add('show');
};

const hideDateCalc = () => {

    dateCalcForm.classList.remove('show');
    dateCalcForm.classList.add('hide');
};

switchToDateCalc.addEventListener('click', showDateCalc);
switchToTimer.addEventListener('click', hideDateCalc);


timerBlock.classList.add('hide');

const showTimer = () => {

    timerBlock.classList.remove('hide');
    timerBlock.classList.add('show');

    console.log('inside showTimer');

};

switchToTimer.addEventListener('click', showTimer);

const hideTimer = () => {

    timerBlock.classList.remove('show');
    timerBlock.classList.add('hide');
};

switchToTimer.addEventListener('click', showTimer);
switchToDateCalc.addEventListener('click', hideTimer);





