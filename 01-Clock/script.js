const secondHand = document.querySelector(".second-hand");
const minHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");

function setDate() {
  const now = new Date();
  const seconds = now.getSeconds();
  const secondDegrees = (seconds / 60) * 360 + 90;
  secondHand.style.transform = `rotate(${secondDegrees}deg)`;

  const mins = now.getMinutes();
  const minDegrees = (mins / 60) * 360 + 90;
  minHand.style.transform = `rotate(${minDegrees}deg)`;

  const hour = now.getHours();
  const hourDegrees = (hour / 12) * 360 + 90;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;

  document.querySelector(".digital-hour").innerHTML = hour + ":";
  document.querySelector(".digital-min").innerHTML = mins;
}

setInterval(setDate, 1000);
