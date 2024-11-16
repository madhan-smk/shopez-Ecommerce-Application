import React from 'react'
import "./DescriptionBox.css"

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews(122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>Welcome to our fashion haven, where style meets quality and affordability. Explore a diverse range of clothing and accessories tailored to suit every occasion and personality.</p>
        <p>Step into a world of fashion where every piece is curated with passion and precision. Uncover timeless styles and contemporary trends that cater to every taste and occasion.</p>
      </div>
    </div>
  )
}

export default DescriptionBox
