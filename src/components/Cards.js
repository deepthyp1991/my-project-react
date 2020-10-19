import React from 'react';
import './Card.css';
import CardItem from './CardItem';
import Footer from './Footer'
import Navbar from './Navbar';

function Cards() {
  return (
    <div>
    <Navbar />    
    <div className='cards'>
      <h1>Welcome to Cake World!</h1>
      <h3>Check out our home made cakes!</h3>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/Anniversary1.jpg'
               text='Strawberry Cake'
               />
            <CardItem
              src='images/Anniversary2.jpg'
               text='Black Forest'
             />
            <CardItem
              src='images/Anniversary3.jpg'
               text='Black Forest'
            />
            <CardItem
              src='images/Anniversary4.jpg'
               text='Black Forest'
            />
            </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/custom4.jpg'
              text='Cream Choclate'
             />
            <CardItem
              src='images/Birthday_Cake1.jpg'
               text='Vanilla Cake'
              />
            <CardItem
              src='images/Custom3.jpg'
               text='Vancho'
             />
              <CardItem
              src='images/Birthday_Cake3.jpg'
               text='Vancho'
             />
          </ul>
        </div> 
      </div>  
    </div>
    <Footer />
    </div>
    
  );
}

export default Cards;