import gsap from 'gsap'
export default  function textHover() {
  const textHoverElements = gsap.utils.toArray('.text-hover')

  textHoverElements.forEach((textHoverElement) => {
    const text = textHoverElement.innerText
    textHoverElement.innerHTML = ''
    const blockElement = document.createElement('span')
    blockElement.classList.add('block')
    for (let i = 0; i < text.length; i++) {
      const character = text[i]
      const letterElement = document.createElement('span')
      letterElement.innerText = character.trim() ? character.toLowerCase() : ' '
      letterElement.classList.add('letter')
      letterElement.style.setProperty('--delay', `${0.05 * i}s`)
      blockElement.appendChild(letterElement)
    }
    textHoverElement.appendChild(blockElement)
    textHoverElement.appendChild(blockElement.cloneNode(true))
  })
}

