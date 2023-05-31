function prenom_nom(){

    let res = false ;
    
    let name = document.getElementById("input_prenom").value; //Pour réccupérer la valeur entrer par l'utilisateur
    //console.log(name);

    let erreur = document.getElementById("txt_erreur1") ; //zone pour dire ou il y a une erreur

    let tab_name = name.split(""); // transforme le texte en tableau
    //console.log(tab_name);

    let n = tab_name.length ; //size
    //console.log(n);

    valid1 = 0 ; // Il n'y a pas de majuscule ( il en faut deux )
    valid2 = false ; //false si il n'y a pas de ' '

    for ( let i = 0 ; i < n ; i ++ ){

        if ( tab_name[i] == ' '){ //si expace
            valid2 = true ;  //true
        }

        else if ( tab_name[i] == tab_name[i].toUpperCase()){ //si majuscule
            valid1 ++; //condition à valider 2 fois
        }

    }

    if ( res == false ) {
        if (valid1 < 2 && valid2 == true){
            console.log("Il manque un mot ( prénom ou nom ) / ou des majuscules");
            erreur.innerHTML = "Il manque un mot ( prénom ou nom ) / ou des majuscules" ;
        }
        if (valid1 >= 2 && valid2 == false){
            console.log("Il manque un espace");
            erreur.innerHTML = "Il manque un espace" ;
        }
        if (valid1 < 2 && valid2 == false){
            console.log("Il manque un espace et un mot ( prénom ou nom ) / ou des majuscules");
            erreur.innerHTML = "Il manque un espace et un mot ( prénom ou nom ) / ou des majuscules" ;
        }
    }
    
    if ( valid1 >= 2 && valid2 == true ){
        res = true;
        erreur.innerHTML = " ";
    }

    //console.log(res);
    return res ;

}

function adresse_mail(){

    let res = false ;
    
    let mail = document.getElementById("input_adresse").value; //mail entrez par l'user
    //console.log(mail);

    let erreur = document.getElementById("txt_erreur2") ; //Texte si error

    let tab_mail = mail.split(""); //array
    //console.log(tab_mail);

    let n = tab_mail.length ; //size
    //console.log(n);

    valid1 = false ; // Il y a un @
    valid2 = false ; //false si il n'y a pas de point

    for ( let i = 0 ; i < n ; i ++ ){

        if ( tab_mail[i] == "@"){ //si @
            valid1 = true ;  //condition 1 valider
        }

        else if ( tab_mail[i] == '.'){ // si '.'
            valid2 = true ; //conditio, 2 valider
        }

    }

    if ( res == false ) {
        if (valid1 == false && valid2 == true){
            console.log("Il manque un @");
            erreur.innerHTML = "Il manque un @" ;
        }
        if (valid1 == true && valid2 == false){
            console.log("Il manque un point");
            erreur.innerHTML = "Il manque un point" ;
        }
        if (valid1 == false && valid2 == false){
            console.log("Il manque un @ et un .");
            erreur.innerHTML = "Il manque un @ et un ." ;
        }
    }
    
    if ( valid1 == true && valid2 == true ){
        res = true;
        erreur.innerHTML = " ";
    }

    //console.log(res);
    return res ;

}

function text_area(){

    let res = false ;
    
    let area = document.getElementById("input_area").value; //corp du mail
    console.log(area);

    let erreur = document.getElementById("txt_erreur3") ; //error

    let tab_area = area.split(""); //array
    console.log(tab_area);

    let n = tab_area.length ; //size
    console.log(n);

    if ( n < 20 ){
        console.log("Votre mail est trop court...");
        erreur.innerHTML = "Votre mail est trop court" ;
    } 
    else if ( n > 1000 ){
        console.log("Votre mail est trop long...");
        erreur.innerHTML = "Votre mail est trop long" ;
    }
    else {
        res = true ;
        erreur.innerHTML = " ";
    }

    console.log(res);
    return res;

}

function submit_form(){

    let correct = document.getElementById("correct") ; //correct

    let iframe = document.querySelector("iframe") ;

    if ( prenom_nom() == true ){ //si prénom / nom sans erreur
        if ( adresse_mail() == true ){ //si mail sans erreur
            if ( text_area() == true ) { //si mail pas trop court ni trop long
                console.log("Bravo"); //Bravo
                correct.innerHTML = "Bravo" ;
            }
            else{
                console.log("text area wrong");
            }
        }
        else{
            console.log("mail wrong");
        }
    }
    else {
        console.log("prenom wrong");
    }
}

function main(){

    var modal_type = document.getElementById("Modal_Type"); //réccupère la div du modal / zone
    var button = document.getElementById("button"); //texte clicable pour ouvrir modal
    var span = document.getElementsByClassName("close_lab")[0]; //pour fermer

    button.onclick = function() { //si clic sur le texte
        if(prenom_nom() && adresse_mail() && text_area()){
            modal_type.style.display = "block"; //ouverture
        }
    }

    span.onclick = function() { //si clic sur la croix
        modal_type.style.display = "none"; //fermeture
    }

    window.onclick = function(event) { //si on clic en dehors du modal il se ferme
        if (event.target == modal_type) {
            modal_type.style.display = "none";
        }
    }

}

main();