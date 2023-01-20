//---------------------Burger-menu

const hamburger = document.querySelector('.hamburger');
const headerBurger = document.querySelector('.header');
const headerWrapper = document.querySelector('.header-wrapper');
const headerItem = document.querySelector('.header__item');
const nav = document.querySelector('.nav');
const burgerCross = document.querySelector('.burger-cross');
const navLink = document.querySelectorAll('.nav__link');

function openBurgerMenu() {
    console.log('Kello');
    // headerBurger.classList.add('header_burger');
    headerItem.classList.add('burger__item');
    nav.classList.add('nav_active');
    burgerCross.style.display = 'block';
}

hamburger.addEventListener('click', openBurgerMenu);

function closeBurgerMenu() {
    nav.classList.remove('nav_active');

}
burgerCross.addEventListener('click', closeBurgerMenu);

document.addEventListener('mousedown', (e) => {
    if (!nav.contains(e.target)) {
        closeBurgerMenu();
    }
});

navLink.forEach(link=> {
    link.addEventListener('click', closeBurgerMenu);

})

