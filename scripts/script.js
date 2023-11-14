const bars = document.querySelector('.bars')
const overlay = document.querySelector('.overlay')
bars.addEventListener('click', () => {
  overlay.classList.toggle('active')
})