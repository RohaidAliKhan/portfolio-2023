import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const paths = [...document.querySelectorAll('path.path-anim')]
// const path = `M 1920 63.96210937500001 Q 960 -63.96210937500001 0 63.96210937500001 L 0 852.828125 L 1920 852.828125 L 1920 127.92421875000002 Z`
gsap.registerPlugin(ScrollTrigger)

export default function backgroundCurve() {
  paths.forEach((el) => {
    const svgEl = el.closest('svg')
    const pathTo = el.dataset.pathTo

    gsap
      .timeline({
        scrollTrigger: {
          trigger: svgEl,
          start: 'top bottom',
          end: 'bottom center+=200',
          scrub: true,
        //   markers: true,
        },
      })
      .to(el, {
        ease: 'none',
        attr: { d: pathTo },
      })
  })
}
