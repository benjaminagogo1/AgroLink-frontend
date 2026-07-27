const loginForm = document.getElementById("login-form");
const errorMessage = document.getElementById("error-message");

loginForm.addEventListener("submit", function (event) {

    event.preventDefault();

    errorMessage.textContent = "";

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;

    if (!email || !password) {
        errorMessage.textContent = "Please fill in all fields.";
        return;
    }

    console.log({
        email,
        password
    });

    alert("Login Successful");

    // Later:
    // window.location.href = "dashboard.html";
});