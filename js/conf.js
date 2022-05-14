const arrowDown = document.querySelector('.mores')
const menuInner = document.querySelector('.menu__inner')
const prise = document.querySelector('#prise')
let prises = 0
prise.innerHTML = prises * 100 + ' $'

arrowDown.addEventListener('click', () => {
    menuInner.classList.toggle('active')
})