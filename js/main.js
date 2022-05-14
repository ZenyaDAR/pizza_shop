//$(function() {
//    const arrowDown = $('.menu__list-foot > li:last-child')
//    const menuInner = $('.menu__inner')
//    arrowDown.click(function() {
//        menuInner.toggle()
//    })
//})

const arrowDown = document.querySelector('.mores')
const menuInner = document.querySelector('.menu__inner')
arrowDown.addEventListener('click', () => {
    menuInner.classList.toggle('active')
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
let i = 0
const prise = document.querySelector('#prise')
const finishPrise = document.querySelector('.finish_prise')
const finishBtn = document.querySelector('.finish_btn')
const compBtn = document.querySelector('#cb')
const zacaz1 = document.querySelector('.bag_card_1')
const zacaz2 = document.querySelector('.bag_card_2')
const zacaz3 = document.querySelector('.bag_card_3')
const zacaz4 = document.querySelector('.bag_card_4')
const zacaz5 = document.querySelector('.bag_card_5')


for (let btnpizz of btnpizzs){
    btnpizz.addEventListener('click', () =>{
        console.log(this)
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
    totalmessage.classList.add('active', i++ , prises++)
    prise.innerHTML = prises * 100 + ' $'
    finishPrise.innerHTML = prises * 100 + ' $'
    if(i == 1){
        zacaz1.classList.add('active')
    }
    if(i == 2){
        zacaz2.classList.add('active')
    }
    if(i == 3){
        zacaz3.classList.add('active')
    }
    if(i == 4){
        zacaz4.classList.add('active')
    }
    if(i == 5){
        zacaz5.classList.add('active')
    }
    setTimeout(() =>{
        totalmessage.classList.remove('active')
        
    }, 2500)
})

prise.innerHTML = prises + ' $'
finishPrise.innerHTML = 'Итого: ' + prises + ' $'

finishBtn.addEventListener('click', () =>{
    zacaz1.classList.remove('active')
    zacaz2.classList.remove('active')
    zacaz3.classList.remove('active')
    zacaz4.classList.remove('active')
    zacaz5.classList.remove('active')
    prises = 0
    i = 0
    a = 1
    b = 1
    c = 1
    d = 1
    e = 1
    prise.innerHTML = prises * 100 + ' $'
    finishPrise.innerHTML = prises * 100 + ' $'
    priseBag5.innerHTML = a
    priseBag4.innerHTML = b
    priseBag3.innerHTML = c
    priseBag2.innerHTML = d
    priseBag1.innerHTML = e
})


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

let a = 1
let b = 1
let c = 1
let d = 1
let e = 1
const priseBag1 = document.querySelector('.calc_number1')
const priseBag2 = document.querySelector('.calc_number2')
const priseBag3 = document.querySelector('.calc_number3')
const priseBag4 = document.querySelector('.calc_number4')
const priseBag5 = document.querySelector('.calc_number5')
const headerBtn = document.querySelector('.header__btn')
const popup_3 = document.querySelector('.popup_3')
const popup_3_cross = document.querySelector('#popup_3_cross')
const minus1 = document.querySelector('.minus1')
const minus2 = document.querySelector('.minus2')
const minus3 = document.querySelector('.minus3')
const minus4 = document.querySelector('.minus4')
const minus5 = document.querySelector('.minus5')
const plus1 = document.querySelector('.plus1')
const plus2 = document.querySelector('.plus2')
const plus3 = document.querySelector('.plus3')
const plus4 = document.querySelector('.plus4')
const plus5 = document.querySelector('.plus5')
priseBag5.innerHTML = a;
priseBag4.innerHTML = b;
priseBag3.innerHTML = c;
priseBag2.innerHTML = d;
priseBag1.innerHTML = e;
minus1.addEventListener('click', () =>{
    a--
    prises--
    if(a<1){
        zacaz1.classList.remove('active')
        prise.innerHTML = prises * 100 + ' $'
        finishPrise.innerHTML = prises * 100 + ' $'
        
    }
    priseBag5.innerHTML = a
    prise.innerHTML = prises * 100 + ' $'
    finishPrise.innerHTML = prises * 100 + ' $'
})

minus2.addEventListener('click', () =>{
    b--
    prises--
    if(b<1){
        zacaz2.classList.remove('active')
        prise.innerHTML = prises * 100 + ' $'
        finishPrise.innerHTML = prises * 100 + ' $'
    }
    priseBag4.innerHTML = b
    prise.innerHTML = prises * 100 + ' $'
    finishPrise.innerHTML = prises * 100 + ' $'
})
minus3.addEventListener('click', () =>{
    c--
    prises--
    if(c<1){
        zacaz3.classList.remove('active')
        prise.innerHTML = prises * 100 + ' $'
        finishPrise.innerHTML = prises * 100 + ' $'
    }
    priseBag3.innerHTML = c
    prise.innerHTML = prises * 100 + ' $'
    finishPrise.innerHTML = prises * 100 + ' $'
})
minus4.addEventListener('click', () =>{
    d--
    prises--
    if(d<1){
        zacaz4.classList.remove('active')
        prise.innerHTML = prises * 100 + ' $'
        finishPrise.innerHTML = prises * 100 + ' $'
    }
    priseBag2.innerHTML = d
    prise.innerHTML = prises * 100 + ' $'
    finishPrise.innerHTML = prises * 100 + ' $'
})
minus5.addEventListener('click', () =>{
    e--
    prises--
    if(e<1){
        zacaz5.classList.remove('active')
        prise.innerHTML = prises * 100 + ' $'
        finishPrise.innerHTML = prises * 100 + ' $'
    }
    priseBag1.innerHTML = e
    prise.innerHTML = prises * 100 + ' $'
    finishPrise.innerHTML = prises * 100 + ' $'
})
plus1.addEventListener('click', () =>{
    a++
    prises++
    priseBag5.innerHTML = a
    prise.innerHTML = prises * 100 + ' $'
    finishPrise.innerHTML = prises * 100 + ' $'

})
plus2.addEventListener('click', () =>{
    b++
    prises++
    priseBag4.innerHTML = b
    prise.innerHTML = prises * 100 + ' $'
    finishPrise.innerHTML = prises * 100 + ' $'
})
plus3.addEventListener('click', () =>{
    c++
    prises++
    priseBag3.innerHTML = c
    prise.innerHTML = prises * 100 + ' $'
    finishPrise.innerHTML = prises * 100 + ' $'
})
plus4.addEventListener('click', () =>{
    d++
    prises++
    priseBag2.innerHTML = d
    prise.innerHTML = prises * 100 + ' $'
    finishPrise.innerHTML = prises * 100 + ' $'
})
plus5.addEventListener('click', () =>{
    e++
    prises++
    priseBag1.innerHTML = e
    prise.innerHTML = prises * 100 + ' $'
    finishPrise.innerHTML = prises * 100 + ' $'
})

headerBtn.addEventListener('click', () => {
    popup_3.classList.add('active')
})

popup_3_cross.addEventListener('click', () => {
    popup_3.classList.remove('active')
})


