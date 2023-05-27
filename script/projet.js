function main(){

    let button = document.querySelector(".btn");

    button.addEventListener('click', () => {

        Window.scrollTo({
            top : 0,
            left : 0,
            behavior : "smooth"
        })
    
    })

}

main();