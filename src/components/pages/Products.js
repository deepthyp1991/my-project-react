import React, { useState } from 'react';

const Anniversary_Cakes = 'Anniversary Cakes';

export default function Products({ setCart, cart }) {
  const [products] = useState([
    {
      category: Anniversary_Cakes,
      name: 'Velvet Cake',
      cost: 2.99,
      image:
        'images/Anniversary1.jpg',
    },
    {
      category: Anniversary_Cakes,
      name: 'Choclate Cake',
      cost: 19.99,
      image:
        'images/Anniversary2.jpg',
    },
    {
     category: Anniversary_Cakes,
    name: 'Choclate Cake',
     cost: 19.99,
     image:'images/Anniversary3.jpg',
     },
     {
    category: Anniversary_Cakes,
    name: 'Choclate Cake',
    cost: 19.99,
    image:'images/Anniversary4.jpg',
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

  const [category] = useState( Anniversary_Cakes);
  // const [name] = useState( Anniversary_Cakes);

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
            <img src={product.image} alt={product.name} />
            <button onClick={() => addToCart(product)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </>
  );
}