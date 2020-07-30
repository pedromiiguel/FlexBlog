let show = true;

const menuSection = document.querySelector('.menu-section')
const menuToggle = menuSection.querySelector('.menu-toggle')
const menuNav = menuSection.querySelector('.menu-nav')


menuToggle.addEventListener('click', () => {

    document.body.style.overflow = show ? 'hidden':'initial'



    menuSection.classList.toggle('on',show)
    show = !show
})

menuNav.addEventListener('click', () => {
    document.body.style.overflow = show ? 'hidden':'initial'

    menuSection.classList.toggle('on')
})