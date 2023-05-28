function main(){

    //Lab
    var modal_lab = document.getElementById("Modal_Lab");
    var lab = document.getElementById("lab");
    var span = document.getElementsByClassName("close_lab")[0];

    lab.onclick = function() {
        modal_lab.style.display = "block";
    }

    span.onclick = function() {
        modal_lab.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal_lab) {
            modal_lab.style.display = "none";
        }
    }

    //Hybr
    var modal_hybr = document.getElementById("Modal_Hybr");
    var hybr = document.getElementById("hybr");
    var span = document.getElementsByClassName("close_hybr")[0];

    hybr.onclick = function() {
        modal_hybr.style.display = "block";
    }

    span.onclick = function() {
        modal_hybr.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal_hybr) {
            modal_hybr.style.display = "none";
        }
    }

}

main();