const bars = document.querySelector('.bars')
const links = document.querySelector('.links')
const overlay = document.querySelector('.overlay')
const programs = document.querySelector('.programs')
const options = document.querySelectorAll('.programs ul li')
const programElements = document.querySelectorAll('.programs .program')
const programsBackgroundClasses = ['#ffc635', '#28eea7', '#9864da', '#fb508e']
bars.addEventListener('click', () => {
  overlay.classList.toggle('active')
  links.classList.toggle('active')
  document.body.classList.toggle('active')
})

options.forEach((option, index) => {
  option.addEventListener('click', () => {
    options.forEach((op, index) => {
      removeActiveFromElement(op)
      removeActiveFromElement(programElements[index])
    })
    option.classList.toggle('active')
    programElements[index].classList.toggle('active')
    programs.style.backgroundColor = programsBackgroundClasses[index]
  })
})
function removeActiveFromElement(element) {
  element.classList.remove('active')
}
