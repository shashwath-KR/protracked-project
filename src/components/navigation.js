import React from "react";
import './navigation.css';
import {Link} from 'react-router-dom';  

const Navigation = ({Ary}) => {
const[visible, setVisible] = React.useState('hidden');

const menu = {
    width: '200px',
    height: '30em',
    backgroundColor: '#fff9f98c',
    overflow: 'scroll',
    visibility: visible
}

const Visibility = () => {
    if(visible === 'hidden') {
         setVisible('visible')
    } else {
         setVisible('hidden')
    }
}

    return (
        <div>
           <div onClick={Visibility} className="bar">
               <div className="line"></div>
               <div className="line"></div>
               <div className="line"></div>
           </div>
           <div style={menu}>{
               Ary.map((categ, index) => {
                   return (
                     <div key={index} className="categ">
                      <Link className="lists" to={categ.path}><button className="list">{categ.category}</button></Link>
                     </div>
                   )
               })
           }</div>
        </div>
    )
}

export default Navigation;