

window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}


var mySwiper = new Swiper('.swiper-container', {
    
  // Optional parameters
  // slidesPerView: 3,
  spaceBetween: 30,
  direction: 'horizontal',
  //loop: true,

// autoHeight:true,


  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  
    clickable: true,
    

    
  },

  //Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    disabledClass: '.disabled',
   
  },

  // And if we need scrollbar
//   scrollbar: {
//     el: '.swiper-scrollbar',
//     dragSize: 7,
//     draggable: true,
//     hide:false
//   },

 // Responsive breakpoints
 breakpoints: {
  // when window width is >= 320px
  320: {
    slidesPerView: 1,
    spaceBetween: 20
  },
  // when window width is >= 480px
  700: {
    slidesPerView: 3,
    spaceBetween: 30
  },
  // when window width is >= 640px
  1200: {
    slidesPerView: 3,
    spaceBetween: 30
  }
}

})





