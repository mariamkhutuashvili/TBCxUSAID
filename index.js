import moduleData from "./modules.js";

const header = document.getElementById("mainHeader");
const burgerBtn = document.getElementById("burger");
const navList = document.getElementById("navList");
const container = document.getElementById("module-container");
const buttons = document.querySelectorAll("button");
const sliderContainer = document.querySelector(".partners .container");
const sliders = document.querySelectorAll(".partners .container > div");
const leftArrow = document.getElementById("left-arrow");
const rightArrow = document.getElementById("right-arrow");

document.addEventListener("scroll", function () {
  if (window.scrollY > 100) {
    header.classList.add("transparent");
  } else {
    header.classList.remove("transparent");
  }
});

burgerBtn.addEventListener("click", function () {
  navList.classList.toggle("mobile-active");
  const icon = burgerBtn.querySelector("div");
  icon.classList.toggle("openmenu");

  document.body.style.overflow =
    document.body.style.overflow === "hidden" ? "auto" : "hidden";
});

document.addEventListener("click", function (event) {
  if (
    !event.target.closest(".navigation__list") &&
    !event.target.closest("#menuBtn")
  ) {
    navList.classList.remove("mobile-links");
  }
});

moduleData.map((module) => {
  const moduleElement = document.createElement("div");
  moduleElement.className = "module";
  moduleElement.innerHTML = `
      <img src="${module.imgUrl}" alt=""/>
      <div class="module__info">
        <p class="module__title">${module.title}</p>
        <p class="module__desc">${module.info}</p>
      </div>
      <span class="module__details">${module.details}</span>
    `;
  container.appendChild(moduleElement);
});

const totalSlides = sliders.length;
let currentSlide = 1;

function showSlide(index) {
  sliders.forEach((slider) => {
    slider.style.display = "none";
  });
  sliders[index - 1].style.display = "flex";
}

function updateDots() {
  if (!dotsContainer) {
    return;
  }

  while (dotsContainer.firstChild) {
    dotsContainer.removeChild(dotsContainer.firstChild);
  }

  for (let i = 1; i <= totalSlides; i++) {
    const dot = document.createElement("span");
    dot.className = "dot";
    dot.addEventListener("click", () => {
      currentSlide = i;
      showSlide(currentSlide);
      updateDots();
    });
    if (i === currentSlide) {
      dot.classList.add("active");
    }
    dotsContainer.appendChild(dot);
  }
}

function handleArrowClick(direction) {
  if (direction === "prev") {
    currentSlide =
      (currentSlide - 1 + totalSlides) % totalSlides || totalSlides;
  } else {
    currentSlide = (currentSlide % totalSlides) + 1;
  }
  showSlide(currentSlide);
  updateDots();
}

leftArrow.addEventListener("click", () => handleArrowClick("prev"));
rightArrow.addEventListener("click", () => handleArrowClick("next"));

const dotsContainer = document.createElement("div");
dotsContainer.className = "slider-dots";
sliderContainer.appendChild(dotsContainer);
showSlide(currentSlide);
updateDots();

setInterval(() => handleArrowClick("next"), 4000);

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const currentQueries = button.nextElementSibling;
    const currentIcon = button.querySelector(".d-arrow");

    if (currentQueries && currentIcon) {
      buttons.forEach((otherButton) => {
        if (otherButton !== button) {
          const otherQueries = otherButton.nextElementSibling;
          const otherIcon = otherButton.querySelector(".d-arrow");

          if (otherQueries && otherIcon) {
            otherQueries.classList.remove("show");
            otherIcon.classList.remove("rotate");
          }
        }
      });
      currentQueries.classList.toggle("show");
      currentIcon.classList.toggle("rotate");
    }
  });
});

let touchStartX = 0;

sliderContainer.addEventListener("touchstart", (e) => {
  touchStartX = e.touches[0].clientX;
});

sliderContainer.addEventListener("touchend", (e) => {
  const touchEndX = e.changedTouches[0].clientX;
  const swipeThreshold = 50;

  if (touchStartX - touchEndX > swipeThreshold) {
    handleArrowClick("next");
  } else if (touchEndX - touchStartX > swipeThreshold) {
    handleArrowClick("prev");
  }
});
