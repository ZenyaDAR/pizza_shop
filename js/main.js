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

const popup = document.querySelector("#popup")
const btnpizzs = document.querySelectorAll(".btnpop")
const btncon = document.querySelector(".total_btn")
const totalmessage = document.querySelector('.tovar_bag')
let prises = 0
const prise = document.querySelector('#prise')


for (let btnpizz of btnpizzs){
    btnpizz.addEventListener('click', () =>{
        popup.classList.add('active')
    })
    
    
}
btncon.addEventListener('click', () =>{
    popup.classList.remove('active')
    btn28sm.classList.remove('active')
    btn20sm.classList.remove('active')
    btn33sm.classList.remove('active')
    btnTon.classList.remove('active')
    btnTrad.classList.remove('active')
    con1.classList.remove('active')
    con2.classList.remove('active')
    con3.classList.remove('active')
    con4.classList.remove('active')
    totalmessage.classList.add('active')
    prise.innerHTML = prises + 100 + ' ₽'
    setTimeout(() =>{
        totalmessage.classList.remove('active')
        
    }, 2500)
})

prise.innerHTML = prises + ' ₽'


const btnTrad = document.querySelector("#btn1")
const btnTon = document.querySelector("#btn2")

btnTrad.addEventListener('click', () =>{
    btnTon.classList.remove('active')
    btnTrad.classList.add('active')
})

btnTon.addEventListener('click', () =>{
    btnTrad.classList.remove('active')
    btnTon.classList.add('active')
})

const btn20sm = document.querySelector("#btn3")
const btn28sm = document.querySelector("#btn4")
const btn33sm = document.querySelector("#btn5")

btn20sm.addEventListener('click', () =>{
    btn28sm.classList.remove('active')
    btn33sm.classList.remove('active')
    btn20sm.classList.add('active')
})
btn28sm.addEventListener('click', () =>{
    btn20sm.classList.remove('active')
    btn33sm.classList.remove('active')
    btn28sm.classList.add('active')
})
btn33sm.addEventListener('click', () =>{
    btn28sm.classList.remove('active')
    btn20sm.classList.remove('active')
    btn33sm.classList.add('active')
})


const con1 = document.querySelector("#container1")
const con2 = document.querySelector("#container2")
const con3 = document.querySelector("#container3")
const con4 = document.querySelector("#container4")

con1.addEventListener('click', () =>{
    con1.classList.toggle('active')
})
con2.addEventListener('click', () =>{
    con2.classList.toggle('active')
})
con3.addEventListener('click', () =>{
    con3.classList.toggle('active')
})
con4.addEventListener('click', () =>{
    con4.classList.toggle('active')
})


const btnspopup2 = document.querySelectorAll(".fillter")
const popup_2 = document.querySelector(".popup_2")
const cross = document.querySelector("#cross")
const btnsFill = document.querySelectorAll(".btn_fill")
const navBtnFill = document.querySelector("#navBtnFill1")


for(let btnpopup2 of btnspopup2){
    btnpopup2.addEventListener('click', () =>{
        popup_2.classList.add('active')
    })

    for(let btnFill of btnsFill){
        btnFill.addEventListener('click', () =>{
            btnFill.classList.toggle('active')
        })
        cross.addEventListener('click', () =>{
            popup_2.classList.remove('active')
            btnFill.classList.remove('active')
        })
        navBtnFill.addEventListener('click', () =>{
            btnFill.classList.remove('active')
        })
    }
    
}