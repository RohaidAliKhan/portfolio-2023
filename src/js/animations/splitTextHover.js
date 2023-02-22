import gsap from 'gsap'
import SplitType from 'split-type'
import { debounce } from './utils'

const textHoverElements = gsap.utils.toArray('.text-hover')
let split = new SplitType(textHoverElements, { type: 'lines,words', tagName: 'span', wordClass: 'block', charClass: 'letter' })

const updateStyles = () => {
  const visibleClass = window.innerWidth > 575 ? 'xs-visible' : 'md-visible'
  split.lines.forEach((line) => {
    const childNode = line.childNodes[0]
    if (childNode.classList.contains(visibleClass)) {
      childNode.style.display = 'block'
      // console.log(childNode)
    } else {
      // console.log(visibleClass)
      childNode.style.display = 'block'
      // childNode.style.display = 'block'
    }
  })
}

export default function textHover() {
  // updateStyles()

  split.words.forEach((target) => {
    target.style.display = 'block'
    const blockElement = document.createElement('div')
    target.childNodes.forEach((chars, i) => {
      chars.style.setProperty('--delay', `${0.05 * i}s`)
    })
    target.parentElement.appendChild(target.cloneNode(true))
  })

  // Debounce updateStyles function on resize
  window.addEventListener('resize', debounce(updateStyles, 250))

  // console.time('function execution time')
  // textHoverElements.forEach((textHoverElement) => {
  //   const text = textHoverElement.innerText
  //   textHoverElement.innerHTML = ''
  //   const blockElement = document.createElement('span')
  //   blockElement.classList.add('block')
  //   for (let i = 0; i < text.length; i++) {
  //     const character = text[i]
  //     const letterElement = document.createElement('span')
  //     letterElement.innerText = character.trim() ? character.toLowerCase() : ' '
  //     letterElement.classList.add('letter')
  //     letterElement.style.setProperty('--delay', `${0.05 * i}s`)
  //     blockElement.appendChild(letterElement)
  //   }
  //   textHoverElement.appendChild(blockElement)
  //   textHoverElement.appendChild(blockElement.cloneNode(true))
  // })
  // console.timeEnd('function execution time')
}
