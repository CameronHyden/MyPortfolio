"use strict";

var hamburgerLink = document.getElementsByClassName('hamburger-link')[0];
var navLinks = document.getElementsByClassName('navbar__links')[0];
hamburgerLink.addEventListener('click', function () {
  navLinks.classList.toggle('active');
});