const bars = document.querySelector('.bars')
const links = document.querySelector('.links')
const overlay = document.querySelector('.overlay')
const programs = document.querySelector('.programs')
const slideItems = document.querySelectorAll('.person')
const options = document.querySelectorAll('.programs ul li')
const programElements = document.querySelectorAll('.programs .program')
const slideControls = document.querySelectorAll('.slider-controls span')
const programsBackgroundClasses = ['#ffc635', '#28eea7', '#9864da', '#fb508e']
function toggleClass(element, clas) {
  element.classList.toggle(clas)
}
function removeActiveFromElements(elements) {
  elements.forEach(element => {
    element.classList.remove('active')
  })
}
function getRandomIndex() {
  const random = Math.floor(Math.random() * 4)
  removeActiveFromElements(slideControls)
  removeActiveFromElements(slideItems)
  return random
}
setInterval(() => {
  let index = getRandomIndex()
  toggleClass(slideControls[index], 'active')
  toggleClass(slideItems[index], 'active')
}, 5000)
bars.addEventListener('click', () => {
  toggleClass(overlay, 'active')
  toggleClass(links, 'active')
  toggleClass(document.body, 'active')
})
slideControls.forEach((control, index) => {
  control.addEventListener('click', () => {
    removeActiveFromElements(slideControls)
    removeActiveFromElements(slideItems)
    toggleClass(control, 'active')
    toggleClass(slideItems[index], 'active')
  })
})
options.forEach((option, index) => {
  option.addEventListener('click', () => {
    removeActiveFromElements(options)
    removeActiveFromElements(programElements)
    toggleClass(option, 'active')
    toggleClass(programElements[index], 'active')
    programs.style.backgroundColor = programsBackgroundClasses[index]
  })
})