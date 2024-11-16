import React, { useContext } from 'react';
import "./ProductDisplay.css";
import { HomeContext } from '../../Context/HomeContext';

const ProductDisplay = (props) => {
  const { product } = props;
  const { addToCart } = useContext(HomeContext);

  const handleAddToCart = () => {
    addToCart(product.id);
    alert("Your product is added to the cart");
  };

  return (
    <div className='productdisplay'>
      <div className="productdisplayleft">
        <div className="productdisplay-img-list">
          <img src={product.image} alt='' />
          <img src={product.image} alt='' />
          <img src={product.image} alt='' />
          <img src={product.image} alt='' />
        </div>
        <div className='productdisplay-img'>
          <img src={product.image} alt='' className='productdisplay-main-img' />
        </div>
      </div>
      <div className="productdisplayright">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-stars">
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star-half-stroke"></i>
          <p>(122)</p>
        </div>
        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-oldprices">${product.old_price}</div>
          <div className="productdisplay-right-newprices">${product.new_price}</div>
        </div>
        <div className="productdisplay-right-description">
          Explore our latest collection of men's fashion. From casual wear to formal attire, find the perfect outfit for any occasion. Our selection features top-quality fabrics, modern designs, and unbeatable prices.
        </div>
        <div className="productdisplay-right-size">
          <h1>Select size</h1>
          <div className="productdisplay-right-sizes">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
          </div>
        </div>
        <button onClick={handleAddToCart}>Add to cart</button>
        <p className='productdisplay-right-category'>
          <span>Category: </span>
          Women, tshirt, crop top
        </p>
        <p className='productdisplay-right-category'>
          <span>Tags: </span>
          Modern, tshirt
        </p>
      </div>
    </div>
  );
}

export default ProductDisplay;
