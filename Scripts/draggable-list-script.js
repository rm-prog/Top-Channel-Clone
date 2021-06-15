
let newsIndex = 0;
let newsImagesInterval;

let imageSize;


// !!!!!!!!!!!!!! On load function !!!!!!!!!!!!!!!
// Depending on the size of the screen, set the size of the slides
$(function () {
    $(".dots li button").first().css(
        {
            background: "white"
        }
    );
    
    imageSize = screen.width <= 768 ? 300 : 580;

    // Start slider interval
    newsImagesInterval = setInterval(moveNewsImage, 5000);
});

// When one of the dots is clicked
// The slide corresponding with the dot should appear
function dotClick(b) {
    $(".dots li button").css(
        {
            background: "0 0"
        }
    );
    b.style.background = "white";

    newsIndex = parseInt(b.value);
    const newPosition = newsIndex * imageSize;
    

    $("#list-of-news-images a").css(
        {
            position: "relative",   
            right: `${newPosition}px`
        }
    );
    
    // Start new slider interval
    clearInterval(newsImagesInterval);
    newsImagesInterval = setInterval(moveNewsImage, 5000);
}


// Stop the slider when mouse is over it
function mouseOverNews() {
    
    clearInterval(newsImagesInterval);

}

// Start the slider interval again when mouse is out of it
function mouseOutNews() {

    newsImagesInterval = setInterval(moveNewsImage, 5000);

}

// !!!!!!!!!!!!!!!!!!!! Interval function  !!!!!!!!!!!!!!!!!!!!!!!!!
// Every 5 seconds move to next slide
function moveNewsImage() {
    newsIndex++;
    if (newsIndex > 13) {
        newsIndex = 0;
    }

    $(".dots li button")[newsIndex].click();
        
}