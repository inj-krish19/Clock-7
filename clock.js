
const body = document.querySelector("body");
const wrapper = document.querySelector(".wrapper");
const region = document.querySelector(".region");
const country = document.querySelector(".country");
const gmtStandards = document.querySelector(".gmtStandard");
const fulldate = document.querySelector(".fulldate");
const date = document.querySelector(".date");
const month = document.querySelector(".month");
const year = document.querySelector(".year");
const day = document.querySelector(".day");
const time = document.querySelector(".time");
const hour = document.querySelector(".hour");
const minute = document.querySelector(".minute");
const second = document.querySelector(".second");

let today = new Date();

let duration = 1000;
let increase = 1;

let dividorSeconds = 60;
let dividorMinutes = 60;
let dividorHours = 12;

let seconds = today.getSeconds();
let minutes = today.getMinutes();
let hours = today.getHours();

function updateTime() {

    seconds = (seconds + increase) % dividorSeconds;
    second.innerHTML = String(seconds).padStart(2, '0');

    if (seconds === 0) {
        minutes = (minutes + increase) % dividorMinutes;
    }
    minute.innerHTML = String(minutes).padStart(2, '0');

    if (seconds === 0 && minutes === 0) {
        hours = (hours + increase) % dividorHours;
    }
    hour.innerHTML = String(hours).padStart(2, '0');

}

setInterval(updateTime, duration);

let ballClick = 0;
const black = "#252525";
const white = "#FAEBD7";

const mySwitch = document.querySelector(".switch");
const ball = document.querySelector(".ball");

const fullTime = document.querySelector(".fulltime");
const halfTime = document.querySelector(".halftime");

const width = 50;
const ballWidth = 20;

mySwitch.onclick = () => {

    if (ballClick % 2 === 0) {

        mySwitch.style.backgroundColor = white;
        ball.style.backgroundColor = black;

        ball.style.marginLeft = width - ballWidth + "px";
        ball.style.marginRight = "0px";

        if (hours === 24) {
            halfTime.innerHTML = 0 + "AM";
        } else if (hours === 12) {
            halfTime.innerHTML = 12 + "PM";
        } else if (hours < 12) {
            halfTime.innerHTML = hours + "AM";
        } else {
            halfTime.innerHTML = hours % 12 + "PM";
        }

        fullTime.style.visibility = "hidden";
        halfTime.style.visibility = "visible";

    } else {

        mySwitch.style.backgroundColor = black;
        ball.style.backgroundColor = white;

        ball.style.marginRight = 5 + "px";
        ball.style.marginLeft = "0px";

        fullTime.style.visibility = "visible";
        halfTime.style.visibility = "hidden";

    }
    ballClick++;

}
