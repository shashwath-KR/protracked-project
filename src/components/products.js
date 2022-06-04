import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './products.css';
import {FaStarHalfAlt} from 'react-icons/fa';
import {BsCart4} from 'react-icons/bs';

const Products = ({setLoad, setProduct, pro, Carting}) => {

let url = "https://dummyjson.com/products?limit=100"

const fetchData = async() => {
  try {
    setLoad(true)
       const response = await axios(url)
        const reslt = response.data.products;
        setProduct(reslt);
        setLoad(false) 
      } 
      catch(error)  {
       console.log(error);
  }
}

  useEffect(() => {
   fetchData();
  }, [])


    return (
        pro.length === 0 ?
        <div className='pro-h1'>
          <h1>Not Found...</h1>
        </div>
        :
          pro.map((res) => {
           const{title, description, price, discountPercentage, rating,
           thumbnail} = res
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