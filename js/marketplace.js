const products = [

    {
        name: "Maize",
        category: "Grains",
        price: "₦65,000",
        seller: "Joseph Farms",
        image: "../assets/images/maize.jpg"
    },

    {
        name: "Rice",
        category: "Grains",
        price: "₦82,000",
        seller: "Benue Agro",
        image: "../assets/images/rice.jpg"
    },

    {
        name: "Yam",
        category: "Tubers",
        price: "₦4,500",
        seller: "Green Harvest",
        image: "../assets/images/yam.jpg"
    },

    {
        name: "Tomatoes",
        category: "Vegetables",
        price: "₦18,000",
        seller: "Fresh Farm",
        image: "../assets/images/tomato.jpg"
    }

];

const container = document.getElementById("products");

function display(list){

    container.innerHTML = "";

    list.forEach(product=>{

        container.innerHTML += `

        <div class="product-card">

            <img src="${product.image}" alt="${product.name}">

            <div class="product-content">

                <h3>${product.name}</h3>

                <p>${product.category}</p>

                <h2>${product.price}</h2>

                <p>Seller: ${product.seller}</p>

                <button>Contact Seller</button>

            </div>

        </div>

        `;

    });

}

display(products);

search.onkeyup=function(){

    const keyword=this.value.toLowerCase();

    filterProducts(keyword,category.value);

};

category.onchange=function(){

    filterProducts(search.value.toLowerCase(),this.value);

};

function filterProducts(keyword,selected){

    const filtered=products.filter(product=>{

        const matchName=

        product.name.toLowerCase().includes(keyword);

        const matchCategory=

        selected==="all" ||

        product.category===selected;

        return matchName && matchCategory;

    });

    display(filtered);

}