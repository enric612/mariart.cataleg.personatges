// Nav bar scroll/hover logic
(function(){
  function updateNavbar(){
    var nav = document.getElementById('site-navbar');
    if(!nav) return;
    var scrolled = window.scrollY > 40;
    if(scrolled){ nav.classList.add('scrolled'); }
    else{ nav.classList.remove('scrolled'); }
  }
  window.addEventListener('scroll', updateNavbar);
  document.addEventListener('DOMContentLoaded', updateNavbar);
})();
