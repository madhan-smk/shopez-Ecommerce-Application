import React from 'react'
import "./Footer.css"
import logo from "../../Assets/footer_logo.png"
import insta from "../../Assets/insta_logo.png"
import facebook from "../../Assets/facebook.png"
import pinterest from "../../Assets/pinterest.png"

const Footer = () => {
  return (
    <div className='footer'>

        <div className="footer_logo" id='homepage'>
            <img src={logo} alt='' width={300}/>
            <p><a href='#homepage'>ShopEZ</a></p>
        </div>

        <ul className='footer-links'>
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
        </ul>

        <ul className="footer-social-icons">
          <li>  
            <img src={insta} alt='Instagram logo' width={70}/>
          </li>
          <li>
            <img src={facebook} alt='facebook logo' width={70}/>
          </li>
          <li>
            <img src={pinterest} alt='pinterest logo' width={45}/>
          </li> 
        </ul>

        <div className="footer-copyright">
            <hr/>
            <p>Copyright @2024 - All Right Reserved</p>
        </div>

    </div>
  )
}

export default Footer
