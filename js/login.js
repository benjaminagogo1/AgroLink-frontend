const loginForm = document.getElementById("login-form");

const phone = document.getElementById("phone");
const password = document.getElementById("password");

const button = loginForm.querySelector("button");

// Message

const message = document.createElement("p");
message.className = "message";
loginForm.appendChild(message);

// Show Password

const toggle = document.createElement("span");
toggle.className = "toggle-password";
toggle.textContent = "Show";

password.parentNode.appendChild(toggle);

toggle.addEventListener("click", () => {

    password.type =
        password.type === "password"
            ? "text"
            : "password";

    toggle.textContent =
        password.type === "password"
            ? "Show"
            : "Hide";

});

// Login

loginForm.addEventListener("submit",(event)=>{

    event.preventDefault();

    message.textContent="";

    if(phone.value.trim()===""){

        message.textContent="Phone number is required.";
        message.style.color="red";

        phone.focus();

        return;

    }

    if(password.value.length<8){

        message.textContent="Password must be at least 8 characters.";
        message.style.color="red";

        password.focus();

        return;

    }

    button.disabled=true;

    button.textContent="Signing In...";

    setTimeout(()=>{

        window.location.href="dashboard.html";

    },1500);

});



// Background Slideshow

const loginImages=[

    "../assets/images/un.jpeg",
    "../assets/images/login-image6.jpeg",
    "../assets/images/login-image7.jpeg",
    "../assets/images/login-image8.jpeg",
    "../assets/images/login-image9.jpeg"

];

const background=document.getElementById("auth-background");

let current=0;

function changeBackground(){

    background.style.opacity=0;

    setTimeout(()=>{

        current++;

        if(current>=loginImages.length){

            current=0;

        }

        background.src=loginImages[current];

        background.style.opacity=1;

        background.style.transform="scale(1.08)";

        setTimeout(()=>{

            background.style.transform="scale(1)";

        },200);

    },400);

}

setInterval(changeBackground,4000);