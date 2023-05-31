function main(){

    //Lab
    var modal_lab = document.getElementById("Modal_Lab"); //réccupère la div du modal / zone
    var lab = document.getElementById("lab"); //texte clicable pour ouvrir modal
    var span = document.getElementsByClassName("close_lab")[0]; //pour fermer

    lab.onclick = function() { //si clic sur le texte
        modal_lab.style.display = "block"; //ouverture
    }

    span.onclick = function() { //si clic sur la croix
        modal_lab.style.display = "none"; //fermeture
    }

    window.onclick = function(event) { //si on clic en dehors du modal il se ferme
        if (event.target == modal_lab) {
            modal_lab.style.display = "none";
        }
    }

    //Hybr
    var modal_hybr = document.getElementById("Modal_Hybr"); //réccupère la div du modal / zone
    var hybr = document.getElementById("hybr"); //texte clicable pour ouvrir modal
    var span = document.getElementsByClassName("close_hybr")[0];//pour fermer

    hybr.onclick = function() { //si clic sur le texte
        modal_hybr.style.display = "block"; //ouverture
    }

    span.onclick = function() { //si clic sur la croix
        modal_hybr.style.display = "none"; //fermeture
    }

    window.onclick = function(event) { //si on clic en dehors du modal il se ferme
        if (event.target == modal_hybr) {
            modal_hybr.style.display = "none";
        }
    }

}

main();