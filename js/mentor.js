// toggle menu..
const toggleBtn = document.querySelector(".toggle");
const toggleBtnIcon = document.querySelector(".toggle i");
const dropDownMenu = document.querySelector(".dropdown-menu");

toggleBtn.onclick = function () {
  dropDownMenu.classList.toggle("open");
  const isOpen = dropDownMenu.classList.contains("open");
  toggleBtnIcon.classList = isOpen ? "fa-solid fa-times" : "fa-solid fa-bars";
};

// scroll to top..
const scrollToTop = document.getElementById("scroll-to-top");

window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    scrollToTop.style.display = "block";
  } else {
    scrollToTop.style.display = "none";
  }
});

$("#scroll-to-top").click(function () {
  $("html,body").animate({ scrollTop: 0 }, 1500);
});

// lazy loading..
$(document).ready(function () {
  $("#loading").fadeOut(3000, function () {
    $("body").css("overflow", "auto");
  });
});
