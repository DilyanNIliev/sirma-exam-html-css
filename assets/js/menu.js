document.addEventListener('DOMContentLoaded', function() {
    var toggleButton = document.getElementById('toggleButton');
    var mobileNav = document.querySelector('.navigation');
  
    if (toggleButton && mobileNav) {
      toggleButton.addEventListener('click', function() {
        // Toggle the class
        mobileNav.classList.toggle('open');
      });
    }
  });