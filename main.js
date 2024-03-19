// Button Scroll To top & Header Section
let bntUp = document.querySelector(".btn-up");

window.addEventListener("scroll", () => {
  if (window.scrollY >= 700) {
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

// Event Section | Time Counter

let counter = setInterval(() => {
  let eventTime = new Date("sept 30, 2024 23:59:59").getTime();
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

  if (timediff < 1000) {
    clearInterval(counter);
  }
}, 1000);

// Discount Section | Filling Inputs

let input1 = document.querySelector(".discount .form form .one");
let progress1 = document.querySelector(".discount .form form .progress-1");
let maxlength1 = input1.getAttribute("maxlength");
input1.addEventListener("input", () => {
  progress1.style.width = `${(input1.value.length / maxlength1) * 100}%`;
});

let textarea = document.querySelector(".discount .form form .textarea");
let progress2 = document.querySelector(".discount .form form .progress-2");
let maxlength2 = textarea.getAttribute("maxlength");
textarea.addEventListener("input", () => {
  progress2.style.width = `${(textarea.value.length / maxlength2) * 100}%`;
});
