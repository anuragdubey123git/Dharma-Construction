// Mobile menu
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

// Close menu on click
document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
  });
});

// Active link on scroll
// Active link on scroll (safe)
const sections = document.querySelectorAll("section[id]");
const navLinksList = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let scrollY = window.pageYOffset;

  sections.forEach(section => {
    const sectionHeight = section.offsetHeight;
    const sectionTop = section.offsetTop - 140;
    const sectionId = section.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      navLinksList.forEach(link => {
        link.classList.remove("active");
        document
          .querySelector('.nav-links a[href*=' + sectionId + ']')
          ?.classList.add("active");
      });
    }
  });
});


// Reveal animation on scroll
const reveals = document.querySelectorAll(".reveal");

const revealOnScroll = () => {
  reveals.forEach(el => {
    const top = el.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    if (top < windowHeight - 80) {
      el.classList.add("show");
    }
  });
};

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

// Footer year
document.getElementById("year").innerText = new Date().getFullYear();

// Contact Form (Front-end demo)
const form = document.getElementById("contactForm");
const note = document.getElementById("formNote");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !phone || !message) {
    note.innerText = "Please fill all details.";
    return;
  }

  note.innerText = "Message received successfully.";
  form.reset();

  // Optional: Open WhatsApp with message
  // window.open(`https://wa.me/919793017343?text=Name:%20${encodeURIComponent(name)}%0APhone:%20${encodeURIComponent(phone)}%0AMessage:%20${encodeURIComponent(message)}`, "_blank");
});


// Hero background slider
// Clean hero background slider (no mess)
const slides = document.querySelectorAll(".hero-slider img");
let currentSlide = 0;

// ensure first image is active
slides[0].classList.add("active");

setInterval(() => {
  slides[currentSlide].classList.remove("active");

  currentSlide++;
  if (currentSlide >= slides.length) {
    currentSlide = 0;
  }

  slides[currentSlide].classList.add("active");
}, 2500); // 🔥 changes early (2.5 seconds)

