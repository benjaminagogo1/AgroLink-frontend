const storageForm = document.getElementById("storage-form");
const storageTable = document.getElementById("storage-table");

storageForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const produce = document.getElementById("produce-name").value;
    const quantity = document.getElementById("quantity").value;
    const unit = document.getElementById("unit").value;
    const location = document.getElementById("location").value;
    const dateStored = document.getElementById("date-stored").value;

    const row = document.createElement("tr");

    row.innerHTML = `
        <td>${produce}</td>
        <td>${quantity}</td>
        <td>${unit}</td>
        <td>${location}</td>
        <td>${dateStored}</td>
        <td>
            <button>Edit</button>
            <button>Delete</button>
        </td>
    `;

    storageTable.appendChild(row);

    storageForm.reset();
});