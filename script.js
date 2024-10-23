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


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
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




const skillsSlider = document.querySelector('.skills-slide');
let skillsIndex = 0;
const skillsItems = document.querySelectorAll('.skills-slide .slide-item');
document.getElementById('skills-next').addEventListener('click', () => {
    skillsIndex = (skillsIndex + 1) % skillsItems.length;
    skillsSlider.style.transform = `translateX(-${skillsIndex * 100}%)`;
});
document.getElementById('skills-prev').addEventListener('click', () => {
    skillsIndex = (skillsIndex - 1 + skillsItems.length) % skillsItems.length;
    skillsSlider.style.transform = `translateX(-${skillsIndex * 100}%)`;
});


const projectsSlider = document.querySelector('.projects-slide');
let projectsIndex = 0;
const projectsItems = document.querySelectorAll('.projects-slide .slide-item');
document.getElementById('projects-next').addEventListener('click', () => {
    projectsIndex = (projectsIndex + 1) % projectsItems.length;
    projectsSlider.style.transform = `translateX(-${projectsIndex * 100}%)`;
});
document.getElementById('projects-prev').addEventListener('click', () => {
    projectsIndex = (projectsIndex - 1 + projectsItems.length) % projectsItems.length;
    projectsSlider.style.transform = `translateX(-${projectsIndex * 100}%)`;
});
