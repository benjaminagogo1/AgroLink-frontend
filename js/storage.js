const data = [
    {
        produce: "Maize",
        quantity: 120,
        unit: "Bags",
        location: "Warehouse A"
    },
    {
        produce: "Rice",
        quantity: 80,
        unit: "Bags",
        location: "Warehouse B"
    }
];

const tbody = document.getElementById("storage-body");
const modal = document.getElementById("modal");

function render(items){

    tbody.innerHTML = "";

    items.forEach((item,index)=>{

        tbody.innerHTML += `
        <tr>

            <td>${item.produce}</td>

            <td>${item.quantity}</td>

            <td>${item.unit}</td>

            <td>${item.location}</td>

            <td>

                <button onclick="removeProduce(${index})">
                    Delete
                </button>

            </td>

        </tr>
        `;

    });

}

render(data);

document.getElementById("add-btn").onclick = ()=>{

    modal.style.display="flex";

};

document.getElementById("close-btn").onclick = ()=>{

    modal.style.display="none";

};

document.getElementById("storage-form").onsubmit=function(e){

    e.preventDefault();

    data.push({

        produce:produce.value,

        quantity:quantity.value,

        unit:unit.value,

        location:location.value

    });

    render(data);

    modal.style.display="none";

    this.reset();

};

function removeProduce(index){

    data.splice(index,1);

    render(data);

}

document.getElementById("search").onkeyup=function(){

    const keyword=this.value.toLowerCase();

    render(

        data.filter(item=>

            item.produce.toLowerCase().includes(keyword)

        )

    );

};