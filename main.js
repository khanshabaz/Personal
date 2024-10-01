// ============================toggle icon navbar========================
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick=()=>{
  menuIcon.classList.toggle("fa-xmark");
  navbar.classList.toggle("active");
}

// ============================Scroll section active Link========================
let sections=document.querySelectorAll("section");
let navLinks=document.querySelectorAll("navbar nav a");

window.onscroll=()=>{
  sections.forEach(sec=>{
    let top = window.scrollY;
    let offset= sec.offsetTop-150;
    let height= sec.offsetHeight;
    let id=sec.getAttribute('id');

    if(top >= offset && top<offset+height){
      navLinks.forEach(links=>{
        links.classList.remove("active");
        document.querySelector('header nav a[href*='+id+']').classList.add("active");
      });
    }
  })
// ============================Sticky navbar========================
let header = document.querySelector('header');
header.classList.toggle('sticky',window.screenY>100);

// ============================remove toggle icon and navbar========================
menuIcon.classList.remove("fa-xmark");
navbar.classList.remove("active");

}

// ============================Scroll Reveal ========================
ScrollReveal({
  distance:'80px',
  duration:1000,
  delay:200,
});

ScrollReveal().reveal('.home-content,.heading',{origin:'top'});
ScrollReveal().reveal('.home-img,.services-container,.portfolio-box, .contact form',{origin:'buttom'});
ScrollReveal().reveal('.home-content h1, .about-img',{origin:'left'});
ScrollReveal().reveal('.home-content p,.about-content',{origin:'right'});

// ============================Typed Js========================

const typed = new Typed('.multiple-text',{
  strings:['E-commerce Web Developer',"Full Stack Developer"],
  typeSpeed:70,
  backSpeed:70,
  backDelay:1000,
  loop:true,
});