const menuToggle = document.querySelector(".menu-toggle");
const siteMenu = document.querySelector(".site-menu");
const menuLinks = document.querySelectorAll(".site-menu a");
const contactForm = document.querySelector("#contact-form");
const formMessage = document.querySelector("#form-message");

// Open and close the mobile navigation menu.
menuToggle.addEventListener("click", function () {
    const isOpen = siteMenu.classList.toggle("is-open");
    menuToggle.setAttribute("aria-expanded", isOpen);
});

menuLinks.forEach(function (link) {
    link.addEventListener("click", function () {
        siteMenu.classList.remove("is-open");
        menuToggle.setAttribute("aria-expanded", "false");
    });
});

// This demo form gives feedback without pretending to send an email.
contactForm.addEventListener("submit", function (event) {
    event.preventDefault();
    formMessage.textContent = "Thank you. This form is ready to connect to an email service later.";
    contactForm.reset();
});