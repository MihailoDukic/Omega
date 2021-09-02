import gsap from './vendors/gsap.min.js';
import scrollTrigger  from './vendors/scrollTrigger.min.js';

window.addEventListener('load', () => {
    const pl = gsap.timeline(); 
    pl.to('.header__video-bg', {opacity: 1})
    pl.to('.header__container__logo', {opacity: 1})
    pl.to('.header__container__toggle-menu', {opacity: 1})
    pl.to('.header-showcase ', {opacity: 1, stagger: 0.1})
    pl.to('.showcase', {opacity: 1, stagger: 0.1})
    pl.to('main', {opacity: 1, marginTop: 0})
    
}); 

// animate logo as you hover 

let logoHover = document.querySelector('.hover-logo');
logoHover.addEventListener('mouseenter', () => {
    let words = ['Digital', 'Groot', 'Family', 'Geeks', 'Omega', 'You'];

    let showWords = words[Math.floor(Math.random() * words.length)];
    
    logoHover.textContent = `We are  ${showWords}`;
});

// navigation open / close animation || am = animate menu in timeline

const am = gsap.timeline({
    defaults: {
        duration: 0.1, 
        ease: Power2. easeOut
    }
}); 


am.to('.line-center', {x: 1000, opacity: 0})
am.to('.line-top', {top: '50%', rotate: 45})
am.to('.line-bottom', {top: '50%', rotate: 135})
am.to('.header__container__nav', {opacity: 1, visibility: 'visible'})
am.to('.menu__list__link', {opacity: 1, stagger: 0.1 , marginTop: 0})
am.to('.box', {opacity: 1, stagger: 0.1})
am.to('.contact-info__social-media', {opacity: 1, stagger: 0.1})
am.to('body', {position: 'fixed'})
am.reversed(true);
const animeNav = () => {
    am.reversed(!am.reversed());
}

document.querySelector('.header__container__toggle-menu').addEventListener('click', animeNav);


// Nav Links Images Hovered 
 

    let nav = document.querySelector('.header__container__nav');
    let lists = document.querySelectorAll('.menu__list__link');

    lists.forEach((el) => {
        el.addEventListener('mouseover', () => {
            let bg = el.getAttribute("data-bg");

            nav.style.background = `${bg}`;
        });  

        // el.addEventListener('mouseleave', () => {

        //     nav.style.background = ``;
        // });  
    });


   // Form validation 

function validateForm() 
{
    
const username= document.querySelector('#username')
const email  = document.querySelector('#email');
const tel = document.querySelector('#tel');
const companyName = document.querySelector('#company-name');
const message = document.querySelector('#message');
const form = document.querySelector('.form');
const errorBox = document.querySelector('.error-box');
const errorMessage = document.querySelector('.error-message');
const errorBtn = document.querySelector('.close-btn');

form.addEventListener('submit', (e)=> {
    let messages = []; 

    if (username.value == '' || username.value == null) {
        messages.push('Name is empty, ');
        username.style.borderBottom = '1px solid #D33D27';
    } else {
        username.style.borderBottom = '1px solid green';
    }

    if (email.value == '' || email.value == null) {
        messages.push('Email is empty, ');
        email.style.borderBottom = '1px solid #D33D27';
    } else {
        email.style.borderBottom = '1px solid green';
    }

    if (tel.value == '' || tel.value == null) {
        messages.push('Telephone is empty, ');
        tel.style.borderBottom = '1px solid #D33D27';
    } else {
        tel.style.borderBottom = '1px solid green';
    }

    if (companyName.value == '' || companyName.value == null) {
        messages.push('Company name is empty,');
        companyName.style.borderBottom = '1px solid #D33D27';
    } else {
        companyName.style.borderBottom = '1px solid green';
    }

    if (message.value == '' || message.value == null) {
        messages.push('Message is empty');
        message.style.borderBottom = '1px solid #D33D27';
    } else {
        message.style.borderBottom = '1px solid green';
    }

    if(messages.length > 0) 
    {
        e.preventDefault();
        
        errorMessage.textContent = messages.join('');
        errorBox.style.display = 'flex';

        errorBtn.addEventListener('click', () => {
            errorBox.style.display = 'none';
        });

    }

});
}

validateForm();

    