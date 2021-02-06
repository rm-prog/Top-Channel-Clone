
let newsIndex = 0;
let newsImagesInterval;

let imageSize;

$(function () {
    $(".dots li button").first().css(
        {
            background: "white"
        }
    );
    
    imageSize = screen.width <= 768 ? 300 : 580;
    newsImagesInterval = setInterval(moveNewsImage, 5000);
});

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
    
    clearInterval(newsImagesInterval);
    newsImagesInterval = setInterval(moveNewsImage, 5000);
}

function mouseOverNews() {
    
    clearInterval(newsImagesInterval);

}

function mouseOutNews() {

    newsImagesInterval = setInterval(moveNewsImage, 5000);

}

function moveNewsImage() {
    newsIndex++;
    if (newsIndex > 13) {
        newsIndex = 0;
    }

    $(".dots li button")[newsIndex].click();
        
}