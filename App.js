// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Registration from './Registration';
import Login from './Login';
import Ecommerce from './Ecommerce';
import ShoppingCart from './ShoppingCart'; 

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/login" element={<Login />} />
          {/* Add more routes as needed */}
          <Route path="/ecom" element={<Ecommerce />} />
          <Route path="/cart" element={<ShoppingCart />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
