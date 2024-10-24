const menuIcon = document.getElementById('menu-icon');
const navbar = document.getElementById('navbar');


menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('active');
    
    if (navbar.classList.contains('active')) {
        menuIcon.src = './Images/x-square-solid-24.png'; 
    } else {
        menuIcon.src = './Images/menu-regular-24 (1).png'; 
    }
});

const navLinks = document.querySelectorAll('.navbar a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navbar.classList.remove('active');
        menuIcon.src = './Images/menu-regular-24 (1).png'; 
    });
});



const backToTopButton = document.getElementById('backToTop');
window.onscroll = function () {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
};

backToTopButton.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});




