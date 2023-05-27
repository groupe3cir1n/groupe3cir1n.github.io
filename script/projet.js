function changeImage1(){

    if(document.getElementById('img1').value=="../DocsImgs/illu/globe-solid.png"){
        img.src=="../DocsImgs/illu/Iot.png";
    }
    else if(docuemtn.getElementById('img1').value=="../DocsImgs/illu/Iot.png"){
        img.src=="../DocsImgs/illu/globe-solid.png";
    }

}	

function changeImage2(){

    if(document.getElementById('img2').value=="../DocsImgs/illu/visemar.png"){
        img.src=="mouton22.png";
    }
    else if(docuemtn.getElementById('img2').value=="mouton22.png"){
        img.src=="../DocsImgs/illu/visemar.png";
    }

}	

function changeImage3(){

    if(document.getElementById('img3').value=="../DocsImgs/illu/seas.png"){
        img.src=="mouton22.png";
    }
    else if(docuemtn.getElementById('img3').value=="mouton22.png"){
        img.src=="../DocsImgs/illu/seas.png";
    }

}	

function changeImage4(){

    if(document.getElementById('img4').value=="../DocsImgs/illu/hpec.png"){
        img.src=="mouton22.png";
    }
    else if(docuemtn.getElementById('img4').value=="mouton22.png"){
        img.src=="../DocsImgs/illu/hpec.png";
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