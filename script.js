// ----- NAVIGATION BAR FUNCTION -----
function myMenuFunction() {
  const menuBtn = document.getElementById("myNavMenu");

  if (menuBtn.className === "nav-menu") {
    menuBtn.className += " responsive";
  } else {
    menuBtn.className = "nav-menu";
  }
}

// ----- ADD SHADOW ON NAVIGATION BAR WHILE SCROLLING -----
window.onscroll = function () {
  headerShadow();
  scrollActive();
};

function headerShadow() {
  const navHeader = document.getElementById("header");

  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
    navHeader.style.height = "70px";
    navHeader.style.lineHeight = "70px";
  } else {
    navHeader.style.boxShadow = "none";
    navHeader.style.height = "90px";
    navHeader.style.lineHeight = "90px";
  }
}

// ----- TYPING EFFECT -----
var typingEffect = new Typed(".typedText", {
  strings: ["Web Developer", "Data Analyst"],
  loop: true,
  typeSpeed: 100,
  backSpeed: 80,
  backDelay: 2000,
});

// ----- SCROLL REVEAL ANIMATION -----
const sr = ScrollReveal({
  origin: "top",
  distance: "80px",
  duration: 2000,
  reset: true,
});

sr.reveal(".featured-text-card", {});
sr.reveal(".featured-name", { delay: 100 });
sr.reveal(".featured-text-info", { delay: 200 });
sr.reveal(".social_icons", { delay: 200 });
sr.reveal(".featured-image", { delay: 300 });
sr.reveal(".project-box", { interval: 200 });
sr.reveal(".top-header", {});

// LEFT SIDE ANIMATIONS
ScrollReveal().reveal(".about-info", {
  origin: "left",
  distance: "80px",
  duration: 2000,
  reset: true,
  delay: 1000,
});

ScrollReveal().reveal(".contact-info", {
  origin: "left",
  distance: "80px",
  duration: 2000,
  reset: true,
  delay: 1000,
});

sr.reveal(".internship-box", {
  origin: "bottom",
  distance: "60px",
  duration: 2000,
  interval: 200,
  reset: true,
});

// RIGHT SIDE ANIMATIONS
ScrollReveal().reveal(".skills-box", {
  origin: "right",
  distance: "80px",
  duration: 2000,
  reset: true,
  delay: 100,
});

ScrollReveal().reveal(".form-control", {
  origin: "right",
  distance: "80px",
  duration: 2000,
  reset: true,
  delay: 100,
});

// ----- ACTIVE NAV LINK ON SCROLL -----
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    const sectionId = current.getAttribute("id");

    const navLink = document.querySelector(
      ".nav-menu a[href*=" + sectionId + "]"
    );

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      navLink.classList.add("active-link");
    } else {
      navLink.classList.remove("active-link");
    }
  });
}
