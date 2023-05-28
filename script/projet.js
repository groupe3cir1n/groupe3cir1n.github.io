function changeImage1(){

    let img = document.getElementById('img1') ;
    console.log("canard");
    console.log(img);

    if( img.src.match('http://127.0.0.1:5500/groupe3cir1n.github.io/DocsImgs/illu/globe-solid.png')){
        img.src = 'http://127.0.0.1:5500/groupe3cir1n.github.io/DocsImgs/illu/Iot.png' ;
    }
    else {
        img.src = 'http://127.0.0.1:5500/groupe3cir1n.github.io/DocsImgs/illu/globe-solid.png' ;
    }

}

/*function changeImage1(){

    let img = document.getElementById('img1').src ;
    console.log("canard");
    console.log(img);

    if( img == "http://127.0.0.1:5500/groupe3cir1n.github.io/DocsImgs/illu/globe-solid.png" ){
        img = "http://127.0.0.1:5500/groupe3cir1n.github.io/DocsImgs/illu/Iot.png";
        console.log("poulpe");
        console.log(img);
    }
    else { if( img == "http://127.0.0.1:5500/groupe3cir1n.github.io/DocsImgs/illu/Iot.png" ){
        img = "http://127.0.0.1:5500/groupe3cir1n.github.io/DocsImgs/illu/globe-solid.png";
        console.log("octopus");
        console.log(img);
    }}

}	*/

function changeImage2(){

    let img = document.getElementById('img2').src ;
    console.log("canard");
    console.log(img);

    if( img == "http://127.0.0.1:5500/groupe3cir1n.github.io/DocsImgs/illu/visemar.png" ){
        img = "http://127.0.0.1:5500/groupe3cir1n.github.io/DocsImgs/illu/requin_baleine.jfif";
        console.log("poulpe");
        console.log(img);
    }
    else {if( img == "http://127.0.0.1:5500/groupe3cir1n.github.io/DocsImgs/illu/requin_balein.jfif" ){
        img = "http://127.0.0.1:5500/groupe3cir1n.github.io/DocsImgs/illu/visemar.png";
        console.log("octopus");
        console.log(img);
    }}

}	

function changeImage3(){

    let img = document.getElementById('img3').src ;
    console.log("canard");
    console.log(img);

    if( img == "http://127.0.0.1:5500/groupe3cir1n.github.io/DocsImgs/illu/seas.png" ){
        img = "http://127.0.0.1:5500/groupe3cir1n.github.io/DocsImgs/illu/phoque.png";
        console.log("poulpe");
        console.log(img);
    }
    else {if( img == "http://127.0.0.1:5500/groupe3cir1n.github.io/DocsImgs/illu/phoque.png" ){
        img = "http://127.0.0.1:5500/groupe3cir1n.github.io/DocsImgs/illu/seas.png";
        console.log("octopus");
        console.log(img);
    }}

}	

function changeImage4(){

    let img = document.getElementById('img4').src ;
    console.log("canard");
    console.log(img);

    if( img == "http://127.0.0.1:5500/groupe3cir1n.github.io/DocsImgs/illu/hpec.png" ){
        img = "http://127.0.0.1:5500/groupe3cir1n.github.io/DocsImgs/illu/octopus.png";
        console.log("poulpe");
        console.log(img);
    }
    else {if( img == "http://127.0.0.1:5500/groupe3cir1n.github.io/DocsImgs/illu/octopus.png" ){
        img = "http://127.0.0.1:5500/groupe3cir1n.github.io/DocsImgs/illu/hpec.png";
        console.log("octopus");
        console.log(img);
    }}

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