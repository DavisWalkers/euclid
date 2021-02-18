window.addEventListener("DOMContentLoaded", function() {
  const swiper = new Swiper('.swiper-container', {
    // Optional parameters
    speed: 1000,
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    autoplay: {
      delay: 4000,
    }
  });

  document.querySelectorAll('.how-we-work__item').forEach(function(item) {
    item.addEventListener('click', function(event) {
      const path = event.currentTarget.dataset.path;
      
      document.querySelectorAll('.how-we-work__item').forEach(function(item) {
        item.classList.remove('link_visited')
      });

      item.classList.add('link_visited');

      document.querySelectorAll('.how-we-work__content').forEach(function(content) {
        content.classList.remove('how-we-work__content_active');
      });
      document.querySelector(`[data-target="${path}"]`).classList.add('how-we-work__content_active');
    })
  });

  let burger = document.querySelector('.burger');
  let menu = document.querySelector('.menu');
  burger.addEventListener('click', function() {
    menu.classList.add('menu_active');
  });

  menu.querySelector('.menu__icon').addEventListener('click', function() {
    menu.classList.remove('menu_active');
  });
})
