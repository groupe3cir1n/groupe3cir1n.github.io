function get2DContext(id){

        let canvas = document.getElementById(id);
        let context = canvas.getContext("2d");
        return context;

}

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
    cache.addEventListener("hover", gratte);

}

function gratte(){
    let context = get2DContext("couverture");

}

function mouseCoords(ev){
    if(ev.pageX || ev.pageY){
            return {x:ev.pageX, y:ev.pageY};
    }
    return {
            x:ev.clientX + document.body.scrollLeft - document.body.clientLeft,
            y:ev.clientY + document.body.scrollTop  - document.body.clientTop
    };
}

function coordonnees(e,el) {
    var coords = mouseCoords(e);
    document.body.innerHTML += "<br />X: " + (coords.x - el.offsetLeft) + ", Y: " + (coords.y - el.offsetTop);
}

main();