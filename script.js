let itemContainer = document.getElementById("itemContainer");
let itemInputField = document.getElementById("inputField");
let addButton = document.getElementById("addButton");

addButton.addEventListener("click", function() {
    let paragraph = document.createElement("p");
    paragraph.innerText = itemInputField.value;
    itemInputField.value = "";
    itemContainer.appendChild(paragraph);

    paragraph.addEventListener("click", function() {
        paragraph.style.textDecoration = "line-through"
        itemContainer.appendChild(paragraph);
    })

   paragraph.addEventListener("dblclick", function(){
    itemContainer.removeChild(paragraph)
   })
})