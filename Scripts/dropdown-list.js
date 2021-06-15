
let listDroppedDown = false;
const screenWidth = window.screen.availWidth;

function dropdownList() {

    // Drop the list when hamburger button is clicked
    // Close the list when button is clicked again

    const dropdownListsContainer = document.getElementById("dropdown-lists-container");
    const topMenu = document.getElementById("top-menu");

    if (!listDroppedDown) {
        dropdownListsContainer.style.visibility = "visible";
        // Set the height of dropdown list, depending on the width of the screen
        // To make website mobile-friendly
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
