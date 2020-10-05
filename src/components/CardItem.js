import React from 'react'


function CardItem(props) {
    return (
       <>
          <li className = 'cards__item'>
              <div className = 'cards_item__link' to = {props.path}>
                  <figure className = 'cards_item_pic-wrap' data-category = {props.label}>
                      <img src ={props.src} alt='' className = 'cards_item_image' />
                  </figure>
                  <div className = 'cards_item_info'>
                  <h5 className = 'cards_item_next'>{props.text}</h5>
                  </div>
              </div>
              </li>  
        </>
    )
}

export default CardItem
