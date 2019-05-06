let first = document.getElementById("first");
let second = document.getElementById("second");

let menusecond = document.getElementById("menusecond");

let firstTop = first.getBoundingClientRect();
let secondTop = second.getBoundingClientRect();

let winPosition = 0;

window.addEventListener("scroll", function(e) {
  winPosition = window.scrollY;
  console.log(firstTop.bottom, secondTop.top, winPosition);
  if(firstTop.bottom >= winPosition - 10) {
    console.log('first in');

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
    console.log('second in');

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
