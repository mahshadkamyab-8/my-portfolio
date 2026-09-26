const closebtn = document.querySelector('#btn1');
const transbtn = document.querySelector('#btn2');
let mainsec = document.querySelector('.main-sec');
let paragraph = document.querySelector('#para');
const hamburger = document.querySelector('.hamburger');
const main_nav = document.getElementById('main--nav');


setTimeout(function () {

    mainsec.classList.add('show');
    document.body.classList.add('dark');

}, 1100);


closebtn.addEventListener('click', function () {

    mainsec.classList.remove('show');
    document.body.classList.remove('dark');

});


transbtn.onclick = () => {

    paragraph.innerHTML =
        'Hello, and welcome to my portfolio website. This website was created using HTML, CSS, and JavaScript. I created this site to showcase my projects, skills, and experience. Here, you can view the certificates of the courses I have completed and explore the projects I have worked on. Thank you for visiting!';

    paragraph.style.direction = 'ltr';
};

hamburger.onclick = () =>{
    hamburger.classList.toggle('active');
    main_nav.classList.toggle('active')
}