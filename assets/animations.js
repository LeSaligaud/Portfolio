// --- Slider 2TServices ---
let splide_element = document.getElementsByClassName("splide")[0];

document.addEventListener( 'DOMContentLoaded', function() {

    splide_object = new Splide( splide_element, {
        cover: true 
    });

    splide_object.mount();
});
// --- Slider 2TServices ---


// --- Slider Portfolio ---

let carreG = document.getElementsByClassName("cG")[0];
let carreD = document.getElementsByClassName("cD")[0];
let captures = document.getElementsByClassName("slide-Pf");
let compteur = 0;

for (let index = 1; index < captures.length; index++) {
    captures[index].style.visibility = "hidden";
}

carreG.addEventListener("click", p => {
    let index = compteur;

    captures[index].style.transition = "0.7s"
    captures[index].style.transform = "translate(100%,0)";
    captures[index].style.opacity = 0;

    compteur--

    if(compteur < 0) {
        compteur = captures.length - 1;
    }
    
    captures[compteur].style.visibility = "visible";
    captures[compteur].style.left = "-100%";
    captures[compteur].style.transition = "transform 0.7s";
    captures[compteur].style.transform = "translate(100%,0)";

    setTimeout(e => {
        captures[index].style.transition = "";
        captures[index].style.transform = "";
        captures[index].style.visibility = "hidden";
        captures[index].style.opacity = "1";
        

        captures[compteur].style.transition = "";
        captures[compteur].style.transform = "";
        captures[compteur].style.left = "";
    }, 1000);
});

carreD.addEventListener("click", s => {
    let index = compteur;

    captures[index].style.transition = "0.7s"
    captures[index].style.transform = "translate(-100%,0)";
    captures[index].style.opacity = 0;

    compteur++;
    
    if(compteur >= captures.length) {
        compteur = 0;
    }

    captures[compteur].style.visibility = "visible";
    captures[compteur].style.left = "100%";
    captures[compteur].style.transition = "transform 0.7s";
    captures[compteur].style.transform = "translate(-100%,0)";


    setTimeout(e => {
        captures[index].style.transition = "";
        captures[index].style.transform = "";
        captures[index].style.visibility = "hidden";
        captures[index].style.opacity = "1";
        

        captures[compteur].style.transition = "";
        captures[compteur].style.transform = "";
        captures[compteur].style.left = "";
    }, 1000);
    
});

// --- Slider Portfolio ---


// --- Slider FastCaddie ---
let slides = ["assets/images/caroussel/fc-1-min.png","assets/images/caroussel/fc-2-min.png","assets/images/caroussel/fc-3-min.png", "assets/images/caroussel/fc-4-min.png", "assets/images/caroussel/fc-5-min.png"];
let nbSlide = 0;
let slider = document.getElementById("sliderFc");

function precedent() {
    nbSlide--;
    if(nbSlide < 0) {
        nbSlide = slides.length-1;
    }
    
    slider.style.opacity = "0"; 
    setTimeout(f => {
        slider.src = slides[nbSlide];
        slider.style.opacity = "1"; 
    }, 200);
}

function suivant() {
    nbSlide++;
    if(nbSlide >= slides.length) {
        nbSlide = 0;
    }

    slider.style.opacity = "0"; 
    setTimeout(f => {
        slider.src = slides[nbSlide];
        slider.style.opacity = "1"; 
    }, 200);
    
}

document.getElementsByClassName("precedent")[0].addEventListener("click", precedent);
document.getElementsByClassName("suivant")[0].addEventListener("click", suivant);
// --- Slider FastCaddie ---