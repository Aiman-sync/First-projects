window.addEventListener('scroll', function(){
    let navbar = this.document.querySelector('.navbar');
    if (this.window.scrollY > 20)
        navbar.classList.add('scrolled');
    else
        navbar.classList.remove('scrolled');

});

// Mobile Menu Toggle
const menuBtn = document.getElementById('menu_btn');
const navItems = document.querySelector('.nav_items');

menuBtn.addEventListener('click', function(){
    navItems.classList.toggle('active');
    // Toggle icon between menu and close
    const icon = menuBtn.querySelector('i');
    if (navItems.classList.contains('active')) {
        icon.classList.remove('ri-menu-line');
        icon.classList.add('ri-close-line');
    } else {
        icon.classList.remove('ri-close-line');
        icon.classList.add('ri-menu-line');
    }
});

// Close menu when clicking on a nav link
const navLinks = document.querySelectorAll('.nav_items li a');
navLinks.forEach(link => {
    link.addEventListener('click', function(){
        navItems.classList.remove('active');
        const icon = menuBtn.querySelector('i');
        icon.classList.remove('ri-close-line');
        icon.classList.add('ri-menu-line');
    });
});


document.querySelector('#to-top').addEventListener('click', ()=>{
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}, false);


function showscroll(){
    let topButton = document.getElementById('to-top');
    if(document.body.scrollTop > 100 || document.documentElement.scrollTop > 100){
        topButton.classList.add('show')
    }else{
        topButton.classList.remove('show')
    }
}

window.onscroll = () =>{
    showscroll();
}