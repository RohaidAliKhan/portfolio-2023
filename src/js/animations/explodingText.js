import gsap from 'gsap'
import SplitType from 'split-type'

const Y_PERCENT = 25
const Y_PERCENT_RANDOM_OFFSET_MAX = 15
const X_PERCENT = 100
const ROTATION_RANDOM_OFFSET_MAX = 15

// const ACTIVE_COLOR = `#ececec`
// const INACTIVE_COLOR = `#414141`

const ANIMATE_ATTR_NAME = `[data-exploding-text="animated-text"]`
const GENERAL_ATTR_NAME = `[data-exploding-text]`

// interpolates from -X_PERCENT and +X_PERCENT based on string length
const getXPercent = (strLength, strIndex) => {
  return (X_PERCENT * 2 * strIndex) / (strLength - 1) - X_PERCENT
}

// returns y percent value to translate character
const getYPercent = (strIndex) => {
  // get a random integer between -Y_PERCENT_OFFSET_MAX and +-Y_PERCENT_OFFSET_MAX
  const randomOffset = Math.floor(Math.random() * (2 * Y_PERCENT_RANDOM_OFFSET_MAX + 1)) - Y_PERCENT_RANDOM_OFFSET_MAX
  // alternate Y_PERCENT for even/odd characters
  const yPercent = strIndex % 2 === 0 ? Y_PERCENT * -1 : Y_PERCENT

  return yPercent + randomOffset
}

// returns random rotation value between -ROTATION_RANDOM_OFFSET_MAX and +ROTATION_RANDOM_OFFSET_MAX
const getRandomRotation = () => {
  return Math.floor(Math.random() * (2 * ROTATION_RANDOM_OFFSET_MAX + 1)) - ROTATION_RANDOM_OFFSET_MAX
}

const explodingText = () => {
  // select elements
  const explodingTextElements = document.querySelectorAll(ANIMATE_ATTR_NAME)
  const allTextElements = document.querySelectorAll(GENERAL_ATTR_NAME)

  // do nothing if we can't find anything
  if (!explodingTextElements) return

  explodingTextElements.forEach((explodingTextElement) => {
    // splits the text element into characters
    const splitText = new SplitType(explodingTextElement)
    const chars = splitText.chars

    // listen for hover event
    explodingTextElement.addEventListener('mouseenter', () => {
      if (!chars) return

      allTextElements.forEach((el) => {
        // if it matches the element we want to animate
        if (el === explodingTextElement) {
          //   gsap.to(explodingTextElement, { color: ACTIVE_COLOR })
          for (let i = 0; i < chars.length; i++) {
            let xPercent = getXPercent(chars.length, i)
            let yPercent = getYPercent(i)
            let rotateZ = getRandomRotation()
            gsap.to(chars[i], {
              xPercent,
              yPercent,
              rotateZ,
            })
          }
        } else {
          // changes all non-animating elements to INACTIVE COLOR
          //   gsap.to(el, { color: INACTIVE_COLOR })
        }
      })
    })

    // listen for hover out
    explodingTextElement.addEventListener('mouseleave', () => {
      if (!chars) return

      // reset characters to original positions
      gsap.to(chars, {
        xPercent: 0,
        yPercent: 0,
        rotateZ: 0,
      })

      // reset color to ACTIVE_COLOR for all text elements
      //   allTextElements.forEach((el) => {
      //     gsap.to(el, {
      //       color: ACTIVE_COLOR,
      //     })
      //   })
    })
  })
}

export default explodingText
