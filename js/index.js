const images = [

    "assets/images/Farmer1.jpeg",
    "assets/images/Farmer2.jpeg",
    "assets/images/Farmer3.jpeg",
    "assets/images/Farmer4.jpeg",
    "assets/images/Farmer5.jpeg",
    "assets/images/Farmer5.jpeg",
    "assets/images/Farmer6.jpeg",
    "assets/images/Farmer7.jpeg",
    "assets/images/Farmer8.jpeg",
    "assets/images/Farmer9.jpeg",
    "assets/images/Farmer10.jpeg"

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