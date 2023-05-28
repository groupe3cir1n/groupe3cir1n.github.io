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
    cache.addEventListener("mousemove", gratte);

}

function get2DContext(id){

    let canvas = document.getElementById(id);
    let context = canvas.getContext("2d");
    return context;

}

function gratte(e){
    let context = get2DContext("couverture");
    context.clearRect(e.clientX-284, e.pageY-368, 10, 10);
}

main();