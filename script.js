// script.js

document.addEventListener('DOMContentLoaded', function () {
    var LFscrollToTopBtn = document.getElementById('scrollToTopBtn');
    var aboutSection = document.getElementById('about');
  
    window.addEventListener('scroll', function () {
      if (window.scrollY > aboutSection.offsetHeight) {
        scrollToTopBtn.style.display = 'block';
      } else {
        scrollToTopBtn.style.display = 'none';
      }
    });
  
    scrollToTopBtn.addEventListener('click', function () {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  });
  