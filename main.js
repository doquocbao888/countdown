const day = document.getElementById("day");
const hour = document.getElementById("month");
const min = document.getElementById("min");
const sec = document.getElementById("sec");

function countdown() {
  const end = new Date("2024");
  const distance = end - new Date();
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const secs = Math.floor((distance % (1000 * 60)) / 1000);

  day.innerText = format(days);
  hour.innerText = format(hours);
  min.innerText = format(mins);
  sec.innerText = format(secs);
}

countdown();

function format(time) {
  return time < 10 ? `0${time}` : time;
}

setInterval(countdown, 1000);
