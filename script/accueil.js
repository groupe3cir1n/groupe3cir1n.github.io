function main(){
    let image = document.getElementById("competences");
    image.addEventListener("click", agrandir);
    
    let titre = document.getElementById("qui");
    
    titre.innerHTML = "";
    setTimeout(affichetext, 1000, "Qui somme nous ?");
    
}

function agrandir(){
    let image = document.getElementById("competences");
    if(image.getAttribute("width") == 567){
        image.setAttribute("width", 907);
        image.setAttribute("height", 566);
    } else {
        image.setAttribute("width", 567);
        image.setAttribute("height", 354);
    }
    
}

function affichetext(text){
    let remplir = document.getElementById("qui").innerHTML;
    let ajouter = "";
    if(text != remplir){
        if(remplir == ""){
            document.getElementById("qui").innerHTML = remplir + "Qui ";
        } else if(remplir == "Qui "){
            document.getElementById("qui").innerHTML = remplir + "somme ";
        } else {
            document.getElementById("qui").innerHTML = remplir + "nous ?";
        }
        setTimeout(affichetext, 1000, text);
    } else {
        animation();
    }
}

function animation(){

    let titre = document.getElementById("qui");

    titre.animate([
        // étapes / keyframes
        { transform: 'translateX(0px)' },
        { transform: 'translateX(200px)' },
        { transform: 'translateX(0px)' },
        { transform: 'translateX(-200px)' },
        { transform: 'translateX(0px)' },
      ], {
        // temporisation
        duration: 3000,
        iterations: 1
      });
    
    setTimeout(reinitialise, 3000);
}

function reinitialise(){
    document.getElementById("qui").innerHTML = "";
    setTimeout(affichetext, 1000, "Qui somme nous ?");
}

main();