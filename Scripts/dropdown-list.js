
let listDroppedDown = false;
const screenWidth = window.screen.availWidth;

function dropdownList() {

    const dropdownListsContainer = document.getElementById("dropdown-lists-container");
    const topMenu = document.getElementById("top-menu");

    if (!listDroppedDown) {
        dropdownListsContainer.style.visibility = "visible";
        dropdownListsContainer.style.height = screenWidth <= 768 ? "250px" : "158px";
        listDroppedDown = true;
        topMenu.style.visibility = "hidden";
    } else {
        dropdownListsContainer.style.visibility = "hidden";
        dropdownListsContainer.style.height = "0px";
        listDroppedDown = false;
        topMenu.style.visibility = "visible";
    }
}
