import MouseFollower from 'mouse-follower'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { lineMask, preloader, textHover, magneticButton, explodingText, honrizontalScroll, backgroundTransition, backgroundCurve } from './animations'
import { updateTime, copyToboard, smoothScroll, mobileViewport } from './animations/utils.js'

const copyButton = document.querySelector('#copy-btn'),
  textToCopy = document.querySelector('#copy-text'),
  timeSpan = document.querySelector('#time')

document.addEventListener('DOMContentLoaded', () => {
  gsap.registerPlugin(ScrollTrigger)
  ScrollTrigger.normalizeScroll(true)
  MouseFollower.registerGSAP(gsap)
  mobileViewport()

  if (window.innerWidth > 540) {
    new MouseFollower({
      container: document.body,
      speed: 0.3,
    })
  }
  preloader()
  smoothScroll()
  textHover()
  honrizontalScroll()
  magneticButton()
  lineMask()
  // explodingText()
  backgroundTransition()
  copyToboard(copyButton, textToCopy)
  backgroundCurve()
  updateTime(timeSpan)
})
