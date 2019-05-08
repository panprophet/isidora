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
