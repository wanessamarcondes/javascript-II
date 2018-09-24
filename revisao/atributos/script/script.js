const link = document.getElementById("externo");
const article = document.querySelector(".article");
const button = document.querySelector(".button");

console.log(link.attributes)

button.addEventListener("click", function(event){
    event.preventDefault();
    for(let i = 0; i < link.attributes.length; i++){
        let attribute = document.createElement("p");
        attribute.innerHTML = (`${link.attributes[i].name}: ${link.attributes[i].value}`);
        article.appendChild(attribute);
    }
})