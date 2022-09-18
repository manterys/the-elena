// Header
const menuBtn = document.getElementById('menu-btn')
const page = document.querySelector('.page')

menuBtn.addEventListener('click', () => page.classList.toggle('menuActive'))

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

const nav = document.querySelector('.nav')

nav.querySelectorAll('.nav a').forEach(function(link) {
    link.addEventListener("click", function(e) {
        page.classList.remove('menuActive')
    })
})

window.addEventListener('resize', function() {
    if (window.matchMedia('(min-width: 720px)').matches) {
        if (page.classList.contains('menuActive')) page.classList.remove('menuActive')
    }
});

// Modal
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

// Translate Animation
const animR = document.querySelectorAll('.animation-right')
const animL = document.querySelectorAll('.animation-left')

window.addEventListener('scroll', checkAnim)

checkAnim()

function checkAnim() {
    const triggerBottom = window.innerHeight / 5 * 4
    
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
}

// Button Top
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

// Move to
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
    tolerance: 50,
    duration: 1200,
    easing: 'easeInOutCubic',
    container: window
}, easeFunctions);

triggers.forEach(function(trigger) {
    moveTo.registerTrigger(trigger);
});