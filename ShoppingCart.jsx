// import React, { useState, useEffect } from 'react';
// import { Link, useNavigate } from 'react-router-dom';

// function ShoppingCart() {
//   const [cart, setCart] = useState([]);
//   const navigate = useNavigate(); // Importing and using the navigate function

//   useEffect(() => {
//     // Retrieve cart items from local storage
//     const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
//     setCart(storedCart);
//   }, []);

//   const calculateItemPrice = (item) => {
//     return item.price * item.quantity;
//   };

//   const calculateTotalPrice = () => {
//     return cart.reduce((total, item) => {
//       return total + calculateItemPrice(item);
//     }, 0);
//   };

//   const handleLogout = () => {
//     // Remove the current logged-in user
//     localStorage.removeItem('user');
//     // Optionally, you can show a logout confirmation message here
//     alert('Logged out successfully!');
//     // Navigate to the home page using navigate function
//     navigate('/');
//   };

//   return (
//     <div>
//       <h2>Shopping Cart</h2>
//       <div>
//         <button onClick={handleLogout}>Logout</button>
//       </div>
//       <ul>
//         {cart.map((item, index) => (
//           <li key={index}>
//             {item.name} - ${item.price.toFixed(2)} x {item.quantity} = ${calculateItemPrice(item).toFixed(2)}
//           </li>
//         ))}
//       </ul>
//       <h3>Total: ${calculateTotalPrice().toFixed(2)}</h3>
//       <Link to="/ecom">
//         <button>Continue Shopping</button>
//       </Link>
//     </div>
//   );
// }

// export default ShoppingCart;
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './ShoppingCart.css';


function ShoppingCart() {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate(); // Importing and using the navigate function

  useEffect(() => {
    // Retrieve cart items from sessionStorage based on logged-in user
    const { username } = JSON.parse(sessionStorage.getItem('user')) || {};
    const userCart = JSON.parse(sessionStorage.getItem('cart')) || {};
    setCart(userCart[username] || []);
  }, []);

  const calculateItemPrice = (item) => {
    return item.price * item.quantity;
  };

  const calculateTotalPrice = () => {
    return cart.reduce((total, item) => {
      return total + calculateItemPrice(item);
    }, 0);
  };

  const handleLogout = () => {
    // Clear sessionStorage on logout
    sessionStorage.removeItem('user');
    // Optionally, you can show a logout confirmation message here
    alert('Logged out successfully!');
    // Navigate to the home page using navigate function
    navigate('/');
  };

  const handlePlaceOrder = () => {
    // Show a confirmation dialog
    const confirmOrder = window.confirm('Are you sure you want to place the order?');
    if (confirmOrder) {
      // Order has been placed
      alert('Your order has been placed!');
      // Redirect to the root page using navigate function
      navigate('/');
    }
  };

  const handleDeleteItem = (index) => {
    // Remove the selected item from the cart
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);
    // Update the cart in sessionStorage
    const { username } = JSON.parse(sessionStorage.getItem('user')) || {};
    sessionStorage.setItem('cart', JSON.stringify({ ...JSON.parse(sessionStorage.getItem('cart')), [username]: updatedCart }));
    // Update the state to re-render the component
    setCart(updatedCart);
  };

  return (
    <div className="ShoppingCart">
      <div className="actions">
        <button onClick={handleLogout}>Logout</button>
      </div>
      <h2>Shopping Cart</h2>
      <div className="cart-items">
        {cart.map((item, index) => (
          <div key={index} className="cart-item">
            <div className="product-details">
              <h3>{item.name}</h3>
              <p>Price: ${item.price.toFixed(2)}</p>
              <p>Quantity: {item.quantity}</p>
            </div>
            <div className="product-price">
              <p>Total: ${calculateItemPrice(item).toFixed(2)}</p>
              <button onClick={() => handleDeleteItem(index)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
      <div className="total">
        <h3>Total: ${calculateTotalPrice().toFixed(2)}</h3>
      </div>
      <div className="actions">
        <button onClick={handlePlaceOrder}>Place Order</button>
        <Link to="/ecom">
          <button>Continue Shopping</button>
        </Link>
      </div>
    </div>
  );
}

export default ShoppingCart;

