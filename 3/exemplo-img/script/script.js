const links = document.querySelector(".gallery__nav");
const imagem = document.querySelector(".gallery__image");

// console.log(links.length)
// console.log(links.children)

for(let i = 0; i < links.children.length; i++){
    const fio = links.children[i];
    fio.addEventListener("click", function(){
        //pegar o caminho da img no atributo data-image
        const img = this.dataset.image;
        console.log(img);
        //colocar essa informação onde eu preciso dela, no caso no source
        imagem.src = img;

        

    })
}
