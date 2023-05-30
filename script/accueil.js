// Ajoute les différents évènements sur les balises concernés
function main(){
    let image = document.getElementById("competences");
    image.addEventListener("click", agrandir);
    
    let titre = document.getElementById("qui"); // selectionne la div vide de qui somme nous
    
    titre.innerHTML = "";
    setTimeout(affichetext, 1000, "Qui somme nous ?");
    
}

// Cet fonction permet de faire grandir l'image ou la réduire s'il est déjà grande
function agrandir(){
    let image = document.getElementById("competences");
    if(image.getAttribute("width") == 567){ // si l'image est petite, on redimensionne en conséquence
        image.setAttribute("width", 907);
        image.setAttribute("height", 566);
    } else { // si l'image est grande, on redimensionne en conséquence
        image.setAttribute("width", 567);
        image.setAttribute("height", 354);
    }
    
}

// Permet d'afficher le texte selon la manière demander
function affichetext(text){

    // Tout d'abord la sélection de la zone de texte
    let remplir = document.getElementById("qui").innerHTML;
    let ajouter = "";

    if(text != remplir){ // temps que le "text" que l'on souhaite n'est pas afficher

        // On rajoute en fonction de où on l'en est
        if(remplir == ""){
            document.getElementById("qui").innerHTML = remplir + "Qui ";
        } else if(remplir == "Qui "){
            document.getElementById("qui").innerHTML = remplir + "somme ";
        } else {
            document.getElementById("qui").innerHTML = remplir + "nous ?";
        }

        //Puis on recommence en attendant 1 sec
        setTimeout(affichetext, 1000, text);
    } else {
        // Sinon si toute la phrase est afficher, on execute l'animation
        animation();
    }
}

// L'animation appliquer au texte
function animation(){

    // Selection de notre élément a bouger
    let titre = document.getElementById("qui");

    // On l'anime
    titre.animate([
        // étapes / keyframes
        { transform: 'translateX(0px)' }, 
        { transform: 'translateX(200px)' }, // déplace l'élément de 200 pixels à droite
        { transform: 'translateX(0px)' }, // retour a position initial
        { transform: 'translateX(-200px)' }, // a gauche
        { transform: 'translateX(0px)' },
      ], {
        // temporisation
        duration: 3000, // Le tout en trois seconde
        iterations: 1
      });
    
    // On recommence l'animation
    setTimeout(reinitialise, 3000); // attente de 3 sec car l'animation dure 3 sec
}

// Pour vidé le texte et recommencer le procéssuce de toute l'animation
function reinitialise(){
    document.getElementById("qui").innerHTML = "";
    setTimeout(affichetext, 1000, "Qui somme nous ?");
}

main();