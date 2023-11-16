const bars = document.querySelector('.bars')
const links = document.querySelector('.links')
const overlay = document.querySelector('.overlay')
const programs = document.querySelector('.programs')
const slideItems = document.querySelectorAll('.person')
const options = document.querySelectorAll('.programs ul li')
const slideControls = document.querySelectorAll('.slider-controls span')
const programElements = document.querySelectorAll('.programs .program')
const programsBackgroundClasses = ['#ffc635', '#28eea7', '#9864da', '#fb508e']
bars.addEventListener('click', () => {
  overlay.classList.toggle('active')
  links.classList.toggle('active')
  document.body.classList.toggle('active')
})

options.forEach((option, index) => {
  option.addEventListener('click', () => {
    removeActiveFromElements(options)
    removeActiveFromElements(programElements)
    option.classList.toggle('active')
    programElements[index].classList.toggle('active')
    programs.style.backgroundColor = programsBackgroundClasses[index]
  })
})
function removeActiveFromElements(elements) {
  elements.forEach(element => {
    element.classList.remove('active')
  })
}
slideControls.forEach((control, index) => {
  control.addEventListener('click', () => {
    removeActiveFromElements(slideControls)
    removeActiveFromElements(slideItems)
    control.classList.toggle('active')
    slideItems[index].classList.toggle('active')
  })
})
function getRandomIndex() {
  const random = Math.floor(Math.random() * 4)
  removeActiveFromElements(slideControls)
  removeActiveFromElements(slideItems)
  return random
}
setInterval(() => {
  let index = getRandomIndex()
  slideControls[index].classList.toggle('active')
  slideItems[index].classList.toggle('active')
}, 4000)