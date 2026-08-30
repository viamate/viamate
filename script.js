const toggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".main-nav");

toggle?.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  toggle.setAttribute("aria-expanded", String(open));
});

document.querySelectorAll(".main-nav a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    toggle?.setAttribute("aria-expanded", "false");
  });
});

const sections = [...document.querySelectorAll("main section[id]")];
const navLinks = [...document.querySelectorAll(".main-nav a[href^='#']:not(.nav-cta)")];

const updateActiveLink = () => {
  const scrollY = window.scrollY + 140;
  let current = "home";

  for (const section of sections) {
    if (scrollY >= section.offsetTop) current = section.id;
  }

  navLinks.forEach((link) => {
    link.classList.toggle("active", link.getAttribute("href") === `#${current}`);
  });
};

window.addEventListener("scroll", updateActiveLink, { passive: true });
updateActiveLink();
