const bars = document.querySelector('.bars')
const links = document.querySelector('.links')
const overlay = document.querySelector('.overlay')
bars.addEventListener('click', () => {
  overlay.classList.toggle('active')
  links.classList.toggle('active')
  document.body.classList.toggle('active')
})