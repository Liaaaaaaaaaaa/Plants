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

        console.log(Array.from(buttonService.filter(e => e.classList.value.includes('button_active'))));
        console.log(buttonService.filter(e => e.classList.value.includes('button_active')).length);
        console.log(Number(buttonService.filter(e => e.classList.value.includes('button_active')).length) === 0);

        if (buttonService.filter(e => e.classList.value.includes('button_active').length === 1) && (e.target.classList.value.includes('button_active')) === true) {
            for (let ind = 0; ind < blurforNotNameTitle.length; ind++) {
                projects[blurforNotNameTitle[ind]].classList.toggle('blur');
            }
        }

        if (Number(buttonService.filter(e => e.classList.value.includes('button_active')).length) === 0) {
            console.log("Hello");
            for (let ind = 0; ind < blurforNotNameTitle.length; ind++) {
                projects[blurforNotNameTitle[ind]].classList.toggle('blur');
            }
        }

        if ((buttonService.filter(e => e.classList.value.includes('button_active')).length === 1) && ((e.target.classList.value.includes('button_active')) === false)) {
            for (let ind = 0; ind < blurforNameTitle.length; ind++) {
                projects[blurforNameTitle[ind]].classList.toggle('blur');
            }
        }

        if (buttonService.filter(e => e.classList.value.includes('button_active')).length === 2) {
            for (let ind = 0; ind < blurforNameTitle.length; ind++) {
                projects[blurforNameTitle[ind]].classList.toggle('blur');
            }
            for (let ind = 0; ind < blurforNotNameTitle.length; ind++) {
                projects[blurforNotNameTitle[ind]].classList.toggle('blur');
            }
        }
        console.log(blurforNameTitle);

        if (3 === buttonService.filter(e => e.classList.value.includes('button_active')).length) {
            buttonService.forEach(e => e.classList.remove('button_active'));
            buttonServiceClick(e, nameButton, nameTitle);
            for (let ind = 0; ind < blurforNameTitle.length; ind++) {
                projects[blurforNameTitle[ind]].classList.toggle('blur');
            }
            for (let ind = 0; ind < blurforNotNameTitle.length; ind++) {
                projects[blurforNotNameTitle[ind]].classList.toggle('blur');
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


//-------Accordion в секции prices реализация 3-х выпадающих списков + 50

const tariffButons = document.querySelectorAll('.tariff');
const tariffs = document.querySelector('.tariffs');
const tariffContainer = document.querySelectorAll('.tariff__container');
const none = document.querySelectorAll('.none');


function OpenTariff(e) {
    e.target.classList.toggle('active_tariff');
    e.target.parentNode.parentNode.classList.toggle('active__prise');
    e.target.parentNode.nextElementSibling.classList.toggle('active__part2');
}

tariffs.addEventListener('click', function (e) {
    if (e.target.closest('.tariff')) {

        OpenTariff(e)

        if (Array.from(tariffButons).filter(e => e.classList.value.includes('active_tariff')).length === 2) {
            console.log('hello');
            Array.from(tariffButons).forEach(e => e.classList.remove('active_tariff'));
            Array.from(tariffContainer).forEach(e => e.classList.remove('active__prise'));
            Array.from(none).forEach(e => e.classList.remove('active__part2'));
            OpenTariff(e);
        }

    }
})


//-----------Contacts реализован select с выбором городов +25


