let first;
let second;
let footer;
let footerCont;


let menusecond = document.getElementById("menusecond");

let firstTop;
let secondTop;
let footerTop;

let winPosition = 0;
document.addEventListener( 'DOMContentLoaded', () => {
  first = document.getElementById("first");
  second = document.getElementById("second");
  footer = document.getElementById("footer");
  footerCont = document.getElementById("footercont");

  firstTop = first.getBoundingClientRect();
  secondTop = second.getBoundingClientRect();
  footerTop = footer.getBoundingClientRect();
  footerContTop = footerCont.getBoundingClientRect();

});
window.addEventListener("scroll", function(e) {
  winPosition = window.scrollY;
  if(firstTop.bottom >= winPosition - 10) {
    if(this.document.getElementById('logo').classList.contains("logo-purple")){
      this.document.getElementById('logo').classList.remove("logo-purple");
      this.document.getElementById('logo').classList.add("logo-white");
      this.document.getElementById('logo2').classList.remove("logo-purple");
      this.document.getElementById('logo2').classList.add("logo-white");
      this.document.getElementById('contacticon').classList.remove("logo-purple");
      this.document.getElementById('contacticon').classList.add("logo-white");
      menuFontColor();
    }
  }
  if(secondTop.top - 60 <= winPosition) {
    if(this.document.getElementById('logo').classList.contains("logo-white")){
      this.document.getElementById('logo').classList.remove("logo-white");
      this.document.getElementById('logo').classList.add("logo-purple");
      this.document.getElementById('logo2').classList.remove("logo-white");
      this.document.getElementById('logo2').classList.add("logo-purple");
      this.document.getElementById('contacticon').classList.remove("logo-white");
      this.document.getElementById('contacticon').classList.add("logo-purple");
      menuFontColor();
    }
  }
  if(winPosition <= footerTop.top) {
    footerCont.style.marginTop =  "" + (1.5*(winPosition-secondTop.bottom)) + "px";
  }
});

function menuFontColor(){
  if(menusecond.classList.contains("font-white--menu")){
    menusecond.classList.remove("font-white--menu");
    menusecond.classList.add("font-purple--menu");
  } else {
    menusecond.classList.remove("font-purple--menu");
    menusecond.classList.add("font-white--menu");
  }
};
