// show/hide nav menu-------------------------------------------------------------------

const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close');

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    });
}

if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
}

//hide nav menu when click on each nav link item-----------------------------------------
const navLink = document.querySelectorAll('.nav__link');

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show-menu');
};

navLink.forEach(n => n.addEventListener('click', linkAction));

// scroll blur header--------------------------------------------------------------------
const blurHeader = () => {
    const header = document.getElementById('header');
    this.scrollY >= 50 ? header.classList.add('blur__header') : header.classList.remove('blur__header');
}

window.addEventListener('scroll', blurHeader);

// swiperjs - favorite section-----------------------------------------------------------
let swiperFavorite = new Swiper('.favorite__swiper', {
    loop: true,
    slidesPerView: 'auto',
    centeredSlides: 'auto',
    grabCursor: true,
    breakpoints: {
        500: {
            slidesPerView: 3,
        }
    }
});




// scrollup-----------------------------------------------------------------------------
const scrollUp = () => {
    const scrollUp = document.getElementById('scrollup');
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll') : scrollUp.classList.remove('show-scroll');
}

window.addEventListener('scroll', scrollUp);




//scroll active link color change------------------------------------------------------
const sections = document.querySelectorAll('section[id');
console.log(sections);
console.log('----------------------------')
const scrollActive = () => {
    const scrollDown = window.scrollY;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            offsetTop = current.offsetTop;
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id'),
            sectionClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

          console.log(scrollDown, sectionHeight, offsetTop, sectionTop, sectionId, sectionClass);

        if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
            sectionClass.classList.add('active-link');
        } else {
            sectionClass.classList.remove('active-link');
        }
    });
}

window.addEventListener('scroll', scrollActive);


// scroll reveal animation-------------------------------------------------------------------------
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    rest: true, //animation repeat
})

sr.reveal('.home__social, .favorite__container, .sponsor__container, .footer__container');
sr.reveal('.home__title span:nth-child(1)', {origin: 'left', opacity: 1});
sr.reveal('.home__title span:nth-child(3)', {origin: 'right', opacity: 1});
sr.reveal('.home__tooltip, .home__button, .model__button ', {origin: 'bottom'});
sr.reveal('.about__data', {origin: 'left'});
sr.reveal('.about__img, .model__tooltip ', {origin: 'right'});
