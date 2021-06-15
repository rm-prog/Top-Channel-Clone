
// Drop the search bar when clicking the search button
// Close the search bar when clicking the button again

let searchBarDropped = false;

function searchBar() {

    const searchBarContainer = document.getElementById("search-bar-container");

    if (!searchBarDropped) {
        searchBarContainer.style.visibility = "visible";
        searchBarContainer.style.height = "50px";
        searchBarDropped = true;
    } else {
        searchBarContainer.style.visibility = "hidden";
        searchBarContainer.style.height = "0px";
        searchBarDropped = false;
    }
}