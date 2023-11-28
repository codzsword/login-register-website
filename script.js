// Toggle Visibility Of Navbar When Button Clicked

const navToggle = document.querySelector(".navbar-toggle");
navToggle.addEventListener("click", function () {
  document.querySelector(".portfolio-navbar").classList.toggle("show");
});

// Toggle Login & Register Form

const modals = document.querySelectorAll(".modal");

function showLogin() {}

function showRegister() {}

function closeModal() {
  modals.forEach((tab) => {
    tab.classList.remove("show");
  });
}
