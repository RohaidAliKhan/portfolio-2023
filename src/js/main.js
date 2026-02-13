import MouseFollower from "mouse-follower";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { lineMask, preloader, textHover, magneticButton, explodingText, honrizontalScroll, backgroundTransition, backgroundCurve } from "./animations";
import { updateTime, copyToboard, smoothScroll, mobileViewport } from "./animations/utils.js";
import { renderProjects } from "./projects";

const copyButton = document.querySelector("#copy-btn"),
  textToCopy = document.querySelector("#copy-text"),
  timeSpan = document.querySelector("#time");

document.addEventListener("DOMContentLoaded", async () => {
  gsap.registerPlugin(ScrollTrigger);
  // ScrollTrigger.normalizeScroll(true);
  MouseFollower.registerGSAP(gsap);
  mobileViewport();

  if (window.innerWidth > 540) {
    new MouseFollower({
      container: document.body,
      speed: 0.3,
    });
  }
  // 🔥 1. Inject projects first
  await renderProjects();

  // 🔥 2. Wait for images (important for layout stability)
  await Promise.all(
    Array.from(document.images)
      .filter((img) => !img.complete)
      .map(
        (img) =>
          new Promise((res) => {
            img.onload = img.onerror = res;
          }),
      ),
  );

  // 🔥 3. Run preloader (wait until it finishes)
  await preloader();

  // 🔥 4. Now initialize animations safely
  preloader();
  smoothScroll();
  textHover();
  honrizontalScroll();
  magneticButton();
  lineMask();
  // explodingText()

  backgroundTransition();
  copyToboard(copyButton, textToCopy);
  backgroundCurve();
  updateTime(timeSpan);
});
