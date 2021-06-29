document.getElementById("addform").addEventListener("submit", function (e) {
    e.preventDefault();
    var title = document.getElementById("title").value;
    var desc = document.getElementById("desc").value;
    var div = document.createElement("div");
    var titleSpan = document.createElement("span");
    var descSpan = document.createElement("span");
    var deleteSpan = document.createElement("span");

    document.getElementById("addform").reset();
    titleSpan.textContent = title;

    div.appendChild(titleSpan);
    titleSpan.setAttribute("class", "title");

    descSpan.textContent = " - " + desc;
    div.appendChild(descSpan);

    descSpan.setAttribute("class", "desc");
    deleteSpan.textContent = "DELETE";
    div.appendChild(deleteSpan);
    
    deleteSpan.setAttribute("class", "delete");
    document.getElementById("list").appendChild(div);
    deleteSpan.addEventListener("click", function(e){
        div.remove();
    })
} )