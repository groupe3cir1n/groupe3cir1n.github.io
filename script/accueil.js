function main(){
    let image = document.getElementById("competences");
    image.addEventListener("click", agrandir);

    document.getElementById("qui").animate([
        // étapes / keyframes
        
        { transform: 'translateX(0px)' },
        { transform: 'translateX(200px)' },
        { transform: 'translateX(0px)' }
      ], {
        // temporisation
        duration: 3000,
        iterations: Infinity
      });
    
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

main();