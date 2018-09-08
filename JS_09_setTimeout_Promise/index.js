'use strict'

let timeStarted = 0;
let timeDelta = 0;
let isActive = false;
let timeUpdate;

const start = document.querySelector('.js-start');
start.addEventListener('click', startBtnClick);

const lap = document.querySelector('.js-take-lap');
lap.disabled = true;

const reset = document.querySelector('.js-reset');
reset.disabled = true;
reset.addEventListener('click', resetTime.bind(null, timeUpdate));

const time = document.querySelector('.js-time');

const laps = document.querySelector('.js-laps');



function startBtnClick() {
  if (!isActive) {
    lap.addEventListener('click', saveLap);
    lap.disabled = false;
    reset.disabled = false;
    isActive = true;
    start.textContent = 'Pause';
    timeStarted = Date.now();
    timeUpdate = setInterval(timeOnDisplay, 100);
  }
  else {
    isActive = false;
    start.textContent = 'Continue';
    clearInterval(timeUpdate);
    timeDelta += Date.now() - timeStarted;
  }
}

function resetTime(param) {
  clearInterval(param);
  timeStarted = 0;
  isActive = false;
  time.textContent = '00:00.0';
  laps.innerHTML = "";
  timeDelta = 0;
  start.textContent = "Start";
}

function timeOnDisplay() {
  const present = Date.now();
  const delta = new Date(present - timeStarted + timeDelta);
  const min =
    delta.getMinutes() > 9 ? `${delta.getMinutes()}` : `0${delta.getMinutes()}`;
  const sec =
    delta.getSeconds() > 9 ? `${delta.getSeconds()}` : `0${delta.getSeconds()}`;
  const mls = `${Math.floor(delta.getMilliseconds() / 100)}`;
  time.textContent = `${min}:${sec}.${mls}`;
}

function saveLap() {
  const timeLap = time.textContent;
  laps.insertAdjacentHTML('beforeEnd', `<li>${timeLap}</li>`);
}
