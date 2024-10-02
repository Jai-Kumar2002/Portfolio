
window.addEventListener('scroll', function() {
  var navbar = document.getElementById('navbar');
  if (window.scrollY > 50) { 
      navbar.classList.add('scrolled');
  } else {
      navbar.classList.remove('scrolled');
  }
});
var typed = new Typed('#typed', {
    strings: ['Web Developer', 'Back End Developer', 'Full Stack Developer'],
    typeSpeed: 50,
    backSpeed: 50,
    cursorChar: '',
    fadeOut: true,
    loop: true
  });