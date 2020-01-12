"use strict";

const LEFT_KEYCODE = 37;
const RIGHT_KEYCODE = 39;

let folder = "img/";
let images = ["orange.jpg", "cherry.jpg", "apple.jpg"];

let getRandomImage = function() {
    return Math.floor(Math.random() * images.length);
};
let currentImageIndex = getRandomImage();

let background = document.querySelector(".background");
let overlay = document.querySelector(".overlay");
overlay.style.backgroundImage = "url(" + folder + images[currentImageIndex] + ")";

let nextImage = function() {
    let nextImageIndex = currentImageIndex + 1;
    if (nextImageIndex >= images.length) {
        nextImageIndex = 0;
    };
    currentImageIndex = nextImageIndex;

    overlay.style.backgroundImage = "url(" + folder + images[currentImageIndex] + ")";
    background.style.backgroundImage = "url(" + folder + images[currentImageIndex] + ")";
};

let previousImage = function() {
    let previousImageIndex = currentImageIndex - 1;
    if (previousImageIndex < 0) {
        previousImageIndex = images.length - 1;
    };
    currentImageIndex = previousImageIndex;

    overlay.style.backgroundImage = "url(" + folder + images[currentImageIndex] + ")";
    background.style.backgroundImage = "url(" + folder + images[currentImageIndex] + ")";
};

window.addEventListener("keydown", function(evt) {
    overlay.classList.remove("bounce");

    if (evt.keyCode === RIGHT_KEYCODE || evt.keyCode === LEFT_KEYCODE) {
        evt.preventDefault();
        overlay.classList.toggle("hide");
        background.classList.toggle("hide");
    };

    if (evt.keyCode === RIGHT_KEYCODE) {
        background.classList.remove("left");
        overlay.classList.remove("left");
        background.classList.add("right");
        overlay.classList.add("right");
        nextImage();
    };
    
    if (evt.keyCode === LEFT_KEYCODE) {
        background.classList.remove("right");
        overlay.classList.remove("right");
        background.classList.add("left");
        overlay.classList.add("left");
        previousImage();
    };
});