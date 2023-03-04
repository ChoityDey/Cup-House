$(document).ready(function () {
  let search_btn = document.querySelector(".search-btn");
  let search_form = document.querySelector(".search-form");

  search_btn.onclick = () => {
    search_form.classList.toggle("active");
  };

  let cart_btn = document.querySelector(".cart-btn");
  let cart_items = document.querySelector(".cart-items");

  cart_btn.onclick = () => {
    cart_items.classList.toggle("active");
  };
  let menu_btn = document.querySelector(".menu-btn i");
  let menu_list = document.querySelector(".menus");

  menu_btn.onclick = () => {
    menu_list.classList.toggle("active");
    menu_icon.classList.toggle("bx bx-x");
    cart_items.classList.remove("active");
    search_form.classList.remove("active");
  };

  window.onscroll = () => {
    cart_items.classList.remove("active");
    search_form.classList.remove("active");
    menu_list.classList.remove("active");
  };
});
