import Lenis from "lenis";

// Initialize smooth scroll
export function smoothScroll() {
  const lenis = new Lenis({
    autoRaf: true,
  });
}

// Get Local Time
export function updateTime(timeSpan) {
  const optionsTime = {
    timeZoneName: "short",
    hour: "2-digit",
    hour12: "true",
    minute: "numeric",
  };

  const formatter = new Intl.DateTimeFormat([], optionsTime);
  update();
  setInterval(update, 1000);

  function update() {
    const dateTime = new Date();
    const formattedDateTime = formatter.format(dateTime);
    timeSpan.textContent = formattedDateTime;
  }
}

// Copy to Clipboard
export function copyToboard(button, textCopy) {
  button.addEventListener("click", (e) => {
    e.preventDefault;
    const text = textCopy.innerText;

    navigator.clipboard
      .writeText(text)
      .then(() => {
        // console.log(`Copied "${text}" to clipboard`)
        document.querySelector(".mf-cursor-text").innerText = `Copied!`;
      })
      .catch((err) => {
        // console.error(`Error copying text: ${err}`)
      });
  });
}

// Mobile Viewport Size
export function mobileViewport() {
  // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
  let vh = window.innerHeight * 0.01;
  // Then we set the value in the --vh custom property to the root of the document
  document.documentElement.style.setProperty("--vh", `${vh}px`);

  // We listen to the resize event
  window.addEventListener("resize", () => {
    // We execute the same script as before
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  });
}

// Define a debounce function
export const debounce = (func, delay) => {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
};
