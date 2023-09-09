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
console.log(titre1);
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


// SECTION MECANISME
let mecanisme = document.querySelector('.mecanisme');
let titre2Div = document.querySelector('.titre2');
console.log(mecanisme);
mecanisme.style.backgroundColor = "#31489f";
mecanisme.style.fontSize = "2em";
mecansime.style.display = "flex";
mecansime.style.justifyContent = "center";
mecansime.style.alignItems = "center";
mecanisme.style.height = "auto";
mecanisme.style.width = "100%";