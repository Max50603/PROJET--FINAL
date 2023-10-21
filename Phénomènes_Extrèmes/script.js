//!  BOUTON SMOOTH REMONTER HAUT
const btn = document.querySelector('.scroll');
btn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    });
})

//! SCROLLBAR
// window.onscroll = function() {myFunction()};
// function myFunction(){
//   let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
//   let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
//   let scrolled = (winScroll / height) * 100;
//   document.getElementById("myBar").style.width = scrolled + "%";
// }