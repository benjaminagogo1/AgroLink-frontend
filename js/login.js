const loginForm = document.getElementById("login-form");
const email = document.getElementById("email");
const password = document.getElementById("password");
const button = loginForm.querySelector("button");

// Create message container
const message = document.createElement("p");
message.className = "message";
loginForm.appendChild(message);

// Create show password button
const toggle = document.createElement("span");
toggle.textContent = "Show";
toggle.className = "toggle-password";
password.parentNode.appendChild(toggle);

toggle.addEventListener("click", () => {
    if (password.type === "password") {
        password.type = "text";
        toggle.textContent = "Hide";
    } else {
        password.type = "password";
        toggle.textContent = "Show";
    }
});

loginForm.addEventListener("submit", function (event) {
    event.preventDefault();

    message.textContent = "";

    if (email.value.trim() === "") {
        message.textContent = "Email is required.";
        message.style.color = "red";
        email.focus();
        return;
    }

    if (password.value.length < 8) {
        message.textContent = "Password must be at least 8 characters.";
        message.style.color = "red";
        password.focus();
        return;
    }

    button.disabled = true;
    button.textContent = "Signing In...";

    setTimeout(() => {
        window.location.href = "dashboard.html";
    }, 1500);
});