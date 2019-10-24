let menuheight = document.getElementById('dropdown').scrollHeight;

let dropdown = document.getElementById('dropdown');
let closeham = document.getElementById('closeham');

function menu_toggle(state) {
  if(state === true) {
    dropdown.style.marginTop = "0px";
    if(closeham.classList.contains('display--xl-none')) {
      closeham.classList.remove('display--xl-none');
      closeham.classList.add('display--xl-flex');
    }
  }
  if(state === false) {
    dropdown.style.marginTop = "-" + (menuheight + 620) + "px";
    if(closeham.classList.contains('display--xl-flex')) {
      closeham.classList.remove('display--xl-flex');
      closeham.classList.add('display--xl-none');
    }
  }
}

//menu scroll

var lastScrollTop = 0;
        $(window).scroll(function(event){
          var st = $(this).scrollTop();
          // console.log(window.innerWidth);
          
          if (window.innerWidth > 1023) {
            if (st<60) { $( ".menu-second" ).css( "top", "3.75rem" ); return }
            if (st > lastScrollTop){
              // downscroll code
              $( ".menu-second" ).css( "top", "-7rem" );
            } else {
              // upscroll code
              $( ".menu-second" ).css( "top", "3.75rem" );
            }
          }
          if (window.innerWidth < 1023) {
            if (st<60) { $( ".menu-second" ).css( "top", "0rem" ); return }
            if (st > lastScrollTop){
              // downscroll code
              $( ".menu-second" ).css( "top", "-3.75rem" );
            } else {
              // upscroll code
              $( ".menu-second" ).css( "top", "0rem" );
            }
          }
          lastScrollTop = st;
        });


let menuheight2 = document.getElementById('radionicaInfo').scrollHeight;

let radionicaInfo = document.getElementById('radionicaInfo');

function radionica_open() {

  if(radionicaInfo.classList.contains('radionica-info-res')) {
    radionicaInfo.classList.remove('radionica-info-res');
    radionicaInfo.style.display = "none";
    i = true;
  }
  else {
    radionicaInfo.classList.add('radionica-info-res');
    radionicaInfo.style.display = "flex";
  }

}

function radionica_close() {
  radionicaInfo.classList.remove('radionica-info-res');
  radionicaInfo.style.display = "none";
}

// pretraga
let pretraga = document.getElementById('js-pretraga');
let search = document.getElementById('js-search');
let search_m = document.getElementById('js-search-m');

search.addEventListener('click', function(){
  
  
  if (pretraga.classList.contains('radionica-info-res')) {
      pretraga.classList.remove('radionica-info-res');
      pretraga.style.display = "none";
      // console.log('radi');
      
  }
  else {
      pretraga.classList.add('radionica-info-res');
      pretraga.style.display = "flex";
  }
  prefetchSearch()
});
search_m.addEventListener('click', function(){
  
  
  if (pretraga.classList.contains('radionica-info-res')) {
      pretraga.classList.remove('radionica-info-res');
      pretraga.style.display = "none";  
  }
  else {
      pretraga.classList.add('radionica-info-res');
      pretraga.style.display = "flex";
  }
  prefetchSearch()
});

var serachArray = [];
var substringMatcher = function() {
    return function findMatches(q, cb) {
        q = q.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
        var matches, substringRegex;
        matches = [];
        substrRegex = new RegExp(q, 'i');
        $.each(serachArray, function(i, item) {
            if (substrRegex.test(item.Naslov) || substrRegex.test(item.Text)) {
                matches.push(item);
            }
        });
        cb(matches);
    };
};
var searchInit=false;
function prefetchSearch(){
    $('#typeahead_m')[0].focus();
    if (searchInit) return;
    searchInit=true;
    $.getJSON("cms/api.php/?query=_search", function(result){
        serachArray = result      
    });
}

$('#typeahead_m').typeahead({highlight:true}, {
    name: 'countries',
    display: 'Naslov',
    source: substringMatcher(),
    limit: 10
}); 

$('#typeahead_m')[0].focus();
$('#typeahead_m').bind('typeahead:select', function(ev, suggestion) {
    document.location = suggestion.href+'/'+suggestion.Slug
});   


