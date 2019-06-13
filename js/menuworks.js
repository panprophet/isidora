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
// let closeham = document.getElementById('closeham');

function radionica_open() {

  if(radionicaInfo.classList.contains('radionica-info-res')) {
    radionicaInfo.classList.remove('radionica-info-res');
    i = true;
  }
  else {
    radionicaInfo.classList.add('radionica-info-res');
  }

}

function radionica_close() {
  radionicaInfo.classList.remove('radionica-info-res');
}
