import React, {useEffect} from 'react';
import axios from 'axios';
import './products.css';
import {FaStarHalfAlt} from 'react-icons/fa';
import {BsCart4} from 'react-icons/bs';

const Products = ({setProduct, pro, Carting, setLoad, fetchData}) => {

  useEffect(() => {
   fetchData();
  }, [])

    return (
          pro.map((res) => {
           const{title, description, price, discountPercentage, rating,
           thumbnail} = res;
           return (
             <div className='card' key={res.id}>
             <img src={thumbnail} alt='product' width='370px' height='290px' />
               <h3 className='title'>{title}</h3>
               <p className='discrp'>{description}</p>
               <div className='pricing'>
                 <h4>From ₹{price}</h4>
               <h5>{discountPercentage}<span>%off</span></h5>
               </div>
               <h5 className='rating'><FaStarHalfAlt style={{color:'orange'}} />{rating}</h5>
               <button onClick={Carting} className='cart'><BsCart4 />Add to cart</button>
             </div>
           )
         })
    )
}

export default Products;