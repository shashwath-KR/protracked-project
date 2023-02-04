import React from "react";
import './header.css';
import Logo from '../img/Shopping-Logo.jpg';
import { Link } from "react-router-dom";
import {BsFillCartCheckFill} from 'react-icons/bs';
import { useSelector } from "react-redux";

const Header = ({input, setInput, count, counts}) => {
 
const{myProductIds} = useSelector(state => state.mycart);

    return (
        <div className="nav">
        <img className="logo" src={Logo} alt='shop' width='70px' height='70px' />
        <div className="Right-side">
        <div className="icon"><span style={counts}>{myProductIds.length}</span>
        <Link to="/mycart"><BsFillCartCheckFill style={{color: 'orange', fontSize: '32px'}}/></Link>
        </div>
        <input value={input} type='text' placeholder="Search"
         onChange={(e) => setInput(e.target.value)} maxLength='50' />
         </div>
      </div>
    )
}

export default Header;