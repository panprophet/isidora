
AOS.init({
    once: false
});



// owl carousel
var owl4 = $('#owl4');
    owl4.owlCarousel({
        items:1,
        loop:true,
        autoplay:true,
        autoplayTimeout:6500,
        autoplayHoverPause:true,
        nav:false,
        dots:true,
        dotsClass: 'kruzici',
        dotClass: 'krug',
        animateOut: 'fadeOut',
        hideOnContentClick: 'false'
    });

var owl3 = $('#owl-3');
    // var dots = $('.owl-dots');
    owl3.owlCarousel({
        items:1,
        loop:true,
        autoplay:true,
        autoplayTimeout:6500,
        autoplayHoverPause:true,
        nav: true,
        navContainerClass: 'owl-navigacija',
        navText: ["Prethodna","Sledeća"],
        navClass: ['owl-prethodna','owl-sledeca'],
        dots:false,
        animateOut: 'fadeOut',
        hideOnContentClick: 'false',

    });
var owl = $('#owl-one');
    owl.owlCarousel({
        items:1,
        loop:true,
        autoplay:true,
        autoplayTimeout:6500,
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
        loop:true,
        autoplay:true,
        autoplayTimeout:6500,
        autoplayHoverPause:true,
        nav:true,
        dots:true,
        dotsClass: 'tacke',
        dotClass: 'tacka',
        animateOut: 'fadeOut',
        hideOnContentClick: 'false',

    });

    // nav scroll
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
        $('.cd-scroll-down').on('click', function(event){
            event.preventDefault();
            smoothScroll($(this.hash));
        });
    
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