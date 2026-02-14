import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function backgroundTransition() {
  const sections = gsap.utils.toArray("section");

  sections.forEach((section) => {
    const colorAttr = section.getAttribute("data-color");
    if (!colorAttr) return;

    const rootStyles = getComputedStyle(document.documentElement);

    const bgColor = colorAttr === "dark" ? rootStyles.getPropertyValue("--dark-color").trim() : rootStyles.getPropertyValue("--light-color").trim();

    const textColor = colorAttr === "dark" ? rootStyles.getPropertyValue("--light-color").trim() : rootStyles.getPropertyValue("--dark-color").trim();

    ScrollTrigger.create({
      trigger: section,
      start: "top center",
      end: "bottom center",
      markers: false,

      onEnter: () => {
        gsap.to(":root", {
          "--bg-color": bgColor,
          "--text-color": textColor,
          ease: "power2.out",
          overwrite: "auto",
        });
        gsap.to(".workSec .workBox p", {
          color: colorAttr === "light" ? "var(--dark-color)" : "var(--accent-text-color)",
        });
      },

      onEnterBack: () => {
        gsap.to(":root", {
          "--bg-color": bgColor,
          "--text-color": textColor,
          ease: "power2.out",
          overwrite: "auto",
        });
        gsap.to(".workSec .workBox p", {
          color: colorAttr === "light" ? "var(--dark-color)" : "var(--accent-text-color)",
        });
      },
    });
  });
}
