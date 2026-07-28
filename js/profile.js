const editButton = document.querySelector(".profile-header button");

const nameElement = document.querySelector(".profile-header h1");
const locationElement = document.querySelector(".profile-header p");

const info = document.querySelectorAll(".card");

editButton.addEventListener("click", () => {

    const newName = prompt("Enter your full name:", nameElement.textContent);

    if (newName && newName.trim() !== "") {
        nameElement.textContent = newName;
    }

    const newLocation = prompt(
        "Enter your location:",
        locationElement.textContent
    );

    if (newLocation && newLocation.trim() !== "") {
        locationElement.textContent = newLocation;
    }

});

const securityButtons = document.querySelectorAll(".card button");

securityButtons.forEach(button => {

    button.addEventListener("click", () => {

        const action = button.textContent;

        if (confirm(`Are you sure you want to ${action.toLowerCase()}?`)) {

            button.textContent = "Completed";

            button.disabled = true;

        }

    });

});

const profileImage = document.querySelector(".profile-header img");

profileImage.addEventListener("click", () => {

    alert("Profile picture upload will be available after backend integration.");

});

const today = new Date();

console.log(
    `Profile loaded successfully on ${today.toDateString()}`
);