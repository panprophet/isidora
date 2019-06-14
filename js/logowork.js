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
  winPosition = window.scrollY;
  if(winWidth > 1024) {
    footer = document.getElementById("footer");
    footerCont = document.getElementById("footercont");

    footerTop = footer.getBoundingClientRect();
    footerContTop = footerCont.getBoundingClientRect();

    elementsLength = content.children.length;
    indexLast = content.children.length - 1;

    for(i = 0; i < elementsLength; i++) {
      elements[i] = {
        id: content.children[i].id,
        position: content.children[i].getBoundingClientRect(),
        scrollHeight: content.children[i].scrollHeight
      }
      if(content.children[i].offsetTop - 60 <= winPosition && content.children[i].offsetTop + content.children[i].scrollHeight >= winPosition) {
        prevId = content.children[i]['id'];
        // console.log(content.children[i]['id']);
        if(content.children[i]['id']){
          svg_color(content.children[i]['id']);
          menuFontColor(content.children[i]['id']);
        }
      }
    }

  }

});
function setMenuColor(position, direction){
  winPosition = position;
  elem = [];

  for(let i = 0; i < elementsLength; i++) {
    if ( content.children[i].offsetTop <= menusecondTop + winPosition && content.children[i]['id'] !== 'cd-vertical-nav') {
      if(prevId !== content.children[i]['id']) {
        if(content.children[i].offsetTop - 60 <= menusecondTop + winPosition && content.children[i].offsetTop + content.children[i].scrollHeight >= winPosition + content.children[i].scrollHeight && direction === 'down') {
          elem.push(content.children[i]['id']);
          prevId = content.children[i]['id'];
        } else
        if(content.children[i].offsetTop + content.children[i].scrollHeight <= menusecondTop + winPosition && content.children[i].offsetTop + content.children[i].scrollHeight >= winPosition && direction === 'up') {
          prevId = content.children[i]['id'];
          elem.push(content.children[i]['id']);
        }
      } else {
        elem.push(content.children[i]['id']);
      }
    }
    if(elem[elem.length-1]){
      elemid = elem[elem.length-1].toString();
      menuFontColor(elemid);
      svg_color(elemid);
    }
  }
}

function svg_color(elem) {
  if(this.document.getElementById(elem).classList.contains("logo_white")){
    this.document.getElementById('logo').classList.remove("logo-purple");
    this.document.getElementById('logo').classList.add("logo-white");
    this.document.getElementById('logo2').classList.remove("logo-purple");
    this.document.getElementById('logo2').classList.add("logo-white");
    if(document.getElementById('ham')) {
      this.document.getElementById('ham').classList.remove("ham-purple");
      this.document.getElementById('ham').classList.add("ham-white");
    }
  } else if(this.document.getElementById(elem).classList.contains("logo_purple")){
    this.document.getElementById('logo').classList.remove("logo-white");
    this.document.getElementById('logo').classList.add("logo-purple");
    this.document.getElementById('logo2').classList.remove("logo-white");
    this.document.getElementById('logo2').classList.add("logo-purple");
    if(document.getElementById('ham')) {
      this.document.getElementById('ham').classList.remove("ham-white");
      this.document.getElementById('ham').classList.add("ham-purple");
    }
  }
}
window.addEventListener("scroll", function(e) {
  e.preventDefault();
  if(winWidth > 1024) {

    winPrevPos = winPosition;
    winPosition = window.scrollY;
    if(winPrevPos - winPosition > 0) {
      setMenuColor(winPosition, 'up')
    } else {
      setMenuColor(winPosition, 'down')
    }
  }

});
function menuFontColor(elem){
   if(this.document.getElementById(elem).classList.contains("menu_white")) {
    menusecond.classList.remove("font-purple--menu");
    menusecond.classList.add("font-white--menu");
    this.document.getElementById('contacticon').classList.remove("logo-purple");
    this.document.getElementById('contacticon').classList.add("logo-white");
  } else if(this.document.getElementById(elem).classList.contains("menu_purple")){
    menusecond.classList.remove("font-white--menu");
    menusecond.classList.add("font-purple--menu");
    this.document.getElementById('contacticon').classList.remove("logo-white");
    this.document.getElementById('contacticon').classList.add("logo-purple");
  }
};
