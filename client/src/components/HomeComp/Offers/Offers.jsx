import React from 'react'
import "./Offers.css"
import midnight_sale from "../../Assets/midnight_sale.png"

const Offers = () => {
  return (
    <div className='offers'>
      <div className="offers-left">
        <img src={midnight_sale} alt=''/>
      </div>

      <div className="offers-right">
        <h1>Hurry!</h1>
        <h1>For @midnightsales</h1>
        <p>Only after midnight </p>
        <p>For 1 Hour</p>
        <button>Check Now</button>
      </div>
    </div>
  )
}

export default Offers
