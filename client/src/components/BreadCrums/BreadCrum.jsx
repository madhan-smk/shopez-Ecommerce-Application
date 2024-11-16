import React from 'react'
import "../BreadCrums/BreadCrum.css"

const BreadCrum = (props) => {
    const {product}=props;
  return (
    <div className='breadcrum'> 
      HOME <i className="fa-solid fa-caret-right"/> SHOP <i className="fa-solid fa-caret-right"/> {product.category} <i className="fa-solid fa-caret-right"/> {product.name}
    </div>
  )
}

export default BreadCrum