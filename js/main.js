$(function() {
    const arrowDown = $('.menu__list-foot > li:last-child')
    const menuInner = $('.menu__inner')
    arrowDown.click(function() {
        menuInner.toggle()
    })
})

const header = document.querySelector('.header__foot')

document.addEventListener('scroll', () => {
    const scroll_position = window.scrollY;
	if (scroll_position > 50) {
        header.classList.add('active')
    } else {        
        header.classList.remove('active')
    }
})