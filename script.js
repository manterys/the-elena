// Menu Button
const appMenuBtn = () => {
const menuBtn = document.getElementById('menu-btn')
const page = document.querySelector('.page')

menuBtn.addEventListener('click', () => page.classList.toggle('menuActive'))

window.addEventListener('resize', function() {
    if (window.matchMedia('(min-width: 720px)').matches) {
        if (page.classList.contains('menuActive')) page.classList.remove('menuActive')
    }
})

const nav = document.querySelector('.nav')
nav.querySelectorAll('.nav a').forEach(function(link) {
    link.addEventListener("click", function(e) {
        page.classList.remove('menuActive')
    })
})
}

appMenuBtn()


// Sticky Header
const appStickyHeader = () => {
const header = document.getElementById('header')
const showcase = document.getElementById('showcase')
let triggerHeight
triggerHeight = showcase.offsetHeight - 150;

window.addEventListener('scroll', function () {
    let loc = window.scrollY
    if (loc > triggerHeight) {
        header.classList.add('scrolled')
    } else {
        header.classList.remove('scrolled')
    }
})
}

appStickyHeader()


// Modal
const appModal = () => {
const modalBox = document.querySelector('.modal-box')
const closed = document.querySelector('.modal-box svg')
const img = document.querySelectorAll('.project')
const modal = document.querySelectorAll('.modal')

img.forEach(img => img.addEventListener('click', (e)=> {
    modalBox.classList.add('modalOpen')
    img.lastElementChild.classList.add('modalActive')
}  
))

closed.addEventListener('click', (e) => {
    modalBox.classList.remove('modalOpen')
        for(let i = 0; i < modal.length; i++) {
            modal[i].classList.remove('modalActive')
    }
})

modalBox.addEventListener('click', (e) => {
    if (e.target == modalBox) {
        modalBox.classList.remove('modalOpen')
        for(let i = 0; i < modal.length; i++) {
            modal[i].classList.remove('modalActive')
        }
}})
}

appModal()


// Animation
const appAnimation = () => {
const animR = document.querySelectorAll('.animation-right')
const animL = document.querySelectorAll('.animation-left')
const animT = document.querySelectorAll('.animation-top')

window.addEventListener('scroll', checkAnim)

checkAnim()

function checkAnim() {
    const triggerBottom = window.innerHeight / 1.1
    
    animR.forEach(anim => {
        const animTop = anim.getBoundingClientRect().top
        
        if(animTop < triggerBottom) {
            anim.classList.add('show')
        } else {
            anim.classList.remove('show')
        }
    })
    
    animL.forEach(anim => {
        const animTop = anim.getBoundingClientRect().top
        
        if(animTop < triggerBottom) {
            anim.classList.add('show')
        } else {
            anim.classList.remove('show')
        }
    })

    animT.forEach(anim => {
        const animTop = anim.getBoundingClientRect().top
        
        if(animTop < triggerBottom) {
            anim.classList.add('show')
        } else {
            anim.classList.remove('show')
        }
    })
}
}

appAnimation()


// Button Top
const appTopBtn = () => {
const pxShow = 600;
const btnTop = document.querySelector(".icon-up")
if (window.scrollY >= pxShow) btnTop.classList.add("visible")
window.addEventListener('scroll', function() {
    if (window.scrollY >= pxShow) {
        if(!btnTop.classList.contains('visible')) btnTop.classList.add("visible")
    } else {
        btnTop.classList.remove("visible")
    }
});
}

appTopBtn()


// Move to
const appMoveTo = () => {
const easeFunctions = {
    easeInQuad: function (t, b, c, d) {
        t /= d;
    return c * t * t + b;
},
easeOutQuad: function (t, b, c, d) {
    t /= d;
    return -c * t* (t - 2) + b;
},
easeInOutQuad: function (t, b, c, d) {
    t /= d/2;
    if (t < 1) return c/2*t*t + b;
    t--;
    return -c/2 * (t*(t-2) - 1) + b;
},
easeInOutCubic: function (t, b, c, d) {
    t /= d/2;
    if (t < 1) return c/2*t*t*t + b;
    t -= 2;
    return c/2*(t*t*t + 2) + b;
}
}

const triggers = document.querySelectorAll('.smoothscroll');

const moveTo = new MoveTo({
    tolerance: 30,
    duration: 1200,
    easing: 'easeInOutCubic',
    container: window
}, easeFunctions);

triggers.forEach(function(trigger) {
    moveTo.registerTrigger(trigger);
});
}

appMoveTo()

const body = document.body
body.classList.add('ss-preload');
        
        window.addEventListener('load', function() {
            body.classList.remove('ss-preload');
            body.classList.add('ss-loaded');})
