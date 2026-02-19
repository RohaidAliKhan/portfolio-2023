import gsap from "gsap";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(SplitText);

export default function textHover() {
  const textHoverElements = gsap.utils.toArray(".text-hover");

  textHoverElements.forEach((el) => {
    const split = new SplitText(el, {
      type: "words,chars",
    });

    split.words.forEach((target) => {
      target.style.display = "inline-block";
      target.querySelectorAll(".char").forEach((char, i) => {
        char.style.setProperty("--delay", `${0.05 * i}s`);
      });
    });

    // Clone only the inner content, not the element itself
    // const clone = document.createElement("div");
    // clone.setAttribute("aria-hidden", "true");
    // clone.innerHTML = el.innerHTML;
    // el.appendChild(clone);
  });
}
