function prenom(){

    let res = false ; //Valide ou pas
    let value = document.getElementById("input_prenom").innerText ; //Pour réccupérer ce qu'il y a décrit

    console.log("octopus");
    console.log(value);

    let erreur = document.getElementById("txt_erreur1") ; //Pour réccupérer l'endroit pour mettre un texte s'il y a une erreur d'entrée
    //condition : si il y a un espace et 2 majuscules
    let valid1 = false ; //il y a un " "
    let valid2 = 0 ; //il y a 2 majuscules ou pluche pour faire des mots

    let y = value.split(""); //pour transformer une chaine de caractère en tableau
    let n = value.length ; //size

    for ( let i = 0 ; i < n ; i ++ ){ //boucle pour visiter le tableau

        if(y[i] == " "){ //si il y a un " "
            valid1 = true ; //condition 1 valider
        }

        if(y[i] == y[i].toUpperCase() ){ //si majuscule
            valid2 ++ ; //condition 2 valider 1 fois
        }

    }

    if ( valid1 == true && valid2 >= 2 ){ //si les deux conditions sont valider
        res = true ; //alors le mail est correcte
    }

    if ( res == false ) { //Si erreur
        if (valid1 == true && valid2 < 2){
            console.log("Il manque un mot ( prénom ou nom )");
            erreur.innerHTML = "Il manque un mot ( prénom ou nom )" ;
        }
        if (valid1 == false && valid2 >= 2){
            console.log("Il manque un espace");
            erreur.innerHTML = "Il manque un espace" ;
        }
        if (valid1 == false && valid == false){
            console.log("Il manque un espace et un mot ( prénom ou nom )");
            erreur.innerHTML = "Il manque un espace et un mot ( prénom ou nom )" ;
        }
    } 

    return res ; //si true valide la condition shinon non

}

function mail(){

    let res = false ;
    let valid1 = false; //s'il y a @
    let valid2 = false; //s'il y a .
    let value = document.getElementById("input_adresse") ; //Pour réccupérer ce qu'il y a décrit
    let erreur = document.getElementById("txt_erreur2") ; //Pour réccupérer l'endroit pour mettre un texte s'il y a une erreur d'entrée

    let y = value.split(); //pour transformer une chaine de caractère en tableau
    let n = value.length ; //size

    for ( let i = 0 ; i < n ; i ++ ){ //boucle pour visiter le tableau

        if(y[i] == "@"){ //si il y a un @
            valid1 = true ; //condition 1 valider
        }

        if(y[i] =="."){ //si il y a .
            valid2 = true ; //condition 2 valider
        }

    }

    if ( valid1 == true && valid2 == true ){ //si les deux conditions sont valider
        res = true ; //alors le mail est correcte
    }

    if ( res == false ) { //Si erreur
        if (valid1 == true && valid2 == false){
            console.log("Il manque un point");
            erreur.innerHTML = "Il manque un point" ;
        }
        if (valid1 == false && valid2 == true){
            console.log("Il manque un @");
            erreur.innerHTML = "Il manque un @" ;
        }
        if (valid1 == false && valid == false){
            console.log("Il manque un @ et un .");
            erreur.innerHTML = "Il manque un @ et un ." ;
        }
    } 

    return res ; //si true valide la condition shinon non

}

function txtarea (){

    let res = false ;
    let value = document.getElementById("input_area") ;
    let erreur = document.getElementById("txt_erreur3") ; //Pour réccupérer l'endroit pour mettre un texte s'il y a une erreur d'entrée
    let size = value.length ;

    if (size > 1000 ){
        console.log("Votre mail est trop long...");
        erreur.innerHTML = "Votre mail est trop long" ;
    }
    if ( size < 20 ){
        console.log("Votre mail est trop court...");
        erreur.innerHTML = "Votre mail est trop court" ;
    }
    else {
        res = true ; //Bonne taille
        
    }

    return res ; //si true valide la condition shinon non

}

function submit (){

    let button = document.getElementById("button");
    console.log("poulpe");

    let i = 0;

    while(i == 0 ){
        console.log("prout");
        if (prenom() == true){
            if (mail() == true){
                if (txtarea () == true){
                    button.setAttribute("disabled", false) ; //On peut appuyer sur envoyer
                    //jeu() ;//lance le jeu ausshi
                }else{
                    console.log("text area wrong");
                }
            }
            else{
                console.log("mail wrong");
            }
        }
        else{
            console.log("prenom wrong");
        }
    }
}

/*function jeu () {



}*/

submit();