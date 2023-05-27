function changeImage1(){

    let img = document.getElementById('#img1').src ;
    console.log("canard");

    if( img == "../DocsImgs/illu/globe-solid.png" ){
        img = "../DocsImgs/illu/Iot.png";
        console.log("poulpe");
    }
    else if( img == "../DocsImgs/illu/Iot.png" ){
        img = "../DocsImgs/illu/globe-solid.png";
        console.log("octopus");
    }

}	

function changeImage2(){

    let img = document.getElementById('#img2').src ;
    console.log("canard");

    if( img == "../DocsImgs/illu/visemar.png" ){
        img = "../DocsImgs/illu/requin_baleine.jfif";
        console.log("poulpe");
    }
    else if( img == "../DocsImgs/illu/requin_balein.jfif" ){
        img = "../DocsImgs/illu/visemar.png";
        console.log("octopus");
    }

}	

function changeImage3(){

    let img = document.getElementById('#img3').src ;
    console.log("canard");

    if( img == "../DocsImgs/illu/seas.png" ){
        img = "../DocsImgs/illu/phoque.png";
        console.log("poulpe");
    }
    else if( img == "../DocsImgs/illu/phoque.png" ){
        img = "../DocsImgs/illu/seas.png";
        console.log("octopus");
    }

}	

function changeImage4(){

    let img = document.getElementById('#img4').src ;
    console.log("canard");

    if( img == "../DocsImgs/illu/hpec.png" ){
        img = "../DocsImgs/illu/octopus.png";
        console.log("poulpe");
    }
    else if( img == "../DocsImgs/illu/octopus.png" ){
        img = "../DocsImgs/illu/hpec.png";
        console.log("octopus");
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