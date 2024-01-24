import moduleData from "./modules.js";

const header = document.getElementById("mainHeader");
const burgerBtn = document.getElementById("burger");
const navList = document.getElementById("navList");
const container = document.getElementById("module-container");

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
