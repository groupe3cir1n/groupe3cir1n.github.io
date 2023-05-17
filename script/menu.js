function main(){
    
}

function affiche_heure(){
    let horloge = document.getElementById("heure");
}

function footer(numero){

    let num = prompt("Si vous voulez appeler ce numéro : " + numero + " entrez le de nouveau dans le champs ci-dessous puis validez.", "+33");
    if (num == numero) {
      console.log("Vous appelez ce numéro : " + num + " !");
    }

}

main();