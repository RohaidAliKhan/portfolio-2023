import { gsap, Elastic, Power4 } from 'gsap'

export default  function magneticButton() {
  // Magnetic Buttons
  // Found via: https://codepen.io/tdesero/pen/RmoxQg
  var magnets = document.querySelectorAll('[data-magnetic]')
  var strength = 100

  // START : If screen is bigger as 540 px do magnetic
  if (window.innerWidth > 540) {
    // Mouse Reset
    magnets.forEach((magnet) => {
      magnet.addEventListener('mousemove', moveMagnet)
      magnet.parentNode.classList.remove('not-active')
      magnet.addEventListener('mouseleave', function (event) {
        gsap.to(event.currentTarget, 1.5, {
          x: 0,
          y: 0,
          ease: Elastic.easeOut,
        })
        gsap.to(magnet.querySelector('.btn-text'), 1.5, {
          x: 0,
          y: 0,
          ease: Elastic.easeOut,
        })
      })
    })

    // Mouse move
    function moveMagnet(event) {
      var magnetButton = event.currentTarget
      var bounding = magnetButton.getBoundingClientRect()
      var magnetsStrength = magnetButton.getAttribute('data-strength')
      var magnetsStrengthText = magnetButton.getAttribute('data-strength-text')

      gsap.to(magnetButton, 1.5, {
        x: ((event.clientX - bounding.left) / magnetButton.offsetWidth - 0.5) * magnetsStrength,
        y: ((event.clientY - bounding.top) / magnetButton.offsetHeight - 0.5) * magnetsStrength,
        rotate: '0.001deg',
        ease: Power4.easeOut,
      })

      var btnTextElement = magnetButton.querySelector('.btn-text')
      if (btnTextElement) {
        gsap.to(magnetButton.querySelector('.btn-text'), 1.5, {
          x: ((event.clientX - bounding.left) / magnetButton.offsetWidth - 0.5) * magnetsStrengthText,
          y: ((event.clientY - bounding.top) / magnetButton.offsetHeight - 0.5) * magnetsStrengthText,
          rotate: '0.001deg',
          ease: Power4.easeOut,
        })
      }
    }
  } // END : If screen is bigger as 540 px do magnetic
}
