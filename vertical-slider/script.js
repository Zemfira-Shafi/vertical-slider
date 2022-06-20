const container = document.querySelector(".container");
const leftSlide = document.querySelectorAll(".left-slide-text");
const rightSlide = document.querySelectorAll(".right-slide-img");
const downButton = document.querySelector(".down-button");
const upButton = document.querySelector(".up-button");
const rightButton = document.querySelector(".right-button");
const leftButton = document.querySelector(".left-button");

let activeSlideIndex = 0;
let isEnabled = true;

function changeSlide(n) {
  activeSlideIndex = (n + rightSlide.length) % rightSlide.length;
}

function hideSlides(right, left) {
  isEnabled = false;
  rightSlide[activeSlideIndex].classList.add(right);
  rightSlide[activeSlideIndex].addEventListener("animationend", function () {
    this.classList.remove("active", right);
  });
  leftSlide[activeSlideIndex].classList.add(left);
  leftSlide[activeSlideIndex].addEventListener("animationend", function () {
    this.classList.remove("active", left);
  });
}

function showSlides(right, left) {
  rightSlide[activeSlideIndex].classList.add("next", right);
  rightSlide[activeSlideIndex].addEventListener("animationend", function () {
    this.classList.remove("next", right);
    this.classList.add("active");
    isEnabled = true;
  });
  leftSlide[activeSlideIndex].classList.add("next", left);
  leftSlide[activeSlideIndex].addEventListener("animationend", function () {
    this.classList.remove("next", left);
    this.classList.add("active");
  });
}

function nextSlide(n) {
  hideSlides("to-top", "to-bottom");
  changeSlide(n + 1);
  showSlides("from-bottom", "from-top");
}

function preSlide(n) {
  hideSlides("to-bottom", "to-top");
  changeSlide(n - 1);
  showSlides("from-top", "from-bottom");
}

downButton.addEventListener("click", function () {
  if (isEnabled) {
    preSlide(activeSlideIndex);
  }
});

upButton.addEventListener("click", function () {
  if (isEnabled) {
    nextSlide(activeSlideIndex);
  }
});

function nextSlider(n) {
  hideSlides("to-left", "to-left");
  changeSlide(n + 1);
  showSlides("from-right", "from-right");
}

function previousSlider(n) {
  hideSlides("to-right", "to-right");
  changeSlide(n - 1);
  showSlides("from-left", "from-left");
}

leftButton.addEventListener("click", function () {
  if (isEnabled) {
    previousSlider(activeSlideIndex);
  }
});

rightButton.addEventListener("click", function () {
  if (isEnabled) {
    nextSlider(activeSlideIndex);
  }
});
