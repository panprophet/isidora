var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
  AOS.refreshHard();
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (!x || x.length==0) return

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



// owl carousel
var owl = $('#owl-one');
    owl.owlCarousel({
        items:1,
        loop:true,
        autoplay:true,
        autoplayTimeout:5000,
        autoplayHoverPause:true,
        nav:false,
        dots:true,
        animateOut: 'fadeOut',
        hideOnContentClick: 'false'
    });

    var owl2 = $('#owl-two');
    // var dots = $('.owl-dots');
    owl2.owlCarousel({
        items:1,
        loop:false,
        autoplay:false,
        autoplayTimeout:5000,
        autoplayHoverPause:true,
        nav:true,
        dots:true,
        dotsClass: 'tacke',
        dotClass: 'tacka',
        animateOut: 'fadeOut',
        hideOnContentClick: 'false',
        // navContainer: '.news-carousel .navigation',
        // dotsText:["<div class='nav-btn prev-slide'></div>","<div class='nav-btn next-slide'></div>"],
        // navText: ["←","→"] 

        // 
    });
    // owl2('changed.owl.carousel', function(event){
    //   document.getElementsByClassName("owl-dots").style.position = 'absolute';
    //   document.getElementsByClassName("owl-dots").style.bottom = '0';
    //   document.getElementsByClassName("owl-dots").style.right = '0';
    // }) 