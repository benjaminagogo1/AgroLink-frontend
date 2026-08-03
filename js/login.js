const loginForm = document.getElementById("login-form");

const phone = document.getElementById("phone");
const password = document.getElementById("password");

const button = loginForm.querySelector("button");

const passwordWrapper = document.querySelector(".password-wrapper");

// ---------- Password Error ----------

const passwordError = document.createElement("small");
passwordError.className = "field-error";

passwordWrapper.appendChild(passwordError);

// ---------- Show Password ----------

const toggle = document.createElement("span");

toggle.className = "toggle-password";
toggle.textContent = "Show";

passwordWrapper.appendChild(toggle);

toggle.addEventListener("click", () => {

    if (password.type === "password") {

        password.type = "text";
        toggle.textContent = "Hide";

    } else {

        password.type = "password";
        toggle.textContent = "Show";

    }

});

// ---------- Login ----------

loginForm.addEventListener("submit", function (event) {

    event.preventDefault();

    passwordError.textContent = "";

    if (phone.value.trim() === "") {

        alert("Phone number is required.");

        phone.focus();

        return;

    }

    if (password.value.length < 8) {

        passwordError.textContent =
            "Password must be at least 8 characters.";

        password.focus();

        return;

    }

    button.disabled = true;
    button.textContent = "Signing In...";

    setTimeout(() => {

        window.location.href = "dashboard.html";

    }, 1500);

});

// ---------- Background Images ----------

const loginImages = [

    "../assets/images/un.jpeg",
    "../assets/images/login-image6.jpeg",
    "../assets/images/login-image7.jpeg",
    "../assets/images/login-image8.jpeg",
    "../assets/images/login-image9.jpeg"

];

const background = document.getElementById("auth-background");

let current = 0;

function changeBackground() {

    background.style.opacity = 0;

    setTimeout(() => {

        current++;

        if (current >= loginImages.length) {

            current = 0;

        }

        background.src = loginImages[current];

        background.style.opacity = 1;

    }, 400);

}

setInterval(changeBackground, 4000);