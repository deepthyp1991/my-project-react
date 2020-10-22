import React, { useState } from 'react';
import Cart from './Cart';
import Custom from './Custom';
import './Cart.css'

const PAGE_PRODUCTS = 'products';
const PAGE_CART = 'cart';

function CustomCake() {
  const [cart, setCart] = useState([]);
  const [page, setPage] = useState(PAGE_PRODUCTS);

  const navigateTo = (nextPage) => {
    setPage(nextPage);
  };

  const getCartTotal = () => {
    return cart.reduce(
      (sum, { quantity }) => sum + quantity,
      0
    );
  };

  return (
    <div className="App">
      <header>
        <button onClick={() => navigateTo(PAGE_CART)}>
          Go to Cart ({getCartTotal()})
        </button>

        <button onClick={() => navigateTo(PAGE_PRODUCTS)}>
          View Cakes
        </button>
      </header>
      {page === PAGE_PRODUCTS && (
        <Custom cart={cart} setCart={setCart} />
      )}
      {page === PAGE_CART && (
        <Cart cart={cart} setCart={setCart} />
      )}
    </div>
  );
}

export default CustomCake;