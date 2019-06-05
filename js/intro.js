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


    jQuery(document).ready(function($){
      var contentSections = $('.cd-section'),
        navigationItems = $('#cd-vertical-nav a');
    
      updateNavigation();
      $(window).on('scroll', function(){
        updateNavigation();
      });
    
      // smooth scroll to the section
      navigationItems.on('click', function(event){
            event.preventDefault();
            smoothScroll($(this.hash));
        });
        //smooth scroll to second section
        // $('.cd-scroll-down').on('click', function(event){
        //     event.preventDefault();
        //     smoothScroll($(this.hash));
        // });
    
        //open-close navigation on touch devices
        // $('.touch .cd-nav-trigger').on('click', function(){
        //   $('.touch #cd-vertical-nav').toggleClass('open');
      
        // });
        //close navigation on touch devices when selectin an elemnt from the list
        // $('.touch #cd-vertical-nav a').on('click', function(){
        //   $('.touch #cd-vertical-nav').removeClass('open');
        // });
    
      function updateNavigation() {
        contentSections.each(function(){
          $this = $(this);
          var activeSection = $('#cd-vertical-nav a[href="#'+$this.attr('id')+'"]').data('number') - 1;
          if ( ( $this.offset().top - $(window).height()/2 < $(window).scrollTop() ) && ( $this.offset().top + $this.height() - $(window).height()/2 > $(window).scrollTop() ) ) {
            navigationItems.eq(activeSection).addClass('is-selected');
          }else {
            navigationItems.eq(activeSection).removeClass('is-selected');
          }
        });
      }
    
      function smoothScroll(target) {
            $('body,html').animate(
              {'scrollTop':target.offset().top},
              600
            );
      }
    });