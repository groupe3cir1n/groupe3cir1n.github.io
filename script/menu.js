function main(){
    let startdate = 0; // lancement du chrono
    affiche_heure(startdate);
}

// Met à jour l'heure ainsi que le chrono, rappel cette fonction toute les secondes
function affiche_heure(startdate){

    let horloge = document.getElementById("heure");
    let chrono = document.getElementById("chrono");

    // Pour l'horloge
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    // Pour le chronomètre
    let chrono_s = Math.floor(startdate % 60);
    let chrono_m = Math.floor((startdate / 60) % 60);
    let chrono_h = Math.floor((startdate / 3600));
    startdate += 1;// met a jour le nouveau temps du chronomètre

    // Permet d'afficher 01, 02, 03 au lieu de 1 2 3.
    if(hours < 10){ // Vérification qu'il n'y est qu'un seul chiffre
        hours = "0" + hours; // on rajoute alors un 0, devant
    }
    if(minutes < 10){
        minutes = "0" + minutes;
    }
    if(seconds < 10){
        seconds = "0" + seconds;
    }
    if(chrono_h < 10){
        chrono_h = "0" + chrono_h;
    }
    if(chrono_m < 10){
        chrono_m = "0" + chrono_m;
    }
    if(chrono_s < 10){
        chrono_s = "0" + chrono_s;
    }

    // Affichage des deux chronomètre
    horloge.innerHTML = hours + ":" + minutes + ":" + seconds;
    chrono.innerHTML = chrono_h + ":" + chrono_m + ":" + chrono_s;

    // Rappel de la fonction
    setTimeout(affiche_heure, 1000, startdate);
}

// Permet d'avoir une l'attence de deux seconde entre chaque page ainsi que de changer la couleur des boutons au click
function loading(link, box){

    // Tout d'abord le changement de couleur en fond

    // Pour modifier le fond du logo de l'isen (qui était une image) on importe une autre image avec le fond modifier
    if(box == document.getElementById("accueil")){
        box.style.backgroundImage = "url(../DocsImgs/LabISEN_click.png)";
    } 
    // Sinon pour tout les autres, on modifie la valeur CSS du fond ainsi que des svg
    else {
        box.style.backgroundColor = "#AAAAAA";
        box.style.color = "#000000";
        if(box.children[0]){ // si y a un svg (les sous menu n'en possède pas)
            let svg = box.children[0];
            svg.style.fill = "#FFFFFF"; /* très étrange d'appliquer du blanc... mais cela met les svg en noir*/
        }
        console.log("Couleur fond avant : #5856c9 \nCouleur fond maintenant : #AAAAAA\nCouleur texte avant : #FFFFFF\nCouleur texte maintenant : #000000");
    }

    //Pour la particularité de la page membre qui demande une vérif
    if(link == "html/Membres.html" || link == "Membres.html"){
        let ilestsur = confirm("Tu es vraiment sur d'aller sur la page de membre"); // on demande confirmation
        if(!ilestsur){ // en fonction de le réponse on remet les couleurs initial du bouton
            box.style.backgroundColor = "#5856c9";
            box.style.color = "#FFFFFF";
            box.children[0].style.fill = "#000000";
            return; // on arrête ici la fonction pour le pas changer le lien de la page
        }
    }

    //le changement de page
    document.body.style.cursor = "wait"; // Changement du curseur en chargement
    setTimeout(function() { // décallage de deux seconde
        document.body.style.cursor = "auto";
        window.location.href = link; // changement de page
    }, 2000);
}

main();