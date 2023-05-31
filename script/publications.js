// Filtre en fonction des noms d'auteur
function filtreAuteur(element){

    // Récupère tous les champs d'auteurs ainsi que le filtre appliquer
    let auteur = element.value.toLowerCase();
    let textes = document.getElementsByClassName("auteur");

    // Puis pour chaque carte, la rend invisible si le filtre ne correspond pas
    for (const auteurs of textes) {
        if(contient(auteurs.innerHTML.toLocaleLowerCase(), auteur.toLocaleLowerCase()) || auteur == ""){
            auteurs.parentNode.parentNode.parentNode.style.display = "grid"; // rendre la carte visible
        } else {
            auteurs.parentNode.parentNode.parentNode.style.display = "none"; // rendre la carte caché
        }
    }
}

function filtreTitre(element){

    // Récupère tous les champs de titre ainsi que le filtre appliquer
    let titre = element.value.toLowerCase();
    let textes = document.getElementsByClassName("partie");
    
    // Puis pour chaque carte, la rend invisible si le filtre ne correspond pas
    for (const titres of textes) {
        if(contient(titres.innerHTML.toLocaleLowerCase(), titre.toLocaleLowerCase()) || titre == ""){
            titres.parentNode.parentNode.style.display = "grid"; // rendre la carte visible
        } else {
            titres.parentNode.parentNode.style.display = "none"; // rendre la carte caché
        }
    }
}

function filtreDate(element){

    // Récupère tous les champs de date ainsi que le filtre appliquer
    let date_recrup = element.value;
    let annee = date_recrup[0] + date_recrup[1] + date_recrup[2] + date_recrup[3];
    let dates = document.getElementsByClassName("date");
    
    // Puis pour chaque carte, la rend invisible si le filtre ne correspond pas
    for (const date of dates) {
        if(contient(date.innerHTML.toLocaleLowerCase(), annee) || date_recrup == ""){
            date.parentNode.parentNode.parentNode.style.display = "grid"; // rendre la carte visible
        } else {
            date.parentNode.parentNode.parentNode.style.display = "none"; // rendre la carte caché
        }
    }
}

function filtreTout(){

    // affiche tout les cartes
    let cartes = document.getElementsByClassName("carte");
    for (const carte of cartes) {
        carte.style.display = "grid";
    }
}

function filtreCommunication(){

    
    let cartes = document.getElementsByClassName("carte");
    for (const carte of cartes) {
        if(carte.children[0].className == "color2"){
            carte.style.display = "grid";
        } else {
            carte.style.display = "none";
        }
    }
}

function filtreRevue(){
    let cartes = document.getElementsByClassName("carte");
    for (const carte of cartes) {
        if(carte.children[0].className == "color1"){
            carte.style.display = "grid";
        } else {
            carte.style.display = "none";
        }
    }
}

function contient(string, element){
    let size_element = element.length;
    let size_string = string.length;
    for(let i=0; i<size_string - size_element + 1; i++){
        for(let j=0; j<size_element; j++){
            if(string[i+j] != element[j]){
                break;
            }
            if(j == size_element-1){
                return true;
            }
        }
    }
    return false;
}