const checkbox = document.querySelector('.checkbox-form input')
const form = document.querySelector('.checkbox-form')
const arm = document.querySelector('.checkbox-form .arm')
const delayInput = document.querySelector('#delay')
const durationInput = document.querySelector('#duration')

//runs when checkbox changes
function handleCheckbox(e) {
    //add class to triggre the character
    document.body.classList.toggle('visible')

    // set random animation duration
    let animationTime = getRandomAnimationTime()

    document.documentElement.style.setProperty('--animation-time', animationTime + 'ms')

    //create random delays for arm and head
    let delayOne = getRandomDelay()
    let delayTwo = getRandomDelay()

    //swap delays when arm goes before head
    if (delayOne > delayTwo) {
        [delayOne, delayTwo] = [delayTwo, delayOne];
    }

    //set the css variables to the random delays
    document.documentElement.style.setProperty('--transition-delay1', delayOne + 'ms')
    document.documentElement.style.setProperty('--transition-delay2', delayTwo + 'ms')

    //create a delay for the checkbox to inline with the arm
    let standardDelay = animationTime - 350;
    let checkboxDelay = standardDelay + delayTwo;

    //uncheck checkbox after the above calculated time
    setTimeout(() => {
        checkbox.checked = false
    }, checkboxDelay)
}

//remove the visible class when the arm is done pushing
arm.addEventListener('transitionend', () => {
    document.body.classList.remove('visible')
})

//fire function when checkbox value changes
checkbox.addEventListener('change', handleCheckbox)

//returns random delay value
function getRandomDelay() {
    const delay = 2000
    return Math.floor(Math.random() * delay)
}

//returns random animation duration
function getRandomAnimationTime() {
    const duration = 1000
    const min = 800;
    return (Math.floor(Math.random() * duration) + min)
}
