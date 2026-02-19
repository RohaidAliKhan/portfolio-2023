import MouseFollower from "mouse-follower";
import { gsap } from "gsap";
import Lenis from "lenis";
import "lenis/dist/lenis.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { lineMask, preloader, textHover, magneticButton, hoverCards, explodingText, honrizontalScroll, backgroundTransition, backgroundCurve } from "./animations";
import { updateTime, copyToboard, smoothScroll, mobileViewport } from "./animations/utils.js";

const copyButton = document.querySelector("#copy-btn"),
  textToCopy = document.querySelector("#copy-text"),
  timeSpan = document.querySelector("#time");

document.addEventListener("DOMContentLoaded", () => {
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
  // preloader();
  // smoothScroll()
  const lenis = new Lenis({
    autoRaf: true,
  });

  // Synchronize Lenis scrolling with GSAP's ScrollTrigger plugin
  lenis.on("scroll", ScrollTrigger.update);

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      console.log("clicked");
      e.preventDefault();
      lenis.scrollTo(this.getAttribute("href"));
    });
  });
  textHover();
  honrizontalScroll();
  magneticButton();
  lineMask();
  // explodingText()
  backgroundTransition();
  hoverCards();
  copyToboard(copyButton, textToCopy);
  backgroundCurve();
  updateTime(timeSpan);
});
