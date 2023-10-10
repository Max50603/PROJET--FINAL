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
window.onscroll = function() {myFunction()};
function myFunction(){
  let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  let scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}

//! BOUTON EN SAVOIR PLUS QUI AFFICHE DU TEXTE EN PLUS
const texte = document.querySelector('.cv');
const enplus = document.querySelector('.texteplus');
let statut = true;
texte.addEventListener('click', () =>{
    if(statut){
        enplus.style.display = "block";
        enplus.style.animation = "slide 0.8s forwards";
        statut = false;
    }else{
        enplus.style.display = "none";
        statut = true;
    }
})