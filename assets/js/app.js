const hamburger = document.querySelector('.toggle');
const navbar= document.querySelector('.navbar');
hamburger.addEventListener('click',()=>{
    navbar.classList.toggle('active');
})