// footer - show link on arrow click
const footerLinks = document.querySelectorAll('.footer__links')

const arrowDown = document.querySelectorAll('.icon-arrow')

arrowDown.forEach((arrow) => {
  arrow.addEventListener('click', (e) => {
    arrow.classList.toggle('rotate-arrow')
    arrow.parentElement.nextElementSibling.classList.toggle('show-links')
  })
})

// show mobile menu on hamburger menu click
const mobileMenuIcon = document.querySelector('.hamburger-menu')
const mobileMenu = document.querySelector('.mobile-menu')
const body = document.body
const hamburgerBarTop = document.querySelector('.line-top')
const hamburgerBarMiddle = document.querySelector('.line-middle')
const hamburgerBarBottom = document.querySelector('.line-bottom')

mobileMenuIcon.addEventListener('click', () => {
  mobileMenu.classList.toggle('showMenu')

  if (mobileMenu.classList.contains('showMenu')) {
    body.style.overflow = 'hidden'
  } else {
    body.style.overflow = 'visible'
  }

  hamburgerBarTop.classList.toggle('line-top-js')
  hamburgerBarMiddle.classList.toggle('line-middle-js')
  hamburgerBarBottom.classList.toggle('line-bottom-js')
})
