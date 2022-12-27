const degree = 6;

const hr = document.querySelector(".hr");
const min = document.querySelector(".min");
const sec = document.querySelector(".sec");

function updateTime() {
  let date = new Date();
  let h = date.getHours() * 30;
  let m = date.getMinutes() * degree;
  let s = date.getSeconds() * degree;

  hr.style.transform = `rotateZ(${h + m / 12}deg)`;
  min.style.transform = `rotateZ(${m}deg)`;
  sec.style.transform = `rotateZ(${s}deg)`;
}

window.setInterval(updateTime, 1000);
