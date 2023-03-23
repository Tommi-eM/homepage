let section__button = document.querySelector(".section__button");
let body = document.querySelector(".body");
let colorName = document.querySelector(".colorName");

section__button.addEventListener("click", () => {
    body.classList.toggle("darkBackground");

    colorName.innerText = body.classList.contains("darkBackground") ? "jasny" : "ciemny";
});