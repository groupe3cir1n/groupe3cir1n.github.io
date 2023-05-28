function main(){
    let image = document.getElementById("competences");
    image.addEventListener("click", agrandir);
}

function agrandir(){
    let image = document.getElementById("competences");
    if(image.getAttribute("width") == 567){
        image.setAttribute("width", 756);
        image.setAttribute("height", 472);
    } else {
        image.setAttribute("width", 567);
        image.setAttribute("height", 354);
    }
    
}

main();