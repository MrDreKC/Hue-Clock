const numberHours = document.querySelector('.number-hours');
const barSeconds = document.querySelector('.bar-seconds');

const numberElement = [];
const barElement = [];

for (let i = 1; i <= 12; i++) {
  numberElement.push(
    `<span style="--index:${i};"><p>${i}</p></span>`
  );
}

numberHours.insertAdjacentHTML("afterbegin", numberElement.join(""));

for (let i = 1; i <= 60; i++) {
  barElement.push(
    `<span style="--index:${i};"><p></p></span>`
  );
}

barSeconds.insertAdjacentHTML("afterbegin", barElement.join(""));

const handHours = document.querySelector('.hand.hours');
const handMinutes = document.querySelector('.hand.minutes');
const handSeconds = document.querySelector('.hand.seconds');

function getCurrentTime() {
  let date = new Date();
  let currentHours = date.getHours();
  let currentMinutes = date.getMinutes();
  let currentSeconds = date.getSeconds();

  // 60 seconds = 360deg ! 1 sec = 360 / 60 = 6deg
  // 60 minutes = 360deg ! 1 min = 360 / 60 = 6deg
  // 12 hours = 360deg ! 1 hrs = 360 / 12 = 30deg

  // 1 hrs = 30deg ! 60 min = 30deg ! 1 min = 30 / 60 = 0.5 or 1/2deg

  // Formula = (hours * 30 + min / 2)

  handSeconds.style.transform = `rotate(${currentSeconds * 6}deg)`;
  handMinutes.style.transform = `rotate(${currentMinutes * 6}deg)`;
  handHours.style.transform = `rotate(${currentHours * 30 + currentMinutes / 2}deg)`;
}

getCurrentTime();

setInterval(getCurrentTime, 1000); //1000ms = 1s

const dt = new Date();
document.querySelector(".datetime").innerHTML = dt.toLocaleTimeString();
