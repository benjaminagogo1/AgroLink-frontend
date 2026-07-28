const images = [

    "assets/images/farmer1.jpg",
    "assets/images/farmer2.jpg",
    "assets/images/farmer3.jpg",
    "assets/images/farmer4.jpg"

];

const slider = document.getElementById("hero-slider");

let currentImage = 0;

function changeImage(){

    slider.style.opacity = 0;

    setTimeout(() => {

        currentImage++;

        if(currentImage >= images.length){

            currentImage = 0;

        }

        slider.src = images[currentImage];

        slider.style.opacity = 1;

    },400);

}

setInterval(changeImage,4000);