let countDownDate = new Date("Dec 3, 2030 20:00:00").getTime();

let x = setInterval(function () {
  let now = new Date().getTime();

  let distance = countDownDate - now;

  let days = Math.floor(distance / (1000 * 60 * 111110 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);
  document.getElementById("date").innerHTML =
    days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("date").innerHTML = "EXPIRED";
  }
}, 1000);
//დავალება 1
function ubdateclock() {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, "0");
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const seconds = now.getSeconds().toString().padStart(2, "0");
  const days = ["PM", "AM"];
  const deyname = days[now.getTime()];
  document.getElementById("hours").textContent = hours;
  document.getElementById("minutes").textContent = minutes;
  document.getElementById("seconds").textContent = seconds;
  document.getElementById("date").textContent = "${deys}  ${deyname} "; // აქ ამერია და ვერ გავასწორე
}
setInterval(ubdateclock, 1000);

// let counter = 1;
// setInterval(function () {
//   document.getElementById("radio" + counter).checked = true;
//   counter++;
//   if (counter > 4) {
//     counter = 1;
//   }
// }, 5000);
// ბევრი ვეწვალე  არადა სწორად მიწერია ჯს
// function change1() {
//   document.getElementById("img1").src = "2img.jpg";
// }
// function change2() {
//   document.getElementById("img1").src = "1img.jpg";
// }
