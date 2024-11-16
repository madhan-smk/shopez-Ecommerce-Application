import React from 'react';
import { Link } from 'react-router-dom';
import './Item.css';

const Item = (props) => {
  const { id, image, name, onMouseEnter, onMouseMove, onMouseLeave, new_price, old_price } = props;

  return (
    <div className="item">
      <Link to={`/product/${id}`}>
        <img 
          src={image} 
          alt={name} 
          onMouseEnter={onMouseEnter} 
          onMouseMove={onMouseMove} 
          onMouseLeave={onMouseLeave}
        />
      </Link>
      <p>{name}</p>
      <div className='item-prices'>
        <div className="item-price-new">
          {new_price}
        </div>
        <div className="item-price-old">
          {old_price}
        </div>
      </div>
    </div>
  );
};

export default Item;
