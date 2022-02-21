// Button Scroll To top
let bntUp = document.querySelector(".btn-up");

window.addEventListener("scroll", () => {
  if (window.scrollY >= 600) {
    bntUp.style.display = "block";
  } else {
    bntUp.style.display = "none";
  }
});

bntUp.addEventListener("click", () => {
  window.scrollTo({
    left: 0,
    top: 0,
    behavior: "smooth",
  });
});

// Skills Section
let skillsSection = document.querySelector(".our-skills");
let skillsSpans = document.querySelectorAll(".our-skills .the-progress span");

window.addEventListener("scroll", () => {
  if (window.scrollY >= skillsSection.offsetTop - 300) {
    skillsSpans.forEach((span) => {
      span.style.width = span.dataset.width;
    });
  }
});

// Pricing Section
let awesomeSection = document.querySelector(".awsome");
let awesomeSpans = document.querySelectorAll(".awsome .box .number");
let started = false;

window.addEventListener("scroll", () => {
  if (window.scrollY >= awesomeSection.offsetTop - 200) {
    if (!started === true) {
      awesomeSpans.forEach((span) => {
        countUp(span);
      });
    }
    started = true;
  }
});
function countUp(element) {
  let goal = element.dataset.goal;
  let counter = setInterval(() => {
    element.textContent++;
    if (element.textContent == goal) {
      clearInterval(counter);
    }
  }, 2000 / goal);
}

// Event Section Time Counter

let counter = setInterval(() => {
  let eventTime = new Date("aug 31, 2022 23:59:59").getTime();
  let timeNow = new Date().getTime();
  let timediff = eventTime - timeNow;

  let days = Math.floor(timediff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((timediff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((timediff % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((timediff % (1000 * 60)) / 1000);

  document.querySelector(".our-events .days").innerHTML =
    days < 10 ? `0${days}` : days;
  document.querySelector(".our-events .hours").innerHTML =
    hours < 10 ? `0${hours}` : hours;
  document.querySelector(".our-events .minutes").innerHTML =
    minutes < 10 ? `0${minutes}` : minutes;
  document.querySelector(".our-events .seconds").innerHTML =
    seconds < 10 ? `0${seconds}` : seconds;

  if (timediff < 0) {
    clearInterval(counter);
  }
}, 1000);

// function minuteDown(eleMunite) {
//   setInterval(() => {
//     eleMunite.textContent--;
//     if (eleMunite.textContent == "0") {
//       eleMunite.textContent = 60;
//     }
//   }, 60_000);
// }
// minuteDown(minute);

// function hourDown(eleHour) {
//   setInterval(() => {
//     eleHour.textContent--;
//     if (eleHour.textContent == "0") {
//       eleHour.textContent = 24;
//     }
//   }, 3_600_000);
// }
// hourDown(hour);

// function dayDown(eleDay) {
//   let counterdays = setInterval(() => {
//     eleDay.textContent--;
//     if (eleDay.textContent == "0") {
//       clearInterval(counterdays);
//     }
//   }, 86_400_000);
// }
// dayDown(day);
