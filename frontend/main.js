const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

if (menuToggle && navLinks) {
  menuToggle.setAttribute("aria-expanded", "false");

  menuToggle.addEventListener("click", () => {
    const menuOpen = navLinks.classList.toggle("active");

    menuToggle.setAttribute("aria-expanded", menuOpen);
  });

  const links = document.querySelectorAll(".nav-links a");

  links.forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");

      menuToggle.setAttribute("aria-expanded", "false");
    });
  });

  document.addEventListener("click", (event) => {
    const clickedOutside =
      !navLinks.contains(event.target) && !menuToggle.contains(event.target);

    if (clickedOutside) {
      navLinks.classList.remove("active");

      menuToggle.setAttribute("aria-expanded", "false");
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      navLinks.classList.remove("active");

      menuToggle.setAttribute("aria-expanded", "false");
    }
  });
}
