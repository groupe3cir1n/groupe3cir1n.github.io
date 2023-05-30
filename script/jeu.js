function type(){

    let unknown = document.getElementById("Unknown");
    console.log(unknown);

    let type = document.getElementById("input_type").value;
    console.log(type);

    /*if ( unknown.src == "../DocsImgs/jeu/Type_Acier.png" ){
        if ( type == "Combat"){
            console.log("Bravo");
        }
        if ( type == "Feu"){
            console.log("Bravo");
        }
        if ( type == "Sol"){
            console.log("Bravo");
        }
    }
    if ( unknown.src == "../DocsImgs/jeu/Type_Dragon.png" ){
        if ( type == "Fee"){
            console.log("Bravo");
        }
        if ( type == "Fée"){
            console.log("Bravo");
        }
        if ( type == "Dragon"){
            console.log("Bravo");
        }
        if ( type == "Glace"){
            console.log("Bravo");
        }
    }*/

}

function affichage_type(){

    let type_number = Math.floor(Math.random() * (17 + 1));
    let unknown = document.getElementById("Unknown");

    switch (type_number){

        case 0 :
            unknown.src = "../DocsImgs/jeu/Type_Acier.png";
            break;

        case 1 :
            unknown.src = "../DocsImgs/jeu/Type_Dragon.png";
            break;
        
        case 2 :
            unknown.src = "../DocsImgs/jeu/Type_Electrik.png";
            break;

        case 3 :
            unknown.src = "../DocsImgs/jeu/Type_Feu.png";
            break;

        case 4 :
            unknown.src = "../DocsImgs/jeu/Type_Insecte.png";
            break;
        
        case 5 :
            unknown.src = "../DocsImgs/jeu/Type_Plante.png";
            break;
    
        case 6 :
            unknown.src = "../DocsImgs/jeu/Type_Psy.png";
            break;

        case 7 :
            unknown.src = "../DocsImgs/jeu/Type_Sol.png";
            break;
        
        case 8 :
            unknown.src = "../DocsImgs/jeu/Type_Tenebres.png";
            break;

        case 9 :
            unknown.src = "../DocsImgs/jeu/Type_Combat.png";
            break;

        case 10 :
            unknown.src = "../DocsImgs/jeu/Type_Eau.png";
            break;
        
        case 11 :
            unknown.src = "../DocsImgs/jeu/Type_Fee.png";
            break;

        case 12 :
            unknown.src = "../DocsImgs/jeu/Type_Glace.png";
            break;

        case 13 :
            unknown.src = "../DocsImgs/jeu/Type_Normal.png";
            break;
        
        case 14 :
            unknown.src = "../DocsImgs/jeu/Type_Poison.png";
            break;

        case 15 :
            unknown.src = "../DocsImgs/jeu/Type_Roche.png";
            break;

        case 16 :
            unknown.src = "../DocsImgs/jeu/Type_Spectre.png";
            break;
        
        case 17 :
            unknown.src = "../DocsImgs/jeu/Type_Vol.png";
            break;
    }

}