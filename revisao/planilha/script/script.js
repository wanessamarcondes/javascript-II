const button = document.querySelector(".feedback__button").addEventListener("click", function(event){
    event.preventDefault();

    const inputName = document.getElementById("feedbackInputName");
    const inputCity = document.getElementById("feedbackInputCity");
    const inputComment = document.getElementById("feedbackInputComment");

    if(inputName.value === null || inputName.value === undefined){
        alert("Por favor, insira sua resposta no campo vazio!");
        inputName.focus();
        return false;
    } else if(inputCity.value === null || inputCity.value === undefined){
        alert("Por favor, insira sua resposta no campo vazio!");
        inputCity.focus();
        return false;
    } else if(inputComment.value === null || inputComment.value === undefined){
        alert("Por favor, insira sua resposta no campo vazio!");
        inputComment.focus();
        return false;
    }

    const table = document.querySelector(".respostas__table");

    const row = document.createElement("tr");

    const columnName = document.createElement("td");
    const columnNameText = document.createTextNode(inputName.value);
    const columnCity = document.createElement("td");
    const columnCityText = document.createTextNode(inputCity.value);
    const columnComment = document.createElement("td");
    const columnCommentText = document.createTextNode(inputComment.value);

    columnName.appendChild(columnNameText);
    columnCity.appendChild(columnCityText);
    columnComment.appendChild(columnCommentText);

    row.appendChild(columnName);
    row.appendChild(columnCity);
    row.appendChild(columnComment);

    table.appendChild(row);

    inputName.value = "";
    inputCity.value = "";
    inputComment.value = "";
})