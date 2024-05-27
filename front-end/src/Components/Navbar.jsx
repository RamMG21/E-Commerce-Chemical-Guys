import React, { useState } from 'react';
import '../Styles/Navbar.css';


const Navbar = () => {

    const [menu, setMenu] = useState("shop");

  return (
    <div className='navbar'>
        <div className='nav-logo'>
            <img className='img-logo' src="https://yt3.googleusercontent.com/ytc/AIdro_mc0_d16kCLDbPdCetmBApurBp8AgHnMLZ1HQlOp3wai0g=s900-c-k-c0x00ffffff-no-rj" alt="" />
            <p>Chemical Guys</p>
        </div>
        <ul className='nav-menu'>
            <li onClick={()=>{setMenu("shop")}}> Shop {menu ==="shop"?<hr/>:<></>}  </li> 
            <li onClick={()=>{setMenu("mens")}}> Men {menu ==="mens"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("womens")}}> Women {menu ==="womens"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("kids")}}> Kids {menu ==="kids"?<hr/>:<></>}</li>
        </ul>
        <div className="nav-login-cart">
           <button>Login</button>
             <img className='logo-shop-cart' src="https://upload.wikimedia.org/wikipedia/commons/f/f2/Shopping-cart-transparent-icon.png" alt="" /> 
            <div className="nav-cart-count">0</div>
        </div>
    </div>
  )
}

export default Navbar;