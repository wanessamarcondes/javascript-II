const text = document.querySelector(".article");
const buttonZoomIn = document.querySelector(".zoom-in__button");
const buttonZoomOut = document.querySelector(".zoom-out__button");

function resizeText(multiplier){
    if(document.body.style.fontSize === ""){
        document.body.style.fontSize = "1em"
    }
}