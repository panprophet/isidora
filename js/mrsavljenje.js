// var index = 1;
// show(index);

// function plus(n) {
//     show(index += n);
//   AOS.refreshHard();
// }

// function show(n) {
//   var i;
//   var x = document.getElementsByClassName("mrsavljenje");
//   if (!x || x.length==0) return

//   if (n > x.length) {index = 1}
//   if (n < 1) {index = x.length}
//   for (i = 0; i < x.length; i++) {
//     x[i].style.display = "none";  
//   }
//   x[index-1].style.display = "flex";
// }
// var value = 'sta_je_psihoterapija';
function Blok1() {
    document.getElementById("psihoterapija").style.display = 'flex';
    document.getElementById("cilj").style.display = 'none';
    document.getElementById("rezultat").style.display = 'none';
}
function Blok2() {
    document.getElementById("psihoterapija").style.display = 'none';
    document.getElementById("cilj").style.display = 'flex';
    document.getElementById("rezultat").style.display = 'none';
}
function Blok3() {
    document.getElementById("psihoterapija").style.display = 'none';
    document.getElementById("cilj").style.display = 'none';
    document.getElementById("rezultat").style.display = 'flex';
}