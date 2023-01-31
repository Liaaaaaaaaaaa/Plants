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

navLink.forEach(link => {
    link.addEventListener('click', closeBurgerMenu);

})

//-----------Service ------------------

const buttonContainerService = document.querySelector('.title__buttons');
const projectService = document.querySelector('.layout-3-column');
const projects = document.querySelectorAll('.project');
const buttons = document.querySelectorAll('div > button');
const buttonService = Array.from(buttons).filter(e => e.parentElement.classList.value === 'title__buttons');





function buttonServiceClick(e, nameButton, nameTitle) {
    e.target.classList.toggle('button_active');
    if (e.target.innerText === nameButton) {
        let massiveProjectTitle = Array.from(projects).map(e => e.childNodes[3].firstElementChild);
         let blurforNotNameTitle = Array.from(massiveProjectTitle.entries()).filter(i => i[1].innerText !== nameTitle).map(i => i[0]);
        let blurforNameTitle = Array.from(massiveProjectTitle.entries()).filter(i => i[1].innerText === nameTitle).map(i => i[0]);


        if (buttonService.filter(e => e.classList.value.includes('button_active')).length === 2)  {
            for (let ind = 0; ind < blurforNameTitle.length; ind++) {
                projects[blurforNameTitle[ind]].classList.toggle('blur');
            }
        } 

        if (buttonService.filter(e => e.classList.value.includes('button_active')).length  <= 1) {
            for (let ind = 0; ind < blurforNotNameTitle.length; ind++) {
                projects[blurforNotNameTitle[ind]].classList.toggle('blur');
            }
        }
        
        if (3 === buttonService.filter(e => e.classList.value.includes('button_active')).length )  {
            buttonService.forEach(e => e.classList.remove('button_active'));
            buttonServiceClick(e, nameButton, nameTitle);
            for (let ind = 0; ind < blurforNameTitle.length; ind++) {
                projects[blurforNameTitle[ind]].classList.toggle('blur');
            }
        } 
    }

}


buttonContainerService.addEventListener('click', function (e) {
    if (e.target.closest('.button')) {
        let nameButton = e.target.innerText;
        if (nameButton === 'Gardens') {
            let nameTitle = 'Garden care';
            buttonServiceClick(e, nameButton, nameTitle);
        }
        if (nameButton === 'Lawn') {
            let nameTitle = 'Lawn care';
            buttonServiceClick(e, nameButton, nameTitle);
        }
        if (nameButton === 'Planting') {
            let nameTitle = 'Planting';
            buttonServiceClick(e, nameButton, nameTitle);
        }

    }

})
