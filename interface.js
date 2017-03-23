
const cardEl = document.querySelectorAll('.card-deck__card')[0];

const noZoneEl = document.querySelectorAll('.card-deck__drop-zone--no')[0];
const yesZoneEl = document.querySelectorAll('.card-deck__drop-zone--yes')[0];

//
cardEl.addEventListener('touchstart', handleStart, false);
cardEl.addEventListener("touchend", handleEnd, false);
cardEl.addEventListener("touchmove", handleMove, false);

let rotation = 0,
    startPositionX,
    nextPositionX,
    finalPositionX,
    totalScrollX;

function handleStart(event) {
    let touch = event.touches[0];
    startPositionX = touch.clientX;
}

function handleEnd(event) {
    let touch = event.changedTouches[0];
    finalPositionX = touch.clientX;

    totalScrollX = calculateTotalScrollX(startPositionX, finalPositionX);

    determineCardStatus();
}

function handleMove(event) {
    nextPositionX = event.touches[0].clientX;
    totalScrollX = calculateTotalScrollX(startPositionX, nextPositionX);
    calculateRotation();
    isMaximumScrollX();
}

function calculateTotalScrollX(start, final) {
    if (final > start) {
        return final - start;
    } else {
        return start - final;
    }
}

function determineCardStatus() {
    if (totalScrollX > screen.width/4) {
        acceptCard();
    } else {
        rejectCard();
    }
}

function calculateRotation() {
    rotation += 1;

    if (nextPositionX > startPositionX) {
        event.target.style.transform = `rotate(${rotation}deg)`;
    } else {
        event.target.style.transform = `rotate(${-rotation}deg)`;
    }
}

function calculateRotationDegrees() {

}

function acceptCard() {
    console.log('accepted');
}

function rejectCard() {
    console.log('rejected');
}

function isMaximumScrollX() {
    if (totalScrollX > screen.width/2) {
        console.log('MAXIMUM');
    }
}
