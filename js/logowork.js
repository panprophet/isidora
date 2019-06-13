let footer;
let footerCont;

let content = document.querySelector('#content');
let menusecond = document.getElementById("menusecond");
let menusecondTop = menusecond.getBoundingClientRect().top;

let footerTop;

let winPosition = 0;
let winPrevPos = 0;

let elements = [];
let elementsLength = 0;

let indexLast;

let prevId;
let winWidth;

document.addEventListener('DOMContentLoaded', () => {
  winWidth = window.outerWidth;
  footer = document.getElementById("footer");
  footerCont = document.getElementById("footercont");

  footerTop = footer.getBoundingClientRect();
  footerContTop = footerCont.getBoundingClientRect();

  elementsLength = content.children.length;
  indexLast = content.children.length - 1;
  if(winWidth > 1024) {
    for(i = 0; i < elementsLength; i++) {
      elements[i] = {id: content.children[i].id,
      position: content.children[i].getBoundingClientRect(),
      scrollHeight: content.children[i].scrollHeight
      }
      if(content.children[i].offsetTop - 60 <= winPosition && content.children[i].offsetTop + content.children[i].scrollHeight >= winPosition) {
        prevId = content.children[i]['id'];
      }
    }
    winPosition = window.scrollY;
    // setMenuColor();
    console.log(winWidth, winPosition, prevId);

  }

});
function setMenuColor(position, direction){
  winPosition = position;

  for(let i = 0; i < elementsLength; i++) {
    // console.log(content.children[i]['id'], content.children[i].scrollHeight + content.children[i].offsetTop, content.children[i].offsetTop, 'menusecond: ' + (menusecondTop + winPosition));

    // if(content.children[i].offsetTop < winPosition && content.children[i].offsetTop + content.children[i].scrollHeight > winPosition) {
      // if(content.children[i]['id'] !== prevId && i === 2){
      //   console.log(prevId, elementsLength);
      //   svg_color();
      //   // menuFontColor();
      //   prevId = content.children[i]['id'];
      // } else
      // if(content.children[i]['id'] !== prevId){
        // console.log( prevId, elementsLength);
        // svg_color();
        // menuFontColor();
        // prevId = content.children[i]['id'];

        if ( content.children[i].offsetTop <= menusecondTop + winPosition ) {
          // if(){
            if(prevId !== content.children[i]['id']) {
            console.log('In the viewport!', content.children[i]['id'], content.children[i].offsetTop, menusecondTop + winPosition, prevId);
            prevId = content.children[i]['id'];
            }
          // }
        }
      // }
    // }
  }
}

function svg_color() {
  if(this.document.getElementById('logo').classList.contains("logo-purple")){
    this.document.getElementById('logo').classList.remove("logo-purple");
    this.document.getElementById('logo').classList.add("logo-white");
    this.document.getElementById('logo2').classList.remove("logo-purple");
    this.document.getElementById('logo2').classList.add("logo-white");
    this.document.getElementById('contacticon').classList.remove("logo-purple");
    this.document.getElementById('contacticon').classList.add("logo-white");
    if(document.getElementById('ham')) {
      this.document.getElementById('ham').classList.remove("ham-purple");
      this.document.getElementById('ham').classList.add("ham-white");
    }
  } else if(this.document.getElementById('logo').classList.contains("logo-white")){
    this.document.getElementById('logo').classList.remove("logo-white");
    this.document.getElementById('logo').classList.add("logo-purple");
    this.document.getElementById('logo2').classList.remove("logo-white");
    this.document.getElementById('logo2').classList.add("logo-purple");
    this.document.getElementById('contacticon').classList.remove("logo-white");
    this.document.getElementById('contacticon').classList.add("logo-purple");
    if(document.getElementById('ham')) {
      this.document.getElementById('ham').classList.remove("ham-white");
      this.document.getElementById('ham').classList.add("ham-purple");
    }
  }
}
window.addEventListener("scroll", function(e) {
  e.preventDefault();
  winPrevPos = winPosition;
  winPosition = window.scrollY;
  if(winWidth > 1024) {
    // setMenuColor();
  // if(winPosition <= footerTop.top) {
  //   footerCont.style.marginTop =  "" + (120 + (winPosition - elements[indexLast]['position'].bottom)) + "px";
  // }
    if(winPrevPos - winPosition > 0) {
      // ides na dole
      console.log('ides na gore ');
      setMenuColor(winPosition, 'up')

    } else {
      console.log('ides na dole')
      setMenuColor(winPosition, 'down')
    }
  }
  // console.log('trajectory: ', winPrevPos - winPosition);

});
function menuFontColor(){
   if(menusecond.classList.contains("font-purple--menu")) {
    menusecond.classList.remove("font-purple--menu");
    menusecond.classList.add("font-white--menu");
  } else if(menusecond.classList.contains("font-white--menu")){
    menusecond.classList.remove("font-white--menu");
    menusecond.classList.add("font-purple--menu");
  }
};
var isInViewport = function (elem) {
  var bounding = elem.getBoundingClientRect();
  return ( bounding.top >= 0 && bounding.left >=0 && bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) && bounding.right <= (window.innerWidth || document.documentElement.clientWidth));
};
