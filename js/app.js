const hamburger_btn = document.querySelector(".hamburger-btn");

// Mobile Nav Slider
const mobile_nav_slider = document.querySelector(".mobile-nav-slider");
const slider_close_btn = document.querySelector(".slider-close-btn");

hamburger_btn.addEventListener("click", () => {
  mobile_nav_slider.classList.add("mobile_nav_slide_show");
});

slider_close_btn.addEventListener("click", () => {
  mobile_nav_slider.classList.remove("mobile_nav_slide_show");
  mobile_nav_dropdown.forEach((item, index) => {
    mobile_nav_dropdown[index].classList.remove("mobile-nav-dropdown-show");
    mobile_nav_link_i[index].innerHTML = `<i class="far fa-plus"></i>`;
    mobile_nav_link[index].childNodes[1].style.color = "white";
  });
});

const mobile_nav_link = document.querySelectorAll(".mobile-nav-link");
const clickable_link = document.querySelectorAll(".clickable-link");
const mobile_nav_link_i = document.querySelectorAll(".mobile-nav-link-i");
const mobile_nav_dropdown = document.querySelectorAll(".mobile-nav-dropdown");

clickable_link.forEach((item, index) => {
  item.addEventListener("click", () => {
    mobile_nav_dropdown[index].classList.toggle("mobile-nav-dropdown-show");
    if (
      mobile_nav_dropdown[index].classList.contains("mobile-nav-dropdown-show")
    ) {
      mobile_nav_link[index].childNodes[1].style.color = "#006c39";
      mobile_nav_link_i[index].innerHTML = `<i class="far fa-minus"></i>`;
    } else {
      mobile_nav_link_i[index].innerHTML = `<i class="far fa-plus"></i>`;
      mobile_nav_link[index].childNodes[1].style.color = "white";
    }
  });
});
