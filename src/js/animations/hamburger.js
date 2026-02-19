export default function hamburger() {
  const btn = document.querySelector(".hamburger");
  const nav = document.querySelector(".navbar-nav");
  const links = document.querySelectorAll(".navbar-nav .nav-item a");

  btn.addEventListener("click", () => {
    btn.classList.toggle("open");
    nav.classList.toggle("open");
  });

  // Close on link click
  links.forEach((link) => {
    link.addEventListener("click", () => {
      btn.classList.remove("open");
      nav.classList.remove("open");
    });
  });
}
