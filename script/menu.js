function main(){
    let startdate = 0;
    affiche_heure(startdate);
}

function affiche_heure(startdate){
    let horloge = document.getElementById("heure");
    let chrono = document.getElementById("chrono");

    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    let chrono_s = Math.floor(startdate % 60);
    let chrono_m = Math.floor((startdate / 60) % 60);
    let chrono_h = Math.floor((startdate / 3600));
    startdate += 1;

    if(hours < 10){
        hours = "0" + hours;
    }
    if(minutes < 10){
        minutes = "0" + minutes;
    }
    if(seconds < 10){
        seconds = "0" + seconds;
    }
    if(chrono_h < 10){
        chrono_h = "0" + chrono_h;
    }
    if(chrono_m < 10){
        chrono_m = "0" + chrono_m;
    }
    if(chrono_s < 10){
        chrono_s = "0" + chrono_s;
    }

    horloge.innerHTML = hours + ":" + minutes + ":" + seconds;
    chrono.innerHTML = chrono_h + ":" + chrono_m + ":" + chrono_s;
    setTimeout(affiche_heure, 1000, startdate);
}

function loading(link){
    /*if(link = "html/Membres.html" || link == "Membres.html"){
        let ilestsur = confirm("Tu es vraiment sur d'aller sur la page de membre");

        if(!ilestsur){

        }
    }*/
    document.body.style.cursor = "wait";
    setTimeout(function() {
        document.body.style.cursor = "auto";
        window.location.href = link;
    }, 2000);
}

main();