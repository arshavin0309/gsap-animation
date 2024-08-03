let tl = gsap.timeline({repeatDelay: 0.1})

gsap.from('.hero__title', {duration: 0.7, y:100, opacity: 0})
tl.from('.hero__btn', {duration: 0.7, y:100, opacity: 0})
tl.from('.hero__discription', {duration: 0.3, opacity: 0})

tl.from('.img_1', {duration: 0.3, opacity: 0})
tl.from('.img_2', {duration: 0.3, opacity: 0})
tl.from('.img_3', {duration: 0.3, opacity: 0})
tl.from('.hero__info', {duration: 0.3, opacity: 0})

let burger = document.querySelector('.burger')
let menuBurger = document.querySelector('.menu')
let headerTop = document.querySelector('.black_line')
let x = document.querySelector('.x')

let bl = gsap.timeline({repeatDelay: 0.1, paused: true})

bl.fromTo('.black_line', {opacity: 0, duration: 1, y:-200}, {opacity:1, y:0})
bl.fromTo('.menu', {opacity: 0, duration: 1, y:2000}, {opacity:1, y:0})
bl.fromTo('.main__list', {opacity: 0, duration: 1, y:100}, {opacity:1, y:0})
bl.fromTo('.anim', {opacity: 0, duration: 1, y:100}, {opacity:1, y:0})

burger.onclick = (e)=>{
    e.preventDefault()
    bl.play()
}

x.onclick = (e)=>{
    e.preventDefault()
    bl.reverse()
}