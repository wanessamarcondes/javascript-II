const inputArea = document.getElementById("selectInputArea");
const button = document.querySelector(".select__button");

button.addEventListener("click", function(event){
    event.preventDefault();
    inputArea[inputArea.selectedIndex].remove();
})