import React from "react";
import './header.css';
import Logo from '../img/Shopping-Logo.jpg';
import {BsFillCartCheckFill} from 'react-icons/bs';

const Header = ({input, setInput, count}) => {

    return (
        <div className="nav">
        <img src={Logo} alt='shop' style={{borderRadius: '50%'}} width='70px' height='70px' />
        <div className="Right-side">
        <div><span className="count">{count}</span>
        <BsFillCartCheckFill style={{color: 'orange', fontSize: '32px'}}/>
        </div>
        <input value={input} type='text' placeholder="Search"
         onChange={(e) => setInput(e.target.value)} maxLength='50' />
         </div>
      </div>
    )
}

export default Header;