var editeur = 0; // Valeur du mode d'éditeur 1:actif 0:inactif

function main(){

    // création d'un cercle gris sur le potrait déjà présent d'Ayoub
    let context = get2DContext("couverture");
    context.beginPath();
    context.strokeStyle = "grey";
    context.arc(100, 100, 80, 0, 2 * Math.PI, true);
    context.fillStyle = "grey";
    context.fill();
    context.stroke();
    context.closePath();

    // Et ajout de l'évènement pour detecté lorsque la souris approche
    let cache = document.getElementById("couverture");
    cache.addEventListener("mousemove", gratte);

}

// Pour le canvas
function get2DContext(id){

    let canvas = document.getElementById(id);
    let context = canvas.getContext("2d");
    return context;

}

// Va pemettre de gratter le canvas qui recouvre ayoub
function gratte(e){
    let context = get2DContext("couverture");
    let canvas = document.getElementById("couverture"); 
    // utilisé avec offsetLeft et offsetTop pour déterminer les positions de l'image
    context.clearRect(e.clientX-canvas.offsetLeft-5, e.pageY-canvas.offsetTop-5, 10, 10); // clearRect efface une partie du canvas et e.pageY récupère la position de la souris
}

// Gestion du mode édition
function editor(){  

    // a l'appuie sur le bouton on regarde le mode actif
    if(editeur == 0){
        // On demande une vérification
        let pseudo = prompt("Votre nom de profil :");
        let pwd = "";
        if(pseudo == "admin"){ // avec le pseudo admin
            pwd = prompt("entrer votre mot de passe :");
        }
        if(pwd == "admin_pwd"){ // et le mot de passe
            editeur = 1
            // On lance le mode_éditeur
            mode_editeur();
        }
    } else {
        // On demande confirmation
        let sur = confirm("Vous aller quitter le mode edition, êtes vous sûr ?");
        if(sur){
            editeur = 0;
            //On lance le mode_normal
            mode_normal();
        }
    }
}

// Modification visuelle et ajout des fonctionnalité du mode éditeur
function mode_editeur(){

    // Modification visuelle sur le bouton d'entré du mode éditeur
    let button = document.getElementById("b_edit");
    button.style.backgroundColor = "green";
    button.style.color = "white";
    button.innerHTML = "Quitter le mode éditeur"; // qui devient quitté l'éditeur
    
    // Les noms des membres existant deviennent éditables
    let noms = document.getElementsByClassName("name");
    for (const nom of noms) {
        nom.setAttribute("contentEditable", true);
    }

    // Les cartes entières des membres ajoutés en mode édition sont modifiables
    let cartes = document.getElementsByClassName("newcarte");
    for (const carte of cartes) {
        carte.setAttribute("contentEditable", true);
    }

    // l'option suprimer des nouveaux membres devient visible et disponible
    let suprs = document.getElementsByClassName("supr");
    for (const supr of suprs) {
        supr.style.visibility = "visible";
    }

    // Puis le bouton ajouté membre apparait
    let add = document.getElementById("addmembre");
    add.style.visibility = "visible";
}

// Modification visuelle et retrait des fonctionnalité du mode éditeur
function mode_normal(){

    // Modification visuelle sur le bouton pour quitté le mode éditeur
    let button = document.getElementById("b_edit");
    button.style.backgroundColor = "grey";
    button.style.color = "black";
    button.innerHTML = "Mode Editeur";

    // Les noms des membres existant deviennent non éditables
    let noms = document.getElementsByClassName("name");
    for (const nom of noms) {
        nom.setAttribute("contentEditable", false);
    }

    // Les cartes entières des membres ajoutés en mode édition sont non modifiables
    let cartes = document.getElementsByClassName("newcarte");
    for (const carte of cartes) {
        carte.setAttribute("contentEditable", false);
    }

    // l'option suprimer des nouveaux membres devient visible et disponible
    let suprs = document.getElementsByClassName("supr");
    for (const supr of suprs) {
        supr.style.visibility = "hidden";
    }

    // On cache le bouton pour ajouter des membres
    let add = document.getElementById("addmembre");
    add.style.visibility = "hidden";
}

// Ajoute une carte sur le même modèle que les autre déjà présent et éditable
function addMembre(){
    let conteneur = document.getElementById("autre");
    let existe = conteneur.innerHTML;

    conteneur.innerHTML = existe + "<div class='newcarte' contentEditable='true'><div class='supr' onclick='suprime(this)' contentEditable='false'>X</div><div class='sombre'><p class='name' >Prénom</p><p>Information principale / lieu de travail</p><p>adresse email</p><hr><p>Autre information utile</p></div></div>";
}

// Suprime la carte elem de la fenêtre
function suprime(elem){
    let supr = elem.parentNode;
    supr.remove();
}

function addToModal(carte){
    let modal_content = document.getElementById("modal-content");
    modal_content.innerHTML = "<span class='supr' onclick='fermerModal(this.parentNode.parentNode)'>X</span><br>" + carte.innerHTML;
    modal_content.parentNode.style.display = "block";
}

function fermerModal(membre) {
    membre.style.display = "none";
}

main();