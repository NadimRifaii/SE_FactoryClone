const burgerIcon = document.querySelector('.bars')
const landing = document.querySelector('.landing')
const landingContainer = document.querySelector('.landing .container')
const links = document.querySelector('.links')
function setEvent(element, event, callback) {
  element.addEventListener(event, callback)
}
function toggleLinks() {
  landing.classList.toggle('active')
  links.classList.toggle('active')
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}
setEvent(burgerIcon, 'click', toggleLinks)