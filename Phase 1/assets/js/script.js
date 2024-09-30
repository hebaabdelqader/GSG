// array of product objects
const products = [
    { name: "SUMMER BREEZE", 
    category: "shirts", 
    price: 49.99, 
    image: "assets/imgs/summer-breeze.jpg",
    info:"LIGHTWEIGHT COTTON SHIRT PERFECT FOR SUMMER DAYS."
},
{ name: "WINTER WARMER", 
    category: "jackets", 
    price: 129.99, 
    image: "assets/imgs/jacket.jpg",
    info:"INSULATED JACKET TO KEEP YOU WARM DURING WINTER."
},
{
    name: "CLASSIC DENIM", 
    category: "pants", 
    price: 79.99, 
    image: "assets/imgs/jeans1.jpg",
    info:"TIMELESS BLUE DENIM JEANS, PERFECT FOR ANY OCCASION."
},
{
    name: "FORMAL TOUCH", 
    category: "suits", 
    price: 249.49, 
    image: "assets/imgs/suit1.jpg",
    info:"ELEGANT BLACK SUIT FOR FORMAL OCCASIONS."
},
{
    name: "MODERN DRESS", 
    category: "dresses", 
    price: 99.99, 
    image: "assets/imgs/dress1.jpg",
    info:"STYLISH DRESS FOR A MODERN LOOK."
},
{
    name: "RUNNING SHOES", 
    category: "shoes", 
    price: 89.99, 
    image: "assets/imgs/shoes1.jpg",
    info:"COMFORTABLE SHOES FOR RUNNING AND EVERYDAY USE."
},
{
    name: "SUNNY HAT", 
    category: "accessories", 
    price: 19.99, 
    image: "assets/imgs/hat1.jpg",
    info:"PROTECT YOURSELF FROM THE SUN WITH THIS STYLISH HAT."
},
];

// Function to filter products
function filterProd(category) {
    let filteredProducts;
    let catego = document.getElementById('category');

    if (category === 'all') {
        filteredProducts = products;
        catego.innerHTML = "OUR PRODUCT LISTS";
    } else {
        filteredProducts = products.filter(product => product.category === category);
        catego.innerHTML = `${category.toUpperCase()} LIST`;
    }

    displayProd(filteredProducts);

    const buttons = document.querySelectorAll('#filter-btns button');
    buttons.forEach(button => {
        button.classList.remove('active');
        if (button.innerText.toLowerCase() === category) {
            button.classList.add('active');
        }
    });
}

// display products
function displayProd(filteredProducts) {
    const productContainer = document.getElementById('prod-container');
    productContainer.innerHTML = '';

    filteredProducts.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>Category: ${product.category.toUpperCase()}</p>
            <p>${product.info.toUpperCase()}</p>
            <h4>$${product.price}</h4>
        `;
        productContainer.appendChild(productCard);
    });
}

// Display all products initially
displayProd(products);
