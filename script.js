//====================toggle icon navbar=============//
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');
const themeToggle = document.getElementById('theme-toggle');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};


menuIcon.onclick = () => {
    navbar.classList.toggle('active');
};
//==============whitemode======//
const btn = document.getElementById("themeToggle");
const icon = document.getElementById("themeIcon");

document.getElementById("themeToggle").addEventListener("click", () => {
  document.body.classList.toggle("light-mode");

  icon.classList.toggle("bx-moon");
  icon.classList.toggle("bx-sun");
});
//=====================scroll link =========//
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
    
        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id +']').classList.add('active');
            });
        };
    });
    //====================sticky navbar=============//
    let header = document.querySelector('header');
    
    header.classList.toggle('sticky', window.scrollY > 100);

//====================remove togle icon and navbar when click navbar link=============//
     menuIcon.classList.remove('bx-x');
     navbar.classList.remove('active');
};
//====================scroll reveal=============//
ScrollReveal({
    reset: true,
    distance: '50px',
    duration: 2100,
    delay: 100
});

ScrollReveal().reveal('.home-content,  .heading, .about-content h2' , {origin: 'top'});
ScrollReveal().reveal('.home-content h1, .wrapper, .contact-info, .about-tools, .header', {origin: 'left'});
ScrollReveal().reveal('.banner, .about-content', {origin: 'bottom'});
ScrollReveal().reveal('.home-img, .contact-form, .member-content', {origin: 'right'});

