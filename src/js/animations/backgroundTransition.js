import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

let sections = gsap.utils.toArray('section')

export default function backgroundTransition() {
  sections.forEach((section, i) => {
    if (section.getAttribute('data-color') !== null) {
      let colorAttr = section.getAttribute('data-color')

      let trigger = ScrollTrigger.create({
        trigger: section,
        start: 'top center',
        end: '+=100%',
        // invalidateOnRefresh: true,
        markers: true,
        onToggle() {
          gsap.to('body', {
            backgroundColor: colorAttr === 'dark' ? gsap.getProperty('html', '--dark-color') : gsap.getProperty('html', '--light-color'),
            color: colorAttr === 'dark' ? gsap.getProperty('html', '--light-color') : gsap.getProperty('html', '--dark-color'),
          })
        },
      })

      return () => {
        color = section.getAttribute('data-color')
        if (trigger.isActive) {
          gsap.killTweensOf('body')
          gsap.set('body', {
            backgroundColor: color,
          })
        }
      }
    }
  })
}
