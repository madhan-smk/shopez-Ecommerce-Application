import React, { useState, useRef, useContext } from 'react';
import "./ShopCategory.css";
import { HomeContext } from "../../Context/HomeContext";
import Item from "../../components/HomeComp/Item/item";

const Fashioncategory = (props) => {
  const { all_products } = useContext(HomeContext);
  const [magnifierStyle, setMagnifierStyle] = useState({});
  const [magnifiedImage, setMagnifiedImage] = useState(null);
  const [sortOrder, setSortOrder] = useState(null);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const magnifierRef = useRef();

  const handleMouseEnter = (e, image) => {
    setMagnifiedImage(image);
  };

  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.target.getBoundingClientRect();
    const x = e.pageX - left - window.pageXOffset;
    const y = e.pageY - top - window.pageYOffset;
    const zoomLevel = 2;

    setMagnifierStyle({
      backgroundImage: `url(${magnifiedImage})`,
      backgroundSize: `${width * zoomLevel}px ${height * zoomLevel}px`,
      backgroundPosition: `-${x * (zoomLevel - 1)}px -${y * (zoomLevel - 1)}px`,
      left: `${e.pageX - 50}px`,
      top: `${e.pageY - 50}px`,
      display: 'block'
    });
  };

  const handleMouseLeave = () => {
    setMagnifierStyle({ display: 'none' });
  };

  const handleSort = (order) => {
    setSortOrder(order);
    setIsDropdownVisible(false);
  };

  const sortedProducts = [...all_products].filter(item => item.category === props.category).sort((a, b) => {
    if (sortOrder === 'low-to-high') {
      return a.new_price - b.new_price;
    } else if (sortOrder === 'high-to-low') {
      return b.new_price - a.new_price;
    } else {
      return 0;
    }
  });

  return (
    <div className='home-category'>
      <img src={props.banner} alt='Banner' id='banner' />
      <div className="fashioncategory-indexsort">
        <p>
          <span>Showing products</span>
        </p>
        <div className="fashioncategory-sort" onClick={() => setIsDropdownVisible(!isDropdownVisible)}>
          Sort by <i className="fa-solid fa-caret-down"></i>
          {isDropdownVisible && (
            <div className="dropdown">
              <div onClick={() => handleSort('low-to-high')}>Price: Low to High</div>
              <div onClick={() => handleSort('high-to-low')}>Price: High to Low</div>
            </div>
          )}
        </div>
      </div>
      <div className="fashioncategory-products">
        {sortedProducts.map((item, i) => (
          <div key={i} className='each'>
            <Item 
              id={item.id} 
              name={item.name} 
              image={item.image} 
              new_price={item.new_price} 
              old_price={item.old_price} 
              onMouseEnter={(e) => handleMouseEnter(e, item.image)}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            />
          </div>
        ))}
      </div>
      <div className="fashioncategory-loadmore">
        Explore more
      </div>
      <div ref={magnifierRef} className="magnifier" style={magnifierStyle}></div>
    </div>
  );
}

export default Fashioncategory;
