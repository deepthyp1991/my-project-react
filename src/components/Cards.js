import React from 'react';
import './Card.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out our home made cakes!</h1>
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
  );
}

export default Cards;