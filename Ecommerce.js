// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

// function Ecommerce() {
//   const [products, setProducts] = useState([
//     { id: 1, name: 'Product 1', price: 10 },
//     { id: 2, name: 'Product 2', price: 20 },
//     { id: 3, name: 'Product 3', price: 30 },
//     { id: 4, name: 'Product 4', price: 40 },
//   ]);


//   const handleAddToCart = (product) => {
//     // Retrieve existing cart items from local storage
//     const existingCart = JSON.parse(localStorage.getItem('cart')) || [];
//     // Add the selected product to the cart
//     const updatedCart = [...existingCart, { ...product }];
//     // Save the updated cart to local storage
//     localStorage.setItem('cart', JSON.stringify(updatedCart));
//     // Optionally, you can show a confirmation message here
//     alert('Product added to cart!');
//   };

//   return (
//     <div>
//       <h2>E-commerce Page</h2>
//       <h3>Products</h3>
//       <ul>
//         {products.map(product => (
//           <li key={product.id}>
//             {product.name} - ${product.price}
//             <input
//               type="number"
//               min="1"
//               defaultValue="1"
//               onChange={(e) => {
//                 const quantity = parseInt(e.target.value);
//                 product.quantity = quantity;
//               }}
//             />
//             <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
//           </li>
//         ))}
//       </ul>
//       <Link to="/cart">
//         <button>View Cart</button>
//       </Link>
//     </div>
//   );
// }

// export default Ecommerce;





import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Ecommerce.css';

function Ecommerce() {
  const [products, setProducts] = useState([
    { id: 1, name: 'Product 1', price: 10 },
    { id: 2, name: 'Product 2', price: 20 },
    { id: 3, name: 'Product 3', price: 30 },
    { id: 4, name: 'Product 4', price: 40 },
  ]);

  const handleAddToCart = (product) => {
    // Retrieve existing cart items from sessionStorage
    const existingCart = JSON.parse(sessionStorage.getItem('cart')) || {};
    const { username } = JSON.parse(sessionStorage.getItem('user')) || {};
    
    // Add the selected product to the user's cart
    existingCart[username] = [...(existingCart[username] || []), { ...product }];
    
    // Save the updated cart to sessionStorage
    sessionStorage.setItem('cart', JSON.stringify(existingCart));
    
    // Optionally, you can show a confirmation message here
    alert('Product added to cart!');
  };

  return (
    <div className='Ecommerce'>
      <h2>E-commerce Page</h2>
      <h3>Products</h3>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            {product.name} - ${product.price}
            <input
              type="number"
              min="1"
              defaultValue="1"
              onChange={(e) => {
                const quantity = parseInt(e.target.value);
                product.quantity = quantity;
              }}
            />
            <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
          </li>
        ))}
      </ul>
      <Link to="/cart">
        <button>View Cart</button>
      </Link>
    </div>
  );
}

export default Ecommerce;
