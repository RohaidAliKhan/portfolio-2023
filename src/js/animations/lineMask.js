import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SplitType from 'split-type'
let split = new SplitType('.splitLines h2', { type: 'lines, words', absolute: false })
let masks
export default function lineMask() {
  masks = []
  split.lines.forEach((target) => {
    // Create a wrapper element for the original content and the mask
    let wrapper = document.createElement('div')
    wrapper.className = 'wrapper'

    // Wrap the original content in a new div
    let content = document.createElement('div')
    content.className = 'content'
    content.innerHTML = target.innerHTML

    // Add the content and the mask to the wrapper
    wrapper.append(content)

    // Create a mask element
    let mask = document.createElement('div')
    mask.className = 'mask'
    mask.textContent = target.textContent

    // Append the mask to the wrapper
    wrapper.append(mask)

    // Replace the target content with the wrapper
    target.innerHTML = ''
    target.append(wrapper)

    masks.push(mask)
    gsap.from(mask, {
      clipPath: 'inset(0 100% 0 0)',
      ease: 'none',
      scrollTrigger: {
        trigger: target,
        scrub: 1,
        start: 'top center',
        end: 'bottom+=30 center',
        // markers: true,
      },
    })
  })
}
// Update animation for window resize
window.addEventListener('resize', newTriggers)

function newTriggers() {
  ScrollTrigger.getAll().forEach((trigger, i) => {
    trigger.kill()
    if (trigger.length > 0) {
      masks[i].remove()
    }
  })
  split.split()
  lineMask()
}
