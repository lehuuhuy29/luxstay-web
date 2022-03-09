const searchPerson = document.querySelector(".header__search-person");
const filterPerson = document.querySelector(".filter-peson");
const searchDate = document.querySelector(".header__search-date");
const calendar = document.querySelector(".calendar");
const headerLanguage = document.querySelectorAll(".header__language-wrap");
const languageDetail = document.querySelectorAll(".header__language-detail");

console.log(headerLanguage);

searchPerson.addEventListener("click", (e) => {
  filterPerson.classList.add("active");
  searchPerson.style.boxShadow = "inset 0 0 0 2px rgb(0 0 0 / 14%)";
});

window.addEventListener("mouseup", (e) => {
  if (e.target != searchPerson || e.target.parentNode != searchPerson)
    filterPerson.classList.remove("active");
  searchPerson.style.boxShadow = "none";
});

searchDate.addEventListener("click", (e) => {
  calendar.classList.add("active");
  searchDate.style.boxShadow = "inset 0 0 0 2px rgb(0 0 0 / 14%)";
});

window.addEventListener("mouseup", (e) => {
  if (e.target != searchDate || e.target.parentNode != searchDate)
    calendar.classList.remove("active");
  searchDate.style.boxShadow = "none";
});

headerLanguage.forEach((item, index) => {
  item.addEventListener("click", (e) => {
    languageDetail.forEach((item, index) => {
      if (item.classList.contains("active")) {
        item.classList.remove("active");
      } else {
        item.classList.add("active");
      }
    });
  });
});
