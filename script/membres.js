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
    context.clearRect(e.clientX-284, e.pageY-368, 10, 10);
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
}

function mode_normal(){
    let button = document.getElementById("b_edit");
    button.style.backgroundColor = "grey";
    button.style.color = "black";
    button.innerHTML = "Mode Editeur";
}

main();