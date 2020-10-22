import React, { useState } from 'react';

const Birthday_Cakes = 'Birthday Cakes';

export default function Birthday({ setCart, cart }) {
  const [products] = useState([
    {
      category: Birthday_Cakes,
      name: 'Vanilla Cake',
      cost: 2.99,
      image:
        'images/Birthday_Cake11.jpg',
    },
    {
      category: Birthday_Cakes,
      name: 'White Forest Cake',
      cost: 19.99,
      image:
        'images/Birthday_Cake15.jpg',
    },
    {
     category: Birthday_Cakes,
    name: 'Doll Cake',
     cost: 19.99,
     image:'images/Birthday_Cake16.jpg',
     },
     {
    category: Birthday_Cakes,
    name: 'Strawberry Cake',
    cost: 19.99,
    image:'images/Birthday_Cake17.jpg',
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

  const [category] = useState( Birthday_Cakes);

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