
let listDroppedDown = false;

function dropdownList() {

    const dropdownListsContainer = document.getElementById("dropdown-lists-container");
    const topMenu = document.getElementById("top-menu");

    if (!listDroppedDown) {
        dropdownListsContainer.style.display = "grid";
        listDroppedDown = true;
        topMenu.style.display = "none";
    } else {
        dropdownListsContainer.style.display = "none";
        listDroppedDown = false;
        topMenu.style.display = "inline-grid";
    }
}
