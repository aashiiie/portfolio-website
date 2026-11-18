// TYPING ANIMATION

const typingElement = document.getElementById("typing");

const words = [
  "Frontend Developer",
  "Web Developer",
  "Website Designer"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typingEffect() {

  if (!typingElement) return;

  const word = words[wordIndex];

  typingElement.textContent = word.substring(
    0,
    charIndex + (deleting ? -1 : 1)
  );

  charIndex += deleting ? -1 : 1;

  let delay = deleting ? 55 : 95;

  if (!deleting && charIndex === word.length) {

    deleting = true;
    delay = 1400;

  } else if (deleting && charIndex === 0) {

    deleting = false;
    wordIndex = (wordIndex + 1) % words.length;
    delay = 350;

  }

  window.setTimeout(typingEffect, delay);
}

typingEffect();


// MOBILE NAVIGATION

const menuBtn = document.getElementById("menuBtn");
const navbar = document.getElementById("navbar");

if (menuBtn && navbar) {

  menuBtn.addEventListener("click", () => {

    const isOpen = navbar.classList.toggle("active");

    menuBtn.setAttribute("aria-expanded", String(isOpen));

    menuBtn.textContent = isOpen ? "✕" : "☰";

  });

  navbar.querySelectorAll("a").forEach(link => {

    link.addEventListener("click", () => {

      navbar.classList.remove("active");

      menuBtn.setAttribute("aria-expanded", "false");

      menuBtn.textContent = "☰";

    });

  });

}


// SCROLL REVEAL ANIMATION

const revealItems = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {

  const observer = new IntersectionObserver((entries, obs) => {

    entries.forEach(entry => {

      if (entry.isIntersecting) {

        entry.target.classList.add("visible");

        obs.unobserve(entry.target);

      }

    });

  }, {
    threshold: 0.12
  });

  revealItems.forEach(item => observer.observe(item));

} else {

  revealItems.forEach(item => item.classList.add("visible"));

}


// ACTIVE NAVIGATION SECTION

const sections = document.querySelectorAll("main section[id]");
const navLinks = document.querySelectorAll(".nav-link");

if ("IntersectionObserver" in window) {

  const sectionObserver = new IntersectionObserver(entries => {

    entries.forEach(entry => {

      if (entry.isIntersecting) {

        navLinks.forEach(link => {

          link.classList.toggle(
            "active",
            link.getAttribute("href") === `#${entry.target.id}`
          );

        });

      }

    });

  }, {
    rootMargin: "-35% 0px -55% 0px"
  });

  sections.forEach(section => sectionObserver.observe(section));

}


// CONTACT FORM

const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

if (contactForm) {

  contactForm.addEventListener("submit", event => {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {

      formMessage.textContent = "Please fill in all fields.";

      return;

    }

    const subject = encodeURIComponent(`Website enquiry from ${name}`);

    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    );

    formMessage.textContent = "Opening your email application...";

    window.location.href =
      `mailto:aashimashi8714@gmail.com?subject=${subject}&body=${body}`;

  });

}