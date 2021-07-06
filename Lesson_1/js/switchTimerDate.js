export const switchToTimer = document.getElementById('switchToTimer');
export const switchToDateCalc = document.getElementById('switchToDateCalc'); 
export const timerBlock = document.getElementById('timerBlock');
export const dateCalcForm = document.getElementById('datecalc');

dateCalcForm.classList.add('hide');

export const showDateCalc = () => {

    dateCalcForm.classList.remove('hide');
    dateCalcForm.classList.add('show');
};

export const hideDateCalc = () => {

    dateCalcForm.classList.remove('show');
    dateCalcForm.classList.add('hide');
};

switchToDateCalc.addEventListener('click', showDateCalc);
switchToTimer.addEventListener('click', hideDateCalc);


timerBlock.classList.add('hide');

export const showTimer = () => {

    timerBlock.classList.remove('hide');
    timerBlock.classList.add('show');

    console.log('inside showTimer');

};

switchToTimer.addEventListener('click', showTimer);

export const hideTimer = () => {

    timerBlock.classList.remove('show');
    timerBlock.classList.add('hide');
};

switchToTimer.addEventListener('click', showTimer);
switchToDateCalc.addEventListener('click', hideTimer);





