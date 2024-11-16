import React from 'react'
import "./Hero.css"
import hand_icon from "../../Assets/hand_icon.png"
import arrow_icon from "../../Assets/arrow_icon.png"
import hero_img from "../../Assets/watch.png"

const Hero = () => {
  return (
    <div className='hero'>
      <div className='hero-left'>
        <h2>New launches</h2>
        <div>
            <div className="hero-hand-icon">
                <p>New</p>
                <img src={hand_icon} alt='' width={1005}></img>
            </div>
            <p>Collections and</p>
            <p>Products for Everything and everyone</p>
        </div>
        <div className="hero-latest-button">
            <div>Exclusive products</div>
            <img src={arrow_icon} alt="" width={50}/>
        </div>
      </div>

      <div className='hero-right'>
        <img src={hero_img} alt='' width={300}></img>
      </div>
    </div>
  )
}

export default Hero
