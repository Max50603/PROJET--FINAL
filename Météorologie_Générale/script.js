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
//
// //! POUR AFFICHER DU TEXTE AVEC LE BOUTON
// const afficher = document.querySelector('.afficher');
// const reponse = document.querySelector('#reponse');
// let statut = true;
// afficher.addEventListener('click', () => {
//     if(statut){
//         reponse.style.display = "block";
//         reponse.style.animation = "slide 0.5s forward";
//         statut = false;
//     }else{
//         reponse.style.display = "none";
//         statut = true;
//     }
// })
//
// //! AFFICHER UNE DU TEXTE HAUTE PRESSION EN PLEIN ECRAN
// const hp = document.querySelector('.hp');
// const enplace = document.querySelector('.flex');
// const paragraphe = document.querySelector('java');
// let statut1 = true;
// hp.addEventListener('click', () =>{
//     if(statut1){
//         enplace.style.display = "flex";
//         enplace.style.justifyContent = "center";
//         enplace.style.alignItems = "center";
//         enplace.style.backgroundColor = "#1d1e31";
//         enplace.requestFullscreen();
//         console.log("Afficher");
//         statut1 = false;
//     }else{
//         enplace.style.display = "none";
//         console.log("Caché");
//         statut1 = true;
//     }
// })
//
// //! AFFICHER DU TEXTE 2 BASSE PRESSION EN PLEIN ECRAN
// const bp = document.querySelector('.bp');
// const enplace1 = document.querySelector('.flex1');
// let statut2 = true;
// bp.addEventListener('click', () =>{
//     if(statut2){
//         enplace1.style.display = "flex";
//         enplace1.style.justifyContent = "center";
//         enplace1.style.alignItems = "center";
//         enplace1.style.backgroundColor = "#1d1e31";
//         enplace1.requestFullscreen();
//         statut2 = false;
//     }else{
//         enplace1.style.display = "none";
//         statut2 = true;
//     }
// })
//
// //! AFFICHER TEXTE 3 PRESSION EN PLEIN ECRAN
// const p = document.querySelector('.p');
// const flex2 = document.querySelector('.flex2');
// let statut3 = true;
// p.addEventListener('click', () =>{
//     if(statut3){
//         flex2.style.display = "flex";
//         flex2.style.justifyContent = "center";
//         flex2.style.alignItems = "center";
//         flex2.style.backgroundColor = "#1d1e31";
//         flex2.requestFullscreen();
//         statut3 = false;
//     }else{
//         flex2.style.display = "none";
//         statut3 = true;
//     }
// })
//
// //! AFFICHER TROIS DIV DE TEXTE
// const anti = document.querySelector('.anti');
// const carre = document.querySelector('.toutcarre');
// let statut4 = true;
// anti.addEventListener('click', () =>{
//     if(statut4){
//         carre.style.display = "flex";
//         carre.style.justifyContent ="center";
//         carre.style.alignItems = "center";
//         carre.style.backgroundColor = "#1d1e31";
//         carre.requestFullscreen();
//         statut4 = false;
//     }else{
//         carre.style.display = "none";
//         statut4 = true;
//     }
// })
//
// //! AFFICHER DEUX DIV DE TEXTE
// const depression = document.querySelector('.dep');
// const carre1 = document.querySelector('.toutcarre1');
// let statut5 = true;
// depression.addEventListener('click', () =>{
//     if(statut5){
//         carre1.style.display = "flex";
//         carre1.style.justifyContent ="center";
//         carre1.style.alignItems = "center";
//         carre1.style.backgroundColor = "#1d1e31";
//         carre1.requestFullscreen();
//         statut5 = false;
//     }else{
//         carre1.style.display = "none";
//         statut5 = true;
//     }
// })
//
// //! TITRE H2 QUI S'AFFICHE AU SCROLL DE LA SOURIS
// function showH2OnScroll() {
//     const h2Elements = document.querySelectorAll('h2');
//     window.addEventListener('scroll', () => {
//         for (const h2Element of h2Elements){
//             const isH2InView = h2Element.getBoundingClientRect().top <= window.scrollY + 200;
//             h2Element.style.display = isH2InView ? 'block' : 'none';
//         }
//     });
// }showH2OnScroll();