"use strict";

// Adicionar event em múltiplos elementos
const addEventOnElements = function (elements, eventType, callback) {
   for (let i = 0; i < elements.length; i++) {
      elements[i].addEventListener(eventType, callback);
   }
};

// Funcionalidades da NavBar Mobile
const [navbar, navToggler, navbarLinks] = [document.querySelector("[data-navbar]"), document.querySelector("[data-nav-toggler]"), document.querySelectorAll("[data-nav-link]")];

const toggleNavbar = function () {
   navbar.classList.toggle("active");
   this.classList.toggle("active");
   document.body.classList.toggle("active");
};

navToggler.addEventListener("click", toggleNavbar);

const closeNavbar = function () {
   navbar.classList.remove("active");
   navToggler.classList.remove("active");
   document.body.classList.remove("active");
};

addEventOnElements(navbarLinks, "click", closeNavbar);

// Ativar Header
const header = document.querySelector("[data-header]");

const activeElemOnScroll = function () {
   if (window.scrollY >= 50) {
      header.classList.add("active");
   } else {
      header.classList.remove("active");
   }
};

window.addEventListener("scroll", activeElemOnScroll);
