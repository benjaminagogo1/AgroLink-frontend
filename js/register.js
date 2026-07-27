const registerForm = document.getElementById("register-form");

const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");

const button = registerForm.querySelector("button");

// Message
const message = document.createElement("p");
message.className = "message";
registerForm.appendChild(message);

// Password strength
const strength = document.createElement("small");
strength.className = "password-strength";
password.parentNode.appendChild(strength);

// Show Password
const togglePassword = document.createElement("span");
togglePassword.className = "toggle-password";
togglePassword.textContent = "Show";
password.parentNode.appendChild(togglePassword);

// Show Confirm Password
const toggleConfirm = document.createElement("span");
toggleConfirm.className = "toggle-password";
toggleConfirm.textContent = "Show";
confirmPassword.parentNode.appendChild(toggleConfirm);

togglePassword.onclick = () => {
    password.type =
        password.type === "password" ? "text" : "password";

    togglePassword.textContent =
        password.type === "password" ? "Show" : "Hide";
};

toggleConfirm.onclick = () => {
    confirmPassword.type =
        confirmPassword.type === "password"
            ? "text"
            : "password";

    toggleConfirm.textContent =
        confirmPassword.type === "password"
            ? "Show"
            : "Hide";
};

password.addEventListener("input", () => {

    if (password.value.length < 8) {
        strength.textContent = "Weak Password";
        strength.style.color = "red";
    }

    else if (password.value.length < 12) {
        strength.textContent = "Medium Password";
        strength.style.color = "orange";
    }

    else {
        strength.textContent = "Strong Password";
        strength.style.color = "green";
    }

});

registerForm.addEventListener("submit", function (event) {

    event.preventDefault();

    message.textContent = "";

    if (
        firstName.value === "" ||
        lastName.value === "" ||
        email.value === "" ||
        phone.value === ""
    ) {

        message.textContent = "Please complete all fields.";
        message.style.color = "red";
        return;

    }

    if (password.value !== confirmPassword.value) {

        message.textContent = "Passwords do not match.";
        message.style.color = "red";
        return;

    }

    button.disabled = true;
    button.textContent = "Creating Account...";

    setTimeout(() => {

        window.location.href = "login.html";

    }, 1500);

});