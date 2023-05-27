function main(){

    const button = document.querySelector('.btn');

    console.log("poulpe");

    button.addEventListener('click', () => {

        console.log("click");

        button.scrollTop({
            top:0,
            behavior : "smooth"
        })

    })

}

main();