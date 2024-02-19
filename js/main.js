// HEADER BURGER MENU /////////////////////////

const menuBtn = document.querySelector(".menu-btn");

menuBtn.addEventListener("click", function () {
  document.body.classList.toggle("menu-opened");
});
// BACKTOP

window.addEventListener("scroll", function () {
  toggleBacktop();
});

let backtop = document.getElementById("backtop");

function toggleBacktop() {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 200
  ) {
    backtop.style.bottom = "20px";
  } else {
    backtop.style.bottom = "-60px";
  }
}
