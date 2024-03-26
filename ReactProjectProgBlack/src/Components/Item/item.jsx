import React from 'react';
import './item.css';

const Item = (props) => { // <-- Props should be passed as an argument
    return(
        <div className='item'>
            <img src={props.image} alt='' />
            <p>{props.name}</p>
            <div className='item-price-new'>
                ${props.new_price}
            </div>
            <div className='item-price-old'>
                ${props.old_price}
            </div>
        </div>
    );
}

export default Item;
