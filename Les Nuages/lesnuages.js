//  BOUTON SMOOTH REMONTER HAUT
const btn = document.querySelector('.scroll');
btn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    });
})

// CORPS DE PAGE
let toutBody = document.querySelector('body');
// console.log(toutBody);
    toutBody.style.margin = "0px";
    toutBody.style.padding = "0px";


// LE GROS TITRE
let titre1 = document.querySelector('.titre1');
// console.log(titre1);
    titre1.style.width = "100%";
    titre1.style.height = "auto";
    titre1.style.display = "flex";
    titre1.style.justifyContent = "center";
    titre1.style.alignItems = "center";
    titre1.style.color = "#31489f";
    titre1.style.fontSize = "3em";


// SECTION NUAGES
let nuages = document.querySelector('.flex');
// console.log(nuages.style);
    nuages.style.display = "flex";
    nuages.style.justifyContent = "center";
    nuages.style.alignItems = "center";
    nuages.style.border = "1px solid grey";
    nuages.style.borderRadius = "10px";
    nuages.style.boxShadow = "5px 5px 5px black";
    nuages.style.margin = "10px";

let texte = document.querySelector('.texte');
document.getElementsByClassName('.texte');
    texte.style.fontSize = "1.4em";

let image500 = document.querySelector('.centre');
document.getElementsByClassName('.centre');
    image500.style.width = "500px";
    image500.style.heigth = "500px";
    image500.style.margin = "10px";

let texte1 = document.querySelector('.titre2');
// console.log(texte1);
    texte1.style.backgroundColor = "#31489f";
    texte1.style.display = "flex";
    texte1.style.justifyContent = "center";
    texte1.style.alignItems = "center";
    texte1.style.color = "white";
    texte1.style.fontSize = "1.4em";


// SECTION MECANISME
let titre3 = document.querySelector('.titre3');
    titre3.style.width = "100%";
    titre3.style.height = "auto";
    titre3.style.color = "white";
    titre3.style.display = "flex";
    titre3.style.justifyContent = "center";
    titre3.style.alignItems = "center";
    titre3.style.fontSize = "2em";
// console.log(titre3);

let texte2 = document.querySelector('.texte2');
    texte2.style.fontSize = "1.4em";
    texte2.style.margin = "10px";

let petittitre = document.querySelector('.petittitre');
    petittitre.style.backgroundColor = "#31489f";
    petittitre.style.color = "white";
// console.log(petittitre);


// SECTION FORMATION
let formation = document.querySelector('.flex2');
// console.log(formation);
    formation.style.display = "flex";
    formation.style.justifyContent = "center";
    formation.style.alignItems = "center";
    formation.style.border = "1px solid grey";
    formation.style.borderRadius = "10px";
    formation.style.boxShadow = "5px 5px 5px black";
    formation.style.margin = "10px";

let titre4 = document.querySelector('.petittitre1');
    titre4.style.width = "100%";
    titre4.style.height = "auto";
    titre4.style.backgroundColor = "#31489f";
    titre4.style.display = "flex";
    titre4.style.justifyContent = "center";
    titre4.style.alignItems = "center";
    titre4.style.fontSize = "1.4em";
    titre4.style.color = "white";

let left1 = document.querySelector('.left1');
    left1.style.width = "500px";
    left1.style.height = "500px";
    left1.style.margin = "10px";

let texte3 = document.querySelector('.texte3');
    texte3.style.fontSize = "1.4em";
    texte3.style.margin = "10px";

let flex3 = document.querySelector('.flex3');
    flex3.style.display = "flex";
    flex3.style.justifyContent = "center";
    flex3.style.alignItems = "center";
    flex3.style.border = "1px solid grey";
    flex3.style.borderRadius = "10px";
    flex3.style.boxShadow = "5px 5px 5px black";
    flex3.style.margin = "10px";

let titre5 = document.querySelector('.petittitre2');
    titre5.style.width = "100%";
    titre5.style.height = "auto";
    titre5.style.backgroundColor = "#31489f";
    titre5.style.display = "flex";
    titre5.style.justifyContent = "center";
    titre5.style.alignItems = "center";
    titre5.style.fontSize = "1.4em";
    titre5.style.color = "white";

let texte4 = document.querySelector('.texte4');
    texte4.style.fontSize = "1.4em";
    texte4.style.margin = "10px";

let right = document.querySelector('.right');
    right.style.width = "500px";
    right.style.heigth = "500px";
    right.style.margin = "10px";

let titre6 = document.querySelector('.petittitre3');
    titre6.style.width = "100%";
    titre6.style.height = "auto";
    titre6.style.backgroundColor = "#31489f";
    titre6.style.display = "flex";
    titre6.style.justifyContent = "center";
    titre6.style.alignItems = "center";
    titre6.style.fontSize = "1.4em";
    titre6.style.color = "white";

let flex4 = document.querySelector('.flex4')
    flex4.style.display = "flex";
    flex4.style.justifyContent = "center";
    flex4.style.alignItems = "center";
    flex4.style.border = "1px solid grey";
    flex4.style.borderRadius = "10px";
    flex4.style.boxShadow = "5px 5px 5px black";
    flex4.style.margin = "10px";

let image5001 = document.querySelector('.left2');
    image5001.style.width = "500px";
    image5001.style.height = "500px";
    image5001.style.margin = "10px";

let texte5 = document.querySelector('.texte5');
    texte5.style.fontSize = "1.4em";
    texte5.style.margin = "10px";


// SECTION TYPES
let titre7 = document.querySelector('.titre7');
    titre7.style.width = "100%";
    titre7.style.height = "auto";
    titre7.style.backgroundColor = "#31489f";
    titre7.style.display = "flex";
    titre7.style.justifyContent = "center";
    titre7.style.alignItems = "center";
    titre7.style.fontSize = "1.4em";
    titre7.style.marginTop = "20px";

let bleu = document.querySelector('.bleu');
    bleu.style.backgroundColor = "#31489f";
    bleu.style.color = "white";

let left2 = document.querySelector('.centre-responsive');
left2.firstElementChild;
    left2.style.width = "500px";
    left2.style.height = "500px";
    left2.style.margin = "10px";    

let flex5 = document.querySelector('.flex5');
    flex5.style.display = "flex";
    flex5.style.justifyContent = "center";
    flex5.style.alignItems = "center";
    flex5.style.border = "1px solid grey";
    flex5.style.borderRadius = "10px";
    flex5.style.boxShadow = "5px 5px 5px black";
    flex5.style.margin = "10px";

let texte6 = document.querySelector('.texte6');
    texte6.style.fontSize = "1.4em";
    texte6.style.margin = "10px";

let texte7 = document.querySelector('.texte7');
    texte7.style.fontSize = "1.4em";
    texte7.style.margin = "10px";


// SECTION NUAGE
let clouds = document.querySelector('.nuage');
let mark = clouds.firstElementChild;
mark = mark.firstElementChild;
mark = mark.firstElementChild;
    mark.style.height = "auto";
    mark.style.width = "100%";
    mark.style.display = "flex";
    mark.style.justifyContent = "center";
    mark.style.alignItems = "center";
    mark.style.backgroundColor = "#31489f";
    mark.style.fontSize = "2em";
    mark.style.backgroundColor = "#31489f";
    mark.style.color = "white";
// console.log(mark);