
// document.addEventListener("scroll", handleScroll);
// // get a reference to our predefined button
// var scrollToTopBtn = document.querySelector(".scrollToTopBtn");

// function handleScroll() {
//   var scrollableHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
//   var GOLDEN_RATIO = 0.5;

//   if ((document.documentElement.scrollTop / scrollableHeight ) > GOLDEN_RATIO) {
//     //show button
//     scrollToTopBtn.style.display = "block";
//   } else {
//     //hide button
//     scrollToTopBtn.style.display = "none";
//   }
// }

// scrollToTopBtn.addEventListener("click", scrollToTop);

// function scrollToTop() {
//   window.scrollTo({
//     top: 0,
//     behavior: "smooth"
//   });
// }


$(document).ready(function() {
  $('.owl-carousel').owlCarousel({
      loop:true,
      margin:30,
      nav:false,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:3
          },
          1000:{
              items:5
          }
      }
  });
  
  $(".menu-button-container").click(function() {
    $(".header-wrapper").toggleClass( "opened" );
  });

  function equalHeight(group) {
    tallest = 0;
    group.each(function() {
       thisHeight = $(this).height();
       if(thisHeight > tallest) {
          tallest = thisHeight;
       }
    });
    group.height(tallest);
  }
  $(document).ready(function() {
      equalHeight($(".wrapper .data .title"));
  });  

});