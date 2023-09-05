let header = docement.querySelector('header');
let menu = docement.querySelector('#menu-icon');
let navbar = docement.querySelector('.navbar');
window.addEventListener('scroll',()=>{
    header.classList.toggle('active', window.scrollY > 0);
});

menu.onclick = ()=>{
    navbar.classList.toggle('active');
}
window.onscroll = ()=>{
    navbar.classList.remove('active');
}