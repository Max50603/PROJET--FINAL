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

//! POUR AFFICHER DU TEXTE AVEC LE BOUTON
const afficher = document.querySelector('.afficher');
const reponse = document.querySelector('#reponse');
let statut = true;
afficher.addEventListener('click', () => {
    if(statut){
        reponse.style.display = "block";
        reponse.style.animation = "slide 0.5s forward";
        statut = false;
    }else{
        reponse.style.display = "none";
        statut = true;
    }
})

//! AFFICHER UNE DU TEXTE HAUTE PRESSION EN PLEIN ECRAN
const hp = document.querySelector('.hp');
const enplace = document.querySelector('.flex');
const paragraphe = document.querySelector('java');
let statut1 = true;
hp.addEventListener('click', () =>{
    if(statut1){
        enplace.style.display = "flex";
        enplace.style.justifyContent = "center";
        enplace.style.alignItems = "center";
        enplace.requestFullscreen();
        console.log("Afficher");
        statut1 = false;
    }else{
        enplace.style.display = "none";
        console.log("Caché");
        statut1 = true;
    }
})

//! AFFICHER UNE DU TEXTE 2 BASSE PRESSION EN PLEIN ECRAN
const bp = document.querySelector('.bp');
const enplace1 = document.querySelector('.flex1');
let statut2 = true;
bp.addEventListener('click', () =>{
    if(statut2){
        enplace1.style.display = "flex";
        enplace1.style.justifyContent = "center";
        enplace1.style.alignItems = "center";
        enplace1.requestFullscreen();
        console.log("Afficher");
        statut2 = false;
    }else{
        enplace1.style.display = "none";
        console.log("Caché");
        statut2 = true;
    }
})

//! 
