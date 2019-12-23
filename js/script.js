"use strict";

const LEFT_KEYCODE = 37;
const RIGHT_KEYCODE = 39;

let folder = "img/";
let images = ["orange.jpg", "cherry.jpg", "apple.jpg"];

let getRandomImage = function () {
    return Math.floor(Math.random() * images.length);
};
let currentImageIndex = getRandomImage();

let background = document.querySelector(".background");
let container = document.querySelector(".container");
container.style.backgroundImage = "url(" + folder + images[currentImageIndex] + ")";

let pressedLeft = 0;
let pressedRight = 0;

let nextImage = function () {
    background.classList.remove("overlay-left");
    background.classList.remove("background-left");
    if (pressedRight % 2 !== 0) {
        background.classList.remove("overlay-right");
        background.classList.add("background-right");
    } else {
        background.classList.add("overlay-right");
        background.classList.remove("background-right");
    };

    let nextImageIndex = currentImageIndex + 1;
    if (nextImageIndex >= images.length) {
        nextImageIndex = 0;
    };
    currentImageIndex = nextImageIndex;
    background.style.backgroundImage = "url(" + folder + images[currentImageIndex] + ")";
};

let previousImage = function () {
    background.classList.remove("overlay-right");
    background.classList.remove("background-right");
    if (pressedLeft % 2 !== 0) {
        background.classList.remove("overlay-left");
        background.classList.add("background-left");
    } else {     
        background.classList.add("overlay-left");
        background.classList.remove("background-left");
    };

    let previousImageIndex = currentImageIndex - 1;
    if (previousImageIndex < 0) {
        previousImageIndex = images.length - 1;
    };
    currentImageIndex = previousImageIndex;
    background.style.backgroundImage = "url(" + folder + images[currentImageIndex] + ")";
};

window.addEventListener("keydown", function(evt) {
    background.style.display = "block";
    if (background.style.backgroundImage) {
        container.style.backgroundImage = background.style.backgroundImage;
    };

    if (evt.keyCode === RIGHT_KEYCODE) {
        evt.preventDefault();
        pressedRight +=1;
        nextImage();
    };

    if (evt.keyCode === LEFT_KEYCODE) {
        evt.preventDefault();
        pressedLeft +=1;
        previousImage();
    };
});