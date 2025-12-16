// toggle class active

const navbarNav = document.querySelector(".navbar-nav");
// ketika hamburger menu di klik
const btnHamburger = document.querySelector("#hamburger-menu");

if (btnHamburger) {
  console.log("Hamburger menu found");
  btnHamburger.addEventListener("click", () => {
    navbarNav.classList.toggle("active");
  });
}
//klik diluar sidebar untuk menghilangkan navbar

const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

// belajar memanipulsi Dom

const buah = ["Apel", "Mangga", "pisang", "Pepaya"];

console.log(buah);

buah.forEach(function (b) {
  console.log("Buah" + b);
});

const button = document.querySelector(".cta");

button.forEach((btn) => {
  btn.addEventListener("click");
});
