
const dropdownListsContainer = document.getElementById("dropdown-lists-container");
let listDroppedDown = false;
const headerDiv = document.getElementById("header");

function dropdownList() {
    
    if (!listDroppedDown) {
        dropdownListsContainer.style.display = "block";
        listDroppedDown = true;
        headerDiv.style.height = "auto";
    } else {
        dropdownListsContainer.style.display = "none";
        listDroppedDown = false;
        headerDiv.style.height = "61px";
    }
}
