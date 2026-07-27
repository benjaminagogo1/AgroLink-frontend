const registerForm = document.getElementById("register-form");
const errorMessage = document.getElementById("error-message");

registerForm.addEventListener("submit", function (event) {
    event.preventDefault();

    errorMessage.textContent = "";

    const firstName = document.getElementById("first-name").value.trim();
    const lastName = document.getElementById("last-name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;
    const terms = document.getElementById("terms").checked;

    // Validation

    if (
        !firstName ||
        !lastName ||
        !email ||
        !phone ||
        !password ||
        !confirmPassword
    ) {
        errorMessage.textContent = "Please fill in all required fields.";
        return;
    }

    if (password.length < 8) {
        errorMessage.textContent =
            "Password must be at least 8 characters long.";
        return;
    }

    if (password !== confirmPassword) {
        errorMessage.textContent = "Passwords do not match.";
        return;
    }

    if (!terms) {
        errorMessage.textContent =
            "You must agree to the Terms & Conditions.";
        return;
    }

    const user = {
        first_name: firstName,
        last_name: lastName,
        email: email,
        phone: phone,
        password: password,
    };

    console.log("Registration Data:");
    console.log(user);

    alert("Registration successful!");

    registerForm.reset();
});