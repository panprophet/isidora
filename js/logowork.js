let footer;
let footerCont;

let content = document.querySelector('#content');
let menusecond = document.getElementById("menusecond");

let footerTop;

let winPosition = 0;

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
    setMenuColor();
  }

});
function setMenuColor(){
  winPosition = window.scrollY;
  for(let i = 0; i < elementsLength; i++) {
    if(content.children[i].offsetTop < winPosition && content.children[i].offsetTop + content.children[i].scrollHeight > winPosition) {
      if(content.children[i]['id'] !== prevId){
        svg_color();
        menuFontColor();
        prevId = content.children[i]['id'];
      }
    }
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
  if(winWidth > 1024) {
    setMenuColor();
  // if(winPosition <= footerTop.top) {
  //   footerCont.style.marginTop =  "" + (120 + (winPosition - elements[indexLast]['position'].bottom)) + "px";
  // }
  }
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
