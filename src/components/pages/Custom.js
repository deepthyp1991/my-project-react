import React, { useState } from 'react';

const Custom_Cakes = 'Custom Cakes';

export default function Custom({ setCart, cart }) {
  const [products] = useState([
    {
      category: Custom_Cakes,
      name: 'Cat Cake',
      cost: 2.99,
      image:
        'images/Custom2.jpg',
    },
    {
      category: Custom_Cakes,
      name: 'Vancho Cake',
      cost: 19.99,
      image:
        'images/Custom3.jpg',
    },
    {
     category: Custom_Cakes,
    name: 'Red cream Cake',
     cost: 19.99,
     image:'images/Custom4.jpg',
     },
     {
    category: Custom_Cakes,
    name: 'White Forest Cake',
    cost: 19.99,
    image:'images/Custom9.jpg',
      },
  ]);

  const addToCart = (product) => {
    let newCart = [...cart];
    let itemInCart = newCart.find(
      (item) => product.name === item.name
    );
    if (itemInCart) {
      itemInCart.quantity++;
    } else {
      itemInCart = {
        ...product,
        quantity: 1,
      };
      newCart.push(itemInCart);
    }
    setCart(newCart);
  };

  const [category] = useState( Custom_Cakes);

  const getProductsInCategory = () => {
    return products.filter(
      (product) => product.category === category
    );
  };

  return (
    <>
      <div className="products">
        {getProductsInCategory().map((product, idx) => (
          <div className="product" key={idx}>
            <h3>{product.name}</h3>
            <h4>${product.cost}</h4>
            <img src={product.image} alt={product.name} /><br />
            <button onClick={() => addToCart(product)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </>
  );
}