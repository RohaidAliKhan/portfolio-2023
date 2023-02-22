import Lenis from '@studio-freight/lenis'

// Initialize smooth scroll
export function smoothScroll() {
  const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
    direction: 'vertical', // vertical, horizontal
    gestureDirection: 'vertical', // vertical, horizontal, both
    smooth: true,
    mouseMultiplier: 1,
    smoothTouch: false,
    touchMultiplier: 1,
  })

  function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }

  requestAnimationFrame(raf)
}

// Get Local Time
export function updateTime(timeSpan) {
  const optionsTime = {
    timeZoneName: 'short',
    hour: '2-digit',
    hour12: 'true',
    minute: 'numeric',
  }

  const formatter = new Intl.DateTimeFormat([], optionsTime)
  update()
  setInterval(update, 1000)

  function update() {
    const dateTime = new Date()
    const formattedDateTime = formatter.format(dateTime)
    timeSpan.textContent = formattedDateTime
  }
}

// Copy to Clipboard
export function copyToboard(button, textCopy) {
  button.addEventListener('click', (e) => {
    e.preventDefault
    const text = textCopy.innerText

    navigator.clipboard
      .writeText(text)
      .then(() => {
        // console.log(`Copied "${text}" to clipboard`)
        document.querySelector('.mf-cursor-text').innerText = `Copied!`
      })
      .catch((err) => {
        // console.error(`Error copying text: ${err}`)
      })
  })
}

// Define a debounce function
export const debounce = (func, delay) => {
  let timeout
  return (...args) => {
    clearTimeout(timeout)
    timeout = setTimeout(() => {
      func.apply(this, args)
    }, delay)
  }
}
