
import { assets } from '../../assets/assets'
import './Header.css'

const Header = () => {
  return (
    <div className='header' >
      <img src={assets.header} alt="" className='header-img'/>
      <div className="header-contents">
        <h2>Order your favourite food here</h2>
        <p>Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise. our mission is to satisfy your cravings and elevate your dining experience,one delicious meal at a time.</p>
        <button><a href="#explore-menu">View menu</a></button>
      </div>

    </div>
  )
}

export default Header