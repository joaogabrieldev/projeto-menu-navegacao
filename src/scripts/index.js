const btnMenu = document.querySelector(".btn-menu");
const navMenu = document.querySelector(".nav-container");

btnMenu.addEventListener("click", () => {
  btnMenu.classList.toggle("ativo");
  navMenu.classList.toggle("nav-ativo");
});

const navLinks = document.querySelectorAll(".li-nav");

navLinks.forEach((item) => {
  item.addEventListener("click", (event) => {
    navLinks.forEach((outroItem) => {
      outroItem.classList.remove("item-ativo");
    });

    event.currentTarget.classList.add("item-ativo");
  });
});
