function footer(numero){ //function qui se lance dans copy un numéro

    let num = prompt("Si vous voulez appeler ce numéro : " + numero + " entrez le de nouveau dans le champs ci-dessous puis validez.", "+33..."); //fenêtre prompt qui demande le numéro
    if (num == numero) { //Si l'utilisateur à bien entrer le numéro
      console.log("Vous appelez ce numéro : " + num + " !"); //Message dans la console
      music();
    }

}

function music(){

  var sound = new Howl({
    src: ['https://youtu.be/JPZ-QyVBOf8'],
    volume: 1.0,
    onend: function () {
      alert('We finished with the setup!');
    }
  });
  sound.play()

}