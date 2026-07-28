let produceList = [
    {
        produce: "Maize",
        quantity: 120,
        unit: "Bags",
        location: "Warehouse A",
        date: "2026-07-20"
    },
    {
        produce: "Rice",
        quantity: 80,
        unit: "Bags",
        location: "Warehouse B",
        date: "2026-07-18"
    }
];

const table = document.getElementById("storageTable");
const emptyState = document.getElementById("emptyState");

const modal = document.getElementById("modal");
const addButton = document.getElementById("addProduceBtn");
const closeButton = document.getElementById("closeModal");
const cancelButton = document.getElementById("cancelBtn");

const form = document.getElementById("produceForm");

const produceName = document.getElementById("produceName");
const produceQuantity = document.getElementById("produceQuantity");
const produceUnit = document.getElementById("produceUnit");
const produceLocation = document.getElementById("produceLocation");
const produceDate = document.getElementById("produceDate");

const searchInput = document.getElementById("searchInput");

let editIndex = -1;

/* ===========================
   Render Table
=========================== */

function renderTable(data = produceList) {

    table.innerHTML = "";

    if (data.length === 0) {

        emptyState.style.display = "block";

        return;
    }

    emptyState.style.display = "none";

    data.forEach((item, index) => {

        table.innerHTML += `

        <tr>

            <td>${item.produce}</td>

            <td>${item.quantity}</td>

            <td>${item.unit}</td>

            <td>${item.location}</td>

            <td>${item.date}</td>

            <td>

                <button
                    class="edit-btn"
                    onclick="editProduce(${index})"
                >
                    Edit
                </button>

                <button
                    class="delete-btn"
                    onclick="deleteProduce(${index})"
                >
                    Delete
                </button>

            </td>

        </tr>

        `;

    });

}

renderTable();

/* ===========================
   Modal
=========================== */

function openModal() {

    modal.style.display = "flex";

}

function closeModal() {

    modal.style.display = "none";

    form.reset();

    editIndex = -1;

    document.getElementById("modalTitle").textContent =
        "Add Produce";

}

addButton.onclick = openModal;

closeButton.onclick = closeModal;

cancelButton.onclick = closeModal;

window.onclick = function (event) {

    if (event.target === modal) {

        closeModal();

    }

};

/* ===========================
   Save
=========================== */

form.addEventListener("submit", function (event) {

    event.preventDefault();

    const item = {

        produce: produceName.value,

        quantity: produceQuantity.value,

        unit: produceUnit.value,

        location: produceLocation.value,

        date: produceDate.value

    };

    if (editIndex === -1) {

        produceList.push(item);

    } else {

        produceList[editIndex] = item;

    }

    renderTable();

    closeModal();

});

/* ===========================
   Delete
=========================== */

function deleteProduce(index) {

    const answer = confirm(
        "Delete this produce permanently?"
    );

    if (!answer) {

        return;

    }

    produceList.splice(index, 1);

    renderTable();

}

/* ===========================
   Edit
=========================== */

function editProduce(index) {

    editIndex = index;

    const item = produceList[index];

    produceName.value = item.produce;

    produceQuantity.value = item.quantity;

    produceUnit.value = item.unit;

    produceLocation.value = item.location;

    produceDate.value = item.date;

    document.getElementById("modalTitle").textContent =
        "Edit Produce";

    openModal();

}

/* ===========================
   Search
=========================== */

searchInput.addEventListener("keyup", function () {

    const keyword = this.value.toLowerCase();

    const filtered = produceList.filter(item =>

        item.produce.toLowerCase().includes(keyword) ||

        item.location.toLowerCase().includes(keyword)

    );

    renderTable(filtered);

});