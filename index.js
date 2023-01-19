//---------------------Burger-menu

const hamburger = document.querySelector('.hamburger');
const headerBurger = document.querySelector('.header');
const headerWrapper = document.querySelector('.header-wrapper');
const headerItem = document.querySelector('.header__item');
const nav = document.querySelector('.nav');
const burgerCross = document.querySelector('.burger-cross');


function openBurgerMenu() {
    console.log('Kello');
    // headerBurger.classList.add('header_burger');
    headerItem.classList.add('burger__item');
    nav.classList.add('nav_active');
    burgerCross.style.display = 'block';
    // hamburger.style.display = 'none';
    // hamburger.classList.add('burger-cross');
    // headerBurger.style.top = '0';
    // headerWrapper.classList.add('_active-menu');
}

hamburger.addEventListener('click', openBurgerMenu);

function closeBurgerMenu () {
    // headerBurger.classList.remove('header_burger');
   
    nav.classList.remove('nav_active');
    // burgerCross.style.display = 'none';
    // hamburger.style.display = 'flex';
    // setTimeout(function() {headerItem.classList.remove('burger__item')}(), 1000);
    // headerBurger.style.top = '-400';
    // headerWrapper.classList.remove('_active-menu');
    // headerBurger.style.transition = 'bottom 0.9s ease 0.3s'; 
}
burgerCross.addEventListener('click', closeBurgerMenu);

