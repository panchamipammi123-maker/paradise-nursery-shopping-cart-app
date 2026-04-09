import React, { useState } from "react";
import AboutUs from "./components/AboutUs";
import ProductList from "./components/ProductList";
import "./App.css";

function App() {
  const [showProducts, setShowProducts] = useState(false);

  const handleGetStarted = () => {
    setShowProducts(true);
  };

  return (
    <div className="background-image">
      <h1>Paradise Nursery</h1>
      <p>Welcome to Paradise Nursery, your online plant store.</p>

      {!showProducts && (
        <button onClick={handleGetStarted}>Get Started</button>
      )}

      {showProducts && <ProductList />}
    </div>
  );
}

export default App;
