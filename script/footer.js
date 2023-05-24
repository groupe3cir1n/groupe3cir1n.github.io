function footer(numero){ //function qui se lance dans copy un numéro

    let num = prompt("Si vous voulez appeler ce numéro : " + numero + " entrez le de nouveau dans le champs ci-dessous puis validez.", "+33..."); //fenêtre prompt qui demande le numéro
    if (num == numero) { //Si l'utilisateur à bien entrer le numéro
      console.log("Vous appelez ce numéro : " + num + " !"); //Message dans la console
      music();
    }

}

function music(){

  const myAudio = document.createElement('audio');
  myAudio.src = "https://youtu.be/JPZ-QyVBOf8";

  myAudio.play();

}