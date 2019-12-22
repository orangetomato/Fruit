"use strict";

const LEFT_KEYCODE = 37;
const RIGHT_KEYCODE = 39;

let folder = "img/";
let images = ["orange.jpg", "cherry.jpg", "apple.jpg"];

let getRandomImage = function () {
    return Math.floor(Math.random() * images.length);
};
let currentImageIndex = getRandomImage()

let body = document.querySelector("body");
body.style.backgroundImage = "url(" + folder + images[currentImageIndex] + ")";

let nextImage = function () {
    let nextImageIndex = currentImageIndex + 1;
    if (nextImageIndex >= images.length) {
        nextImageIndex = 0;
    };
    currentImageIndex = nextImageIndex;
    body.style.backgroundImage = "url(" + folder + images[currentImageIndex] + ")";
};

let previousImage = function () {
    let previousImageIndex = currentImageIndex - 1;
    if (previousImageIndex < 0) {
        previousImageIndex = images.length - 1;
    };
    currentImageIndex = previousImageIndex;
    body.style.backgroundImage = "url(" + folder + images[currentImageIndex] + ")";
};

window.addEventListener("keydown", function(evt) {
    if (evt.keyCode === RIGHT_KEYCODE) {
        evt.preventDefault();
        nextImage();
    };

    if (evt.keyCode === LEFT_KEYCODE) {
        evt.preventDefault();
        previousImage();
    };
});