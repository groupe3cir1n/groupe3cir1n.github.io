var editeur = 0;

function main(){

    // création d'un cercle gris sur le potrait déjà présent
    let context = get2DContext("couverture");
    context.beginPath();
    context.strokeStyle = "grey";
    context.arc(100, 100, 80, 0, 2 * Math.PI, true);
    context.fillStyle = "grey";
    context.fill();
    context.stroke();
    context.closePath();

    let cache = document.getElementById("couverture");
    cache.addEventListener("mousemove", gratte);

}

function get2DContext(id){

    let canvas = document.getElementById(id);
    let context = canvas.getContext("2d");
    return context;

}

function gratte(e){
    let context = get2DContext("couverture");
    let canvas = document.getElementById("couverture"); // utilisé avec offsetLeft et offsetTop pour déterminer les positions de l'image
    context.clearRect(e.clientX-canvas.offsetLeft-5, e.pageY-canvas.offsetTop-5, 10, 10); // clearRect efface une partie du canvas et e.pageY récupère la position de la souris
}

function editor(){  

    if(editeur == 0){
        let pseudo = prompt("Votre nom de profil :");
        let pwd = "";
        if(pseudo == "admin"){
            pwd = prompt("entrer votre mot de passe :");
        }
        if(pwd == "admin_pwd"){
            editeur = 1
            mode_editeur();
        }
    } else {
        let sur = confirm("Vous aller quitter le mode edition, êtes vous sûr ?");
        if(sur){
            editeur = 0;
            mode_normal();
        }
    }
}

function mode_editeur(){
    let button = document.getElementById("b_edit");
    button.style.backgroundColor = "green";
    button.style.color = "white";
    button.innerHTML = "Quitter le mode éditeur";
    
    let noms = document.getElementsByClassName("name");
    for (const nom of noms) {
        nom.setAttribute("contentEditable", true);
    }
    let cartes = document.getElementsByClassName("newcarte");
    for (const carte of cartes) {
        carte.setAttribute("contentEditable", true);
    }
    let suprs = document.getElementsByClassName("supr");
    for (const supr of suprs) {
        supr.style.visibility = "visible";
    }

    let add = document.getElementById("addmembre");
    add.style.visibility = "visible";
}

function mode_normal(){
    let button = document.getElementById("b_edit");
    button.style.backgroundColor = "grey";
    button.style.color = "black";
    button.innerHTML = "Mode Editeur";

    let noms = document.getElementsByClassName("name");
    for (const nom of noms) {
        nom.setAttribute("contentEditable", false);
    }
    let cartes = document.getElementsByClassName("newcarte");
    for (const carte of cartes) {
        carte.setAttribute("contentEditable", false);
    }
    let suprs = document.getElementsByClassName("supr");
    for (const supr of suprs) {
        supr.style.visibility = "hidden";
    }

    let add = document.getElementById("addmembre");
    add.style.visibility = "hidden";
}

function addMembre(){
    let conteneur = document.getElementById("autre");
    let existe = conteneur.innerHTML;

    conteneur.innerHTML = existe + "<div class='newcarte' contentEditable='true'><div class='supr' onclick='suprime(this)' contentEditable='false'>X</div><div class='sombre'><p class='name' >Prénom</p><p>Information principale / lieu de travail</p><p>adresse email</p><hr><p>Autre information utile</p></div></div>";
}

function suprime(elem){
    let supr = elem.parentNode;
    supr.remove();
}

main();