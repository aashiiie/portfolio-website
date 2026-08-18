/* ================= TYPING EFFECT ================= */

const typingText = document.getElementById("typing");

const words = [
    "Web Developer",
    "HTML Developer",
    "CSS Developer",
    "Frontend Developer"
];

let wordIndex = 0;
let letterIndex = 0;
let deleting = false;


function typeEffect() {

    const currentWord = words[wordIndex];

    if (deleting) {

        typingText.textContent =
            currentWord.substring(0, letterIndex - 1);

        letterIndex--;

    } else {

        typingText.textContent =
            currentWord.substring(0, letterIndex + 1);

        letterIndex++;
    }


    let speed = deleting ? 70 : 120;


    if (!deleting && letterIndex === currentWord.length) {

        speed = 1500;

        deleting = true;
    }


    if (deleting && letterIndex === 0) {

        deleting = false;

        wordIndex++;

        if (wordIndex === words.length) {
            wordIndex = 0;
        }

        speed = 500;
    }


    setTimeout(typeEffect, speed);
}


typeEffect();



/* ================= DARK MODE ================= */

const themeBtn = document.getElementById("themeBtn");


themeBtn.addEventListener("click", function () {

    document.body.classList.toggle("dark");


    if (document.body.classList.contains("dark")) {

        themeBtn.textContent = "☀️";

    } else {

        themeBtn.textContent = "🌙";
    }

});



/* ================= MOBILE MENU ================= */

const menuBtn = document.getElementById("menuBtn");

const navbar = document.getElementById("navbar");


menuBtn.addEventListener("click", function () {

    navbar.classList.toggle("active");

});



/* ================= CLOSE MENU ================= */

const navLinks = document.querySelectorAll("nav a");


navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navbar.classList.remove("active");

    });

});



/* ================= SCROLL ANIMATION ================= */

const sections = document.querySelectorAll("section");


function showSections() {

    sections.forEach(function (section) {

        const sectionTop =
            section.getBoundingClientRect().top;

        const windowHeight =
            window.innerHeight;


        if (sectionTop < windowHeight - 100) {

            section.classList.add("show");

        }

    });

}


window.addEventListener("scroll", showSections);

showSections();



/* ================= CONTACT FORM ================= */

const contactForm = document.getElementById("contactForm");

const formMessage = document.getElementById("formMessage");


contactForm.addEventListener("submit", function (event) {

    event.preventDefault();


    const name =
        document.getElementById("name").value.trim();

    const email =
        document.getElementById("email").value.trim();

    const message =
        document.getElementById("message").value.trim();


    if (name === "" || email === "" || message === "") {

        formMessage.textContent =
            "Please fill in all fields.";

        formMessage.style.color = "red";

        return;
    }


    formMessage.textContent =
        "Thank you! Your message is ready to send.";

    formMessage.style.color = "#00adb5";


    contactForm.reset();

});