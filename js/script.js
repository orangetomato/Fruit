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
let overlay = document.querySelector(".overlay");
overlay.style.backgroundImage = "url(" + folder + images[currentImageIndex] + ")";
overlay.classList.add("bounce");

let pressedLeft = 0;
let pressedRight = 0;

let nextImage = function () {
    let nextImageIndex = currentImageIndex + 1;
    if (nextImageIndex >= images.length) {
        nextImageIndex = 0;
    };
    currentImageIndex = nextImageIndex;

    overlay.classList.remove("overlay-left");
    background.classList.remove("background-left");
    if (pressedRight % 2 !== 0) {
        overlay.classList.remove("overlay-right");
        background.classList.add("background-right");
        background.style.display = "block";
        background.style.backgroundImage = "url(" + folder + images[currentImageIndex] + ")";
    } else {
        overlay.classList.add("overlay-right");
        background.classList.remove("background-right");
        overlay.style.display = "block";
        overlay.style.backgroundImage = "url(" + folder + images[currentImageIndex] + ")";
    };
};

let previousImage = function () {
    let previousImageIndex = currentImageIndex - 1;
    if (previousImageIndex < 0) {
        previousImageIndex = images.length - 1;
    };
    currentImageIndex = previousImageIndex;

    overlay.classList.remove("overlay-right");
    background.classList.remove("background-right");
    if (pressedLeft % 2 !== 0) {
        overlay.classList.remove("overlay-left");
        background.classList.add("background-left");
        background.style.display = "block";    
        background.style.backgroundImage = "url(" + folder + images[currentImageIndex] + ")";
    } else {
        overlay.classList.add("overlay-left");
        background.classList.remove("background-left");
        overlay.style.display = "block";
        overlay.style.backgroundImage = "url(" + folder + images[currentImageIndex] + ")";
    };
};

window.addEventListener("keydown", function(evt) {
    overlay.classList.remove("bounce");
    overlay.style.display = "none";
    background.style.display = "none";

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