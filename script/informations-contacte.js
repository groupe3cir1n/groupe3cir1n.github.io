function prenom_nom(){

    let res = false ;
    
    let name = document.getElementById("input_prenom").value;
    //console.log(name);

    let erreur = document.getElementById("txt_erreur1") ;

    let tab_name = name.split("");
    //console.log(tab_name);

    let n = tab_name.length ;
    //console.log(n);

    valid1 = 0 ; // Il n'y a pas de majuscule ( il en faut deux )
    valid2 = false ; //false si il n'y a pas de ' '

    for ( let i = 0 ; i < n ; i ++ ){

        if ( tab_name[i] == ' '){ //si expace
            valid2 = true ;  //condition 2 valider
        }

        else if ( tab_name[i] == tab_name[i].toUpperCase()){
            valid1 ++;
        }

    }

    if ( res == false ) {
        if (valid1 < 2 && valid2 == true){
            console.log("Il manque un mot ( prénom ou nom ) / ou des majuscules");
            erreur.innerHTML = "Il manque un mot ( prénom ou nom ) / ou des majuscules" ;
        }
        if (valid1 >= 2 && valid2 == true){
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
        erreur.innerHTML = "";
    }

    //console.log(res);
    return res ;

}

function adresse_mail(){

    let res = false ;
    
    let mail = document.getElementById("input_adresse").value;
    //console.log(mail);

    let erreur = document.getElementById("txt_erreur2") ;

    let tab_mail = mail.split("");
    //console.log(tab_mail);

    let n = tab_mail.length ;
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
    
    let area = document.getElementById("input_area").value;
    console.log(area);

    let erreur = document.getElementById("txt_erreur3") ;

    let tab_area = area.split("");
    console.log(tab_area);

    let n = tab_area.length ;
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

    if ( prenom_nom() == true ){
        if ( adresse_mail() == true ){
            if ( text_area() == true ) {
                console.log("Bravo");
                window.location.replace("/groupe3cir1n.github.io/html/jeu.html");
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