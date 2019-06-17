let menuheight = document.getElementById('dropdown').scrollHeight;

let dropdown = document.getElementById('dropdown');
let closeham = document.getElementById('closeham');

function menu_toggle(state) {
  if(state === true) {
    dropdown.style.marginTop = "0px";
    if(closeham.classList.contains('display--m-none')) {
      closeham.classList.remove('display--m-none');
      closeham.classList.add('display--m-flex');
    }
  }
  if(state === false) {
    dropdown.style.marginTop = "-" + (menuheight + 60) + "px";
    if(closeham.classList.contains('display--m-flex')) {
      closeham.classList.remove('display--m-flex');
      closeham.classList.add('display--m-none');
    }
  }
}


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
      // meni.classList.remove('radionica-info-res');
      // console.log('radi2');
  }
  // console.log('da li');
  prefetchSearch()
});
search_m.addEventListener('click', function(){
  
  
  if (pretraga.classList.contains('radionica-info-res')) {
      pretraga.classList.remove('radionica-info-res');
      pretraga.style.display = "none";
      // console.log('radi');
      
  }
  else {
      pretraga.classList.add('radionica-info-res');
      pretraga.style.display = "flex";
      // meni.classList.remove('radionica-info-res');
      // console.log('radi2');
  }
  // console.log('da li');
  prefetchSearch()
});

var serachArray = [];
var substringMatcher = function() {
  // console.log('radi3');
    return function findMatches(q, cb) {
        q = q.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
        var matches, substringRegex;
        matches = [];
        substrRegex = new RegExp(q, 'i');
        $.each(serachArray, function(i, item) {
          // console.log('radi4', serachArray);
            if (substrRegex.test(item.Naslov) || substrRegex.test(item.Text)) {
              // console.log('radi5');
                matches.push(item);
            }
        });
        // console.log('radi4', serachArray);
        cb(matches);
    };
};
var searchInit=false;
function prefetchSearch(){
  // console.log('ovo', searchInit);
    $('#typeahead_m')[0].focus();
    if (searchInit) return;
    searchInit=true;
    // console.log('ovo2', searchInit);
    $.getJSON("cms/api.php/?query=_search", function(result){
        serachArray = result   
        // console.log('ovo3', serachArray);     
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


// copy link

// var clipboard = new Clipboard('.btn-copy', {
//   text: function() {
//       return document.querySelector('input[type=hidden]').value;
//   }
// });
// $("#input-url").val(location.href);
// //safari
// if (navigator.vendor.indexOf("Apple")==0 && /\sSafari\//.test(navigator.userAgent)) {
//    $('.btn-copy').on('click', function() {
// var msg = window.prompt("Copy this link", location.href);

// });
//   }
// function CopyURL() {
//   var copyText = document.getElementById("input-url").value;
//   // console.log(copyText);
  
//   // copyText.value();
//   document.execCommand(this.copyText);
//   alert (copyText);
// }