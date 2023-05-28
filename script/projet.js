function changeImage1(){

    let img = document.getElementById('img1') ;
    //console.log("canard");

    if( img.src.match('../DocsImgs/illu/globe-solid.png')){
        img.src = '../DocsImgs/illu/Iot.png' ;
        //console.log("poulpe");
    }
    else {
        img.src = '../DocsImgs/illu/globe-solid.png' ;
        //console.log("octopus");
    }

}

function changeImage2(){

    let img = document.getElementById('img2') ;
    //console.log("canard");

    if( img.src.match('../DocsImgs/illu/visemar.png')){
        img.src = '../DocsImgs/illu/requin_baleine.jfif' ;
        //console.log("poulpe");
    }
    else {
        img.src = '../DocsImgs/illu/visemar.png' ;
        //console.log("octopus");
    }

}

function changeImage3(){

    let img = document.getElementById('img3') ;
    //console.log("canard");

    if( img.src.match('../DocsImgs/illu/seas.png')){
        img.src = '../DocsImgs/illu/phoque.png' ;
        //console.log("poulpe");
    }
    else {
        img.src = '../DocsImgs/illu/seas.png' ;
        //console.log("octopus");
    }

}

function changeImage4(){

    let img = document.getElementById('img4') ;
    //console.log("canard");

    if( img.src.match('../DocsImgs/illu/hpec.png')){
        img.src = '../DocsImgs/illu/octopus.png' ;
        //console.log("poulpe");
    }
    else {
        img.src = '../DocsImgs/illu/hpec.png' ;
        //console.log("octopus");
    }

}

function main(){

    const button = document.querySelector('.btn');

    console.log("poulpe");

    button.addEventListener('click', () => {

        console.log("click");

        window.scrollTo(0, 0);

    })

}

main();