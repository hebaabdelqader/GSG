import { useState } from 'react';
import './App.css'; // تأكد من أن الـ CSS المعدل مرفق في هذا الملف
import FilterButtons from './components/FilterButtons/FilterButtons.jsx';
import Footer from './components/Footer/Footer.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import ProductList from './components/Products/ProductList.jsx';

// بيانات الملابس
const products = [
  { 
    name: "DENIM JACKET", 
    category: "jackets", 
    price: 59.99, 
    image: "../imgs/jacket1.png",
    info: "CLASSIC BLUE DENIM JACKET, A MUST-HAVE FOR YOUR WARDROBE."
  },
  { 
    name: "BLACK HOODIE", 
    category: "hoodies", 
    price: 39.99, 
    image: "../imgs/hoodie1.png",
    info: "COMFORTABLE BLACK HOODIE WITH A MINIMAL DESIGN."
  },
  {
    name: "CASUAL T-SHIRT", 
    category: "t-shirts", 
    price: 19.99, 
    image: "../imgs/tshirt1.png",
    info: "SOFT COTTON T-SHIRT FOR EVERYDAY WEAR."
  },
  {
    name: "FORMAL SHIRT", 
    category: "shirts", 
    price: 49.99, 
    image: "../imgs/shirt1.png",
    info: "ELEGANT WHITE FORMAL SHIRT, PERFECT FOR BUSINESS OCCASIONS."
  },
  {
    name: "RUNNING SHOES", 
    category: "shoes", 
    price: 79.99, 
    image: "../imgs/shoes1.png",
    info: "LIGHTWEIGHT RUNNING SHOES FOR SPORTS AND CASUAL WEAR."
  },
  {
    name: "BLUE JEANS", 
    category: "jeans", 
    price: 59.99, 
    image: "../imgs/jeans1.png",
    info: "SLIM FIT BLUE JEANS WITH STRETCH FABRIC FOR COMFORT."
  },
  {
    name: "LEATHER JACKET", 
    category: "jackets", 
    price: 99.99, 
    image: "../imgs/jacket2.png",
    info: "STYLISH LEATHER JACKET WITH A MODERN FIT."
  },
];

function App() {
  const [filteredProd, setFilteredProd] = useState(products);
  const [title, setTitle] = useState('OUR CLOTHING COLLECTION');

  const handleFilterChange = (category) => {
    if (category === 'all') {
      setFilteredProd(products);
      setTitle('OUR CLOTHING COLLECTION');
    } else {
      setFilteredProd(products.filter(product => product.category === category));
      setTitle(`${category.toUpperCase()} COLLECTION`);
    }
  };

  return (
    <>
      <Navbar title={title} />
      <FilterButtons onFilterChange={handleFilterChange} />
      <ProductList products={filteredProd} />
      <Footer />
    </>
  );
}

export default App;
