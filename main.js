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
let day = document.querySelector(".our-events .counter .unit .day");
let hour = document.querySelector(".our-events .counter .unit .hour");
let minute = document.querySelector(".our-events .counter .unit .minute");
let second = document.querySelector(".our-events .counter .unit .second");

function dayDown(eleDay) {
  let counterdays = setInterval(() => {
    eleDay.textContent--;
    if (eleDay.textContent == "0") {
      clearInterval(counterdays);
    }
  }, 86_400_000);
}
dayDown(day);

function hourDown(eleHour) {
  setInterval(() => {
    eleHour.textContent--;
    if (eleHour.textContent == "0") {
      eleHour.textContent = 24;
    }
  }, 3_600_000);
}
hourDown(hour);

function minuteDown(eleMunite) {
  setInterval(() => {
    eleMunite.textContent--;
    if (eleMunite.textContent == "0") {
      eleMunite.textContent = 60;
    }
  }, 60_000);
}
minuteDown(minute);

function secondDown(eleSecond) {
  setInterval(() => {
    eleSecond.textContent--;
    if (eleSecond.textContent == "0") {
      eleSecond.textContent = 60;
    }
  }, 1000);
}
secondDown(second);
