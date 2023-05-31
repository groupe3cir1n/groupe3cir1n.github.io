function changeImage1(){

    let img = document.getElementById('img1') ; //emplacement img1
    //console.log("canard");

    if( img.src.match('../DocsImgs/illu/globe-solid.png')){ //si c'est l'image de base
        img.src = '../DocsImgs/illu/Iot.png' ; //on change
        //console.log("poulpe");
    }
    else {
        img.src = '../DocsImgs/illu/globe-solid.png' ; //si clic et c'est pas l'image de base alors on la remet
        //console.log("octopus");
    }

}

function changeImage2(){

    let img = document.getElementById('img2') ; //emplacement img2
    //console.log("canard");

    if( img.src.match('../DocsImgs/illu/visemar.png')){ //si c'est l'image de base
        img.src = '../DocsImgs/illu/requin_baleine.jfif' ; //on change
        //console.log("poulpe");
    }
    else {
        img.src = '../DocsImgs/illu/visemar.png' ;  //si clic et c'est pas l'image de base alors on la remet
        //console.log("octopus");
    }

}

function changeImage3(){

    let img = document.getElementById('img3') ;//emplacement img3
    //console.log("canard");

    if( img.src.match('../DocsImgs/illu/seas.png')){ //si c'est l'image de base
        img.src = '../DocsImgs/illu/phoque.png' ; //on change
        //console.log("poulpe");
    }
    else {
        img.src = '../DocsImgs/illu/seas.png' ;  //si clic et c'est pas l'image de base alors on la remet
        //console.log("octopus");
    }

}

function changeImage4(){

    let img = document.getElementById('img4') ; //emplacement img4
    //console.log("canard");

    if( img.src.match('../DocsImgs/illu/hpec.png')){ //si c'est l'image de base
        img.src = '../DocsImgs/illu/octopus.png' ; //on change
        //console.log("poulpe");
    }
    else {
        img.src = '../DocsImgs/illu/hpec.png' ;  //si clic et c'est pas l'image de base alors on la remet
        //console.log("octopus");
    }

}

function main(){

    const button = document.querySelector('.btn'); //trouve le boutton

    //console.log("poulpe");

    button.addEventListener('click', () => { //si click

        console.log("click"); //click

        window.scrollTo(0, 0); //on remonte en haut

    })

}

main();