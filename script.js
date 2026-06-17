// PROJECT CAROUSEL
const projectTrack = document.querySelector(".project-track");
const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");

if (projectTrack && nextBtn && prevBtn) {
  nextBtn.addEventListener("click", () => {
    projectTrack.scrollBy({
      left: 320,
      behavior: "smooth"
    });
  });

  prevBtn.addEventListener("click", () => {
    projectTrack.scrollBy({
      left: -320,
      behavior: "smooth"
    });
  });
}


// HERO SCROLL TEXT MOVEMENT
const heroSection = document.querySelector(".hero-section");
const heroLeftGroup = document.querySelector(".hero-left-group");
const heroRightGroup = document.querySelector(".hero-right-group");

window.addEventListener("scroll", () => {
  if (!heroSection || !heroLeftGroup || !heroRightGroup) return;

  const heroHeight = heroSection.offsetHeight;
  const scrollValue = window.scrollY;

  let progress = scrollValue / heroHeight;
  progress = Math.min(Math.max(progress, 0), 1);

  const moveAmount = progress * 420;

  heroLeftGroup.style.transform = `translateX(${moveAmount}px)`;
  heroRightGroup.style.transform = `translateX(-${moveAmount}px)`;
});


// SCROLL REVEAL ANIMATION
const revealElements = document.querySelectorAll(
  ".about-left, .about-right, .tools-title, .section-heading, .project-card, .achievement-header, .book-item, .experience-top, .skill-card, .contact-header, .contact-card"
);

revealElements.forEach((element) => {
  element.classList.add("reveal");
});

function revealOnScroll() {
  revealElements.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (elementTop < windowHeight - 80) {
      element.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);
