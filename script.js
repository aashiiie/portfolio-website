/* ================= TYPING EFFECT ================= */

const typingElement = document.getElementById("typing");

const words = [
    "Web Developer",
    "Frontend Developer",
    "Website Designer"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typingEffect() {

    const currentWord = words[wordIndex];

    if (!deleting) {

        typingElement.textContent =
            currentWord.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentWord.length) {

            deleting = true;

            setTimeout(typingEffect, 1500);

            return;
        }

    } else {

        typingElement.textContent =
            currentWord.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {

            deleting = false;

            wordIndex++;

            if (wordIndex === words.length) {
                wordIndex = 0;
            }
        }
    }

    setTimeout(
        typingEffect,
        deleting ? 60 : 100
    );
}

typingEffect();


/* ================= MOBILE MENU ================= */

const menuBtn = document.getElementById("menuBtn");
const navbar = document.getElementById("navbar");

menuBtn.addEventListener("click", function () {

    navbar.classList.toggle("active");

});


const navLinks =
    document.querySelectorAll("#navbar a");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navbar.classList.remove("active");

    });

});


/* ================= DARK MODE ================= */

const themeBtn =
    document.getElementById("themeBtn");

themeBtn.addEventListener("click", function () {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {

        themeBtn.textContent = "☀️";

    } else {

        themeBtn.textContent = "🌙";

    }

});


/* ================= SCROLL ANIMATION ================= */

const sections =
    document.querySelectorAll("section");

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

const contactForm =
    document.getElementById("contactForm");

const formMessage =
    document.getElementById("formMessage");

contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const name =
        document.getElementById("name").value.trim();

    const email =
        document.getElementById("email").value.trim();

    const message =
        document.getElementById("message").value.trim();


    if (
        name === "" ||
        email === "" ||
        message === ""
    ) {

        formMessage.textContent =
            "Please fill in all fields.";

        formMessage.style.color = "red";

        return;
    }


    const subject =
        encodeURIComponent(
            "Website Enquiry from " + name
        );

    const body =
        encodeURIComponent(
            "Name: " + name +
            "\nEmail: " + email +
            "\n\nMessage:\n" + message
        );


    window.location.href =
        "mailto:aashimashi8714@gmail.com" +
        "?subject=" + subject +
        "&body=" + body;


    formMessage.textContent =
        "Opening your email app...";

    formMessage.style.color =
        "#00adb5";

});