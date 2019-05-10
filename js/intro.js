var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
  AOS.refreshHard();
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "flex";
}

AOS.init({
    once: false
});

$(document).ready(function() {

  $('[data-fancybox]').fancybox({
    youtube : {
      showinfo : 0
    }
  });
  $('.post--text p:has(img)').css({'margin-left':'-3rem', 'margin-right':'-3rem', 'margin-top':'2em', 'margin-bottom':'2em', 'text-align' : 'center',});
});

// owl carousel
var owl = $('.owl-carousel');
    owl.owlCarousel({
        items:1,
        loop:true,
        autoplay:true,
        autoplayTimeout:6000,
        autoplayHoverPause:true,
        nav:false,
        dots:true,
        animateOut: 'fadeOut',
        hideOnContentClick: 'false'
    });